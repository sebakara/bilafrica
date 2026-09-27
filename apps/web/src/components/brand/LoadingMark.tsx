import Image from "@/components/ui/Image";

export function LoadingMark() {
  return (
    <div className="flex flex-col items-center justify-center gap-4" role="status" aria-live="polite">
      <Image
        src="/brand/sizes/mark-64.png"
        alt=""
        width={64}
        height={65}
        priority
        className="loading-mark h-16 w-auto"
      />
      <p className="text-sm font-semibold tracking-[0.16em] text-muted uppercase">Loading</p>
    </div>
  );
}
