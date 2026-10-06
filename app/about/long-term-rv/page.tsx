import { redirect } from "next/navigation";

// Long Term RV Sites has been merged into the main RV Sites page.
export default function LongTerm() {
  redirect("/accommodations/rv-sites");
}
