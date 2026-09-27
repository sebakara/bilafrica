type Feature = { title: string; description: string };

export function FeatureGrid({ items }: { items: readonly Feature[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-t border-line pt-4">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
