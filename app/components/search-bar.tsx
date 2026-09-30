export default function SearchBar() {
  return (
    <div className="flex items-center gap-2.5 h-11 bg-(--color-surface) border-solid border-(--color-divider)">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{flex: "none", color: "var(--color-neutral-700)"}}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <span className="text-[15px] text-neutral-600"></span>
    </div>
  );
}
