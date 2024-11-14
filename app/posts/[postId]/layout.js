export default function PostLayout({ children }) {
  console.log("/posts/[postId]/layout");
  return (
    <div>
      <h2>Post layout</h2>
      {children}
    </div>
  );
}
