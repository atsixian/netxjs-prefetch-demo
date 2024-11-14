export default async function PostPage({ params }) {
  console.log("/posts/[postId]/page");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <h3>Post page {params.postId}</h3>;
}
