import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("@/components/ui/AppLink", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/navigation", () => ({
  usePathname: () => "/",
}));
