import type { OfferingGroup } from "@/types/content";

export function OfferingGroups({ groups }: { groups: OfferingGroup[] }) {
  return (
    <div className="space-y-16">
      {groups.map((group, index) => (
        <section key={group.title} id={group.id}>
          <div className="max-w-3xl">
            <p className="eyebrow text-brand">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance">{group.title}</h2>
            {group.introduction ? <p className="mt-4 leading-relaxed text-muted">{group.introduction}</p> : null}
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.title} id={item.id} className="border border-line bg-canvas px-5 py-5">
                <dt className="font-sans text-base font-semibold text-ink">{item.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
