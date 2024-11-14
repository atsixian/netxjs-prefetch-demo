import Link from "next/link";
export default function FullPrefetchModalPage() {
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center", fontSize: 36 }}>
      <div>
        <h1>Partial prefetch when intercepting</h1>
        <Link href="/posts/1">/posts/1</Link>
      </div>
    </div>
  );
}
