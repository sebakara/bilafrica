import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const page = useSite().chrome.error;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{page.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{page.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="button" onClick={reset}>
          {page.retry}
        </Button>
        <Button href="/" variant="outline">
          {page.home}
        </Button>
      </div>
    </Container>
  );
}
