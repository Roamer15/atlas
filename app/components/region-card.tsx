import Link from "next/link";

export default function RegionCard({
  name,
  numberOfCountries,
}: {
  name: string;
  numberOfCountries: number;
}) {
  return (
    <Link
      href={`/countries`}
      className="flex flex-col gap-8 p-4 bg-(--color-bg) text-(--color-text) min-h-37.5 hover:bg-(--color-accent) hover:text-(--color-bg) cursor-pointer"
    >
      <div className="text-[40px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
        {numberOfCountries}
      </div>
      <div className="flex items-center justify-between gap-2 mt-auto">
        <span className="font-extrabold text-[17px]">{name}</span>
        <svg
          width="16"
          height="16"
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
      </div>
    </Link>
  );
}
