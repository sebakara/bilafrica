import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/home/Hero";

describe("homepage hero", () => {
  it("explains who BIL is and how to continue", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Blockchain & Innovation Landscape" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Technology that moves ideas into reality.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore What We Do" })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: "Talk to BIL" })).toHaveAttribute("href", "/contact");
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Research")).toBeInTheDocument();
    expect(screen.getByText("Advise")).toBeInTheDocument();
    expect(screen.getByText("Innovate")).toBeInTheDocument();
  });
});
