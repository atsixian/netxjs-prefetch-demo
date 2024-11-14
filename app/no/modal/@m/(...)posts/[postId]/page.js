export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("/@m/page");
  return <p>Intercepting route</p>;
}
