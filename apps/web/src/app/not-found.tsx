import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

export default function NotFound() {
  const page = useSite().chrome.notFound;

  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-brand">{page.code}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{page.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{page.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">{page.home}</Button>
        <Button href="/contact" variant="outline">
          {page.contact}
        </Button>
      </div>
    </Container>
  );
}
