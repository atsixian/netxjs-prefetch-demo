import Link from "next/link";
export default function FullPrefetchModalPage() {
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center", fontSize: 36 }}>
      <div>
        <h1>Partial prefetch when intercepting</h1>
        {Array.from({ length: 100 }).map((_, i) => (
          <Link href={`/posts/${i}`}>/posts/{i}</Link>
        ))}
      </div>
    </div>
  );
}
