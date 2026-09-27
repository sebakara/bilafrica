import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/Header";

describe("responsive navigation", () => {
  it("opens the mobile menu and the desktop capability menu", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Blockchain & Innovation Landscape home" })).toHaveAttribute("href", "/");

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Mobile" })).toBeInTheDocument();

    const primary = screen.getByRole("navigation", { name: "Primary" });
    fireEvent.click(within(primary).getByRole("button", { name: "What We Do" }));
    expect(screen.getByRole("link", { name: /Software Engineering/ })).toHaveAttribute(
      "href",
      "/services/technology",
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("link", { name: /Software Engineering/ })).not.toBeInTheDocument();
  });
});
