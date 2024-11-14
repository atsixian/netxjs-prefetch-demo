export default async function Loading() {
  console.log("/@m/posts/[postId]/loading");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <p>postId Loading...</p>;
}
