export function LogoStrip({ logos: _logos }: { logos: string[] }) {
  void _logos;
  const items = ['Commerce', 'Corporate website', 'Landing page', 'Blog', 'Social network'];

  // 4x duplication in the DOM for safety across screen sizes.
  // The animation still moves exactly -50% so the loop point aligns perfectly.
  const copies = 4;
  const repeatedItems = Array.from({ length: copies }, () => items).flat();

  // Dynamic animation duration based on number of items.
  // Base: 20s for 5 items (distance = 1 copy). For -50% on 4 copies, distance = 2 copies.
  const baseDurationSeconds = (items.length / 5) * 20;
  const distanceCopies = copies / 2;
  const animationDuration = `${baseDurationSeconds * distanceCopies}s`;

  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] py-10 sm:py-12">
      {/* Container-only change: keep marquee visuals, prevent layout overflow on mobile */}
      <div
        className="mx-auto w-full max-w-6xl overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex max-w-full group">
          <div
            className="flex min-w-max items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused] [will-change:transform]"
            style={{
              animation: `scroll-infinite ${animationDuration} linear infinite`,
            }}
          >
            {repeatedItems.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-8">
                <span className="text-white text-lg font-medium tracking-wide">{item}</span>
                {index < repeatedItems.length - 1 && (
                  <span className="text-green-400 text-2xl font-light">*</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
