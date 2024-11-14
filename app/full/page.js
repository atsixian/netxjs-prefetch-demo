import Link from "next/link";
export default function FullPrefetchPage() {
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center", fontSize: 36 }}>
      <div>
        <h1>Full prefetch</h1>
        <Link prefetch href="/posts/1">/posts/1</Link>
      </div>
    </div>
  );
}
