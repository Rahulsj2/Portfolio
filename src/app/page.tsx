import { SectionSpy } from "@/components/SectionSpy";
import { WorkScrollIndicator } from "@/components/WorkScrollIndicator";
import { WorkSectionScroll } from "@/components/WorkSectionScroll";
import { DriveOffAnimation } from "@/components/DriveOffAnimation";
import { A11yDriveCardAnimation } from "@/components/A11yDriveCardAnimation";

export const metadata = {
  title: "Home",
  description: "Portfolio",
};

const sections = [
  { id: "home", label: "Home", bg: "bg-background-primary" },
  { id: "work", label: "Work", bg: "bg-gray-100" },
] as const;

export default function HomePage() {
  return (
    <SectionSpy>
      {sections.map(({ id, label, bg }) => (
        <section
          key={id}
          id={id}
          className={`w-full ${bg} flex items-center justify-center box-border ${
            id === "work"
              ? "min-h-[90vh] min-h-[90dvh] md:min-h-[120vh] md:min-h-[120dvh]"
              : "min-h-[90vh] min-h-[90dvh] md:min-h-screen md:min-h-[100dvh]"
          }`}
          aria-labelledby={`${id}-heading`}
        >
          {id === "home" ? (
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center px-xs lg:px-sm gap-lg text-left pt-3xl md:pt-[7rem]">
              {/* Group 1: Name */}
              <div className="flex flex-col">
                <h1 className="text-[1.125rem] font-semibold tracking-tight" style={{ color: "#737373" }}>
                  Rahul Srinivas
                </h1>
              </div>

              {/* Group 2: Prototyping line + bio paragraph */}
              <div className="flex flex-col gap-md">
                <p className="text-[4.5rem] font-light tracking-tight leading-[1.1]" style={{ color: "#1d1d1f" }}>
                  Prototyping A11y experiences for iOS <br /> and enterprise tools
                </p>
                <p className="text-body leading-relaxed max-w-2xl" style={{ color: "#1d1d1f" }}>
                  A UX engineer focused on bringing early-stage ideas to life — designing and prototyping AI-assisted platforms and consumer workflows with a systems mindset and an appreciation for technical constraints.
                </p>
              </div>

              {/* Group 3: Logos */}
              {/* <div className="flex items-center justify-start gap-xl flex-wrap" aria-hidden>
                <img
                  src="https://cdn.simpleicons.org/apple/737373"
                  alt="Apple"
                  width={32}
                  height={32}
                  className="w-8 h-8 grayscale object-contain"
                />
                <img
                  src="https://cdn.simpleicons.org/meta/737373"
                  alt="Meta"
                  width={32}
                  height={32}
                  className="w-8 h-8 grayscale object-contain"
                />
              </div> */}
            </div>
          ) : id === "work" ? (
            <div className="w-full flex flex-col items-center py-2xl pr-xs lg:pr-sm">
              <h2 id={`${id}-heading`} className="sr-only">
                {label}
              </h2>
              <WorkSectionScroll
                className="w-full overflow-x-auto overflow-y-hidden flex items-stretch pb-2 snap-x snap-mandatory scroll-smooth"
                aria-labelledby={`${id}-heading`}
                style={{ gap: 24 }}
              >
                {/* Leading spacer: 126px before first card */}
                <div className="flex-shrink-0 w-[126px] shrink-0" aria-hidden style={{ minWidth: 126 }} />
                <div className="work-group flex-shrink-0 snap-center snap-always flex items-stretch justify-center" aria-hidden>
                  <div className="work-card w-[356px] h-[490px] md:w-[1260px] md:h-[690px] rounded-[28px] overflow-hidden bg-white relative">
                    <img
                      src="/images/flux8.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-hidden
                    />
                  </div>
                </div>
                <div
                  className="work-group flex-shrink-0 w-[356px] h-[490px] md:w-[1260px] md:h-[690px] snap-center snap-always flex items-stretch gap-[24px]"
                  aria-hidden
                >
                  <div className="work-card w-[356px] h-[490px] md:w-[410px] md:h-[690px] rounded-[28px] overflow-hidden bg-white relative">
                    <img
                      src="/images/NASA.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-hidden
                    />
                  </div>
                  <div className="work-card w-[356px] h-[490px] md:w-[826px] md:h-[690px] rounded-[28px] overflow-hidden bg-white relative">
                    <A11yDriveCardAnimation />
                  </div>
                </div>
                <div className="work-group flex-shrink-0 snap-center snap-always flex items-stretch justify-center" aria-hidden>
                  <div className="work-card w-[356px] h-[490px] md:w-[1260px] md:h-[690px] rounded-[28px] overflow-hidden bg-white relative flex items-center justify-center">
                    <img
                      src="https://cdn.simpleicons.org/apple/737373"
                      alt=""
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32 grayscale object-contain opacity-90"
                      aria-hidden
                    />
                  </div>
                </div>
                {/* Trailing spacer: 126px after last card */}
                <div className="flex-shrink-0 w-[126px] shrink-0" aria-hidden style={{ minWidth: 126 }} />
              </WorkSectionScroll>
              <WorkScrollIndicator />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-content-wide px-xs py-2xl lg:px-sm flex flex-col justify-center items-center gap-2xl">
              <h2 id={`${id}-heading`} className="text-h1 font-semibold text-foreground-primary text-center">
                {label}
              </h2>
              <div className="w-full max-w-2xl">
                <DriveOffAnimation />
              </div>
              <p className="text-body text-foreground-secondary text-center">
                Section content goes here.
              </p>
            </div>
          )}
        </section>
      ))}
    </SectionSpy>
  );
}
