const PLACE_ID = "ChIJrVAAWyUy14kRV7gR93iyuyk";

export type GoogleReview = {
  author: string;
  photo: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string | null;
};

export type GoogleReviewsPayload = {
  rating: number;
  total: number;
  mapsUri: string;
  reviews: GoogleReview[];
  error: string | null;
};

export async function getGoogleReviews(): Promise<GoogleReviewsPayload> {
  // Standard Google Maps Platform API key with "Places API (New)" enabled —
  // set this in your hosting provider's environment variables (e.g. Vercel
  // Project Settings > Environment Variables) and in a local .env file for
  // local development. Get one at https://console.cloud.google.com/google/maps-apis
  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const empty: GoogleReviewsPayload = { rating: 0, total: 0, mapsUri: "", reviews: [], error: null };
  if (!GOOGLE_PLACES_API_KEY) {
    return { ...empty, error: "GOOGLE_PLACES_API_KEY is not configured" };
  }
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en`, {
      headers: {
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": "id,rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return { ...empty, error: `Places API ${res.status}` };
    }
    const data: any = await res.json();
    const twoYearsAgo = Date.now() - 2 * 365 * 24 * 60 * 60 * 1000;
    const allReviews: GoogleReview[] = (data.reviews ?? []).map((r: any) => ({
      author: r.authorAttribution?.displayName ?? "Anonymous",
      photo: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 0,
      text: r.text?.text ?? r.originalText?.text ?? "",
      relativeTime: r.relativePublishTimeDescription ?? "",
      publishTime: r.publishTime ?? null,
    }));
    // Keep 4-5 star reviews published within the last 2 years
    const reviews: GoogleReview[] = allReviews.filter((r) => {
      if (r.rating < 4) return false;
      if (r.publishTime) {
        const ms = new Date(r.publishTime).getTime();
        if (!isNaN(ms) && ms < twoYearsAgo) return false;
      }
      return true;
    });
    return {
      rating: data.rating ?? 0,
      total: data.userRatingCount ?? 0,
      mapsUri: data.googleMapsUri ?? "",
      reviews,
      error: null,
    };
  } catch (e: any) {
    return { ...empty, error: e?.message ?? "Failed to load reviews" };
  }
}
