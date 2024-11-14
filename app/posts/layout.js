export default function PostsLayout({ children }) {
  console.log("/posts/layout");
  return (
    <div>
      <h1>Posts layout</h1>
      {children}
    </div>
  );
}
