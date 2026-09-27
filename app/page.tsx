import Link from "next/link";
import { regions } from "./lib/regions";
import RegionCard from "./components/region-card";
export default function Home() {
  return (
    <main>
      <div className="h-full py-[clamp(28px,5cqi,56px)] px-[clamp(16px,4cqi,48px)] flex flex-col gap-5 max-w-240">
        <div className="text-(--color-accent-700) text-[11px] font-semibold uppercase tracking-widest">
          A Field guide to 250 countries
        </div>
        <h1 className="text-[clamp(40px,7cqi,88px)] tracking-[-0.03em] m-0 text-balance font-(--font-heading-weight) leading-none">
          Every country has a story. Start with its neighbours.
        </h1>
        <p className="text-[clamp(16px,1.6cqi,19px)] max-w-155 m-0 text-pretty">
          Atlas pulls flags, capitals, languages and borders for every country
          and territory. Browse by region, search by name, and follow a border
          from one country to the next.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/countries`}
            className="inline-flex items-center gap-2.5 text-(--color-bg) bg-(--color-accent) px-3 py-4 font-extrabold text-[15px] justify-between min-w-55"
          >
            Browse all countries
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="px-[clamp(16px,4cqi,48px)] py-[clamp(40px,6cqi,80px)] flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-3 border-t-2 border-solid border-(--color-divider) pt-4">
          <h2 className="text-[clamp(22px, 2.4cqi, 28px)] m-0">
            Explore Region
          </h2>
          <span className="text-[13px] text-neutral-700">6 regions</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(180px,45%),1fr))] gap-0.5 bg-(--color-divider) border-2 border-solid border-(--color-divider)">
          {regions.map((region) => (
            <RegionCard
              key={region.name}
              name={region.name}
              numberOfCountries={region.numberOfCountries}
            />
          ))}
        </div>
      </div>
      <div className="bg-(--color-accent) text-(--color-bg) py-[clamp(32px,6cqi,72px)] px-[clamp(16px,4cqi,48px)] ">
        <div className="font-extrabold text-[clamp(32px,5.5cqi,72px)] leading-none tracking-[-0.03em] max-w-225 text-balance">
          250 countries. 6 regions. Refreshed every day.
        </div>
      </div>
    </main>
  );
}
