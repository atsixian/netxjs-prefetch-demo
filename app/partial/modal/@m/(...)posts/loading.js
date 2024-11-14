export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("@m/posts/loading");
  return <div>Posts Loading...</div>;
}
