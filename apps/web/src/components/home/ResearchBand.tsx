import Link from "@/components/ui/AppLink";
import { PracticeBand } from "@/components/home/PracticeBand";
import { researchFormats } from "@/data/home";

export function ResearchBand() {
  return (
    <PracticeBand
      eyebrow="Research & Policy"
      title="Research that informs technology decisions."
      description="Evidence-based technology and policy advisory. These are the formats BIL will publish. Released reports will be listed here. Sample writing lives in Insights."
      actionHref="/services/research-policy"
      actionLabel="Read Our Approach"
      items={researchFormats}
      footer={
        <>
          Illustrative samples are marked as such in{" "}
          <Link href="/insights" className="font-semibold text-brand">
            Insights
          </Link>
          .
        </>
      }
    />
  );
}
