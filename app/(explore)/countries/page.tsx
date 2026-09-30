import SearchBar from "@/app/components/search-bar"
import Image from "next/image"

const countries = [
    { code: "AR", name: "Argentina", capital: "Buenos Aires", pop: "45.7 million" },
    { code: "AU", name: "Australia", capital: "Canberra", pop: "27.0 million" },
    { code: "BR", name: "Brazil", capital: "Brasilia", pop: "212.6 million" },
    { code: "CA", name: "Canada", capital: "Ottawa", pop: "41.5 million" },
    { code: "FR", name: "France", capital: "Paris", pop: "68.6 million" },
    { code: "JP", name: "Japan", capital: "Tokyo", pop: "123.1 million" },
    { code: "KE", name: "Kenya", capital: "Nairobi", pop: "56.4 million" },
    { code: "US", name: "United States", capital: "Washington, D.C.", pop: "340.1 million" },
]

export default function Page(){
    return(
        <main className="py-[clamp(28px, 5cqi, 56px)] px-[clamp(16px, 4cqi, 48px)] flex flex-col gap-5">
            <h1 className="text-[clamp(34px, 5cqi, 56px)] leading-none tracking-[-0.03em] m-0">All countries</h1>
            <div className="flex flex-wrap gap-3 items-end">
                <div className="flex-[1_1_260px] flex flex-col gap-1.5">
                    <SearchBar />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        height: 44,
                        padding: "0 12px",
                        border: "1px solid var(--color-divider)",
                        minWidth: 190,
                        justifyContent: "space-between",
                        fontSize: 14,
                    }}
                >
                    <span>
                        <span style={{ color: "var(--color-neutral-700)" }}>Sort</span>{" "}
                        <b>Name</b>
                    </span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
            <div
                style={{
                    fontSize: 13,
                    color: "var(--color-neutral-700)",
                    borderTop: "2px solid var(--color-divider)",
                    paddingTop: 12,
                }}
            >
                {countries.length} countries, A to Z
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 45%), 1fr))",
                    gap: 2,
                    background: "var(--color-divider)",
                    border: "2px solid var(--color-divider)",
                }}
            >
                {countries.map((country) => (
                    <article
                        key={country.code}
                        className="flex flex-col bg-(--color-bg) text-(--color-text) hover:bg-neutral-200"
                    >
                        <div
                            style={{
                                aspectRatio: "3 / 2",
                                background: "var(--color-neutral-300)",
                                overflow: "hidden",
                                borderBottom: "2px solid var(--color-divider)",
                            }}
                        >
                            <Image
                                src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                                alt={`${country.name} flag`}
                                width={320}
                                height={213}
                                loading="lazy"
                                unoptimized
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <div className="font-extrabold text-[17px] leading-[1.2]">
                                {country.name}
                            </div>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "auto 1fr",
                                    gap: "2px 12px",
                                    fontSize: 13,
                                }}
                            >
                                <span style={{ color: "var(--color-neutral-700)" }}>Capital</span>
                                <span>{country.capital}</span>
                                <span style={{ color: "var(--color-neutral-700)" }}>Population</span>
                                <span style={{ fontVariantNumeric: "tabular-nums" }}>{country.pop}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    )
}