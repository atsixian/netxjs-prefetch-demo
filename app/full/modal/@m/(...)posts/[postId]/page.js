export default async function Page() {
  console.log("/@m/page");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <p>Intercepting route</p>;
}
