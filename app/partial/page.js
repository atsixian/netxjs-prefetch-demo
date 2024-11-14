import Link from "next/link";
export default function FullPrefetchPage() {
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center", fontSize: 36 }}>
      <div>
        <h1>Partial prefetch</h1>
        <Link href="/posts/1">/posts/1</Link>
      </div>
    </div>
  );
}
