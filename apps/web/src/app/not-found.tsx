import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">We could not find that page.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The address may be mistyped, or the page has not been published. You can return home or start a conversation.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="outline">
          Contact BIL
        </Button>
      </div>
    </Container>
  );
}
