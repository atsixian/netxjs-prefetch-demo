import Link from "next/link";
export default function Home() {
  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      <ul>
        <ol>
          <Link href="/no">No prefetch demo</Link>
        </ol>
        <ol>
          <Link href="/partial">Partial prefetch demo</Link>
        </ol>
        <ol>
          <Link href="/full">Full prefetch demo</Link>
        </ol>
      </ul>
    </div>
  );
}
