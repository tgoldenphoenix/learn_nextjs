/* [...slug] catch all segment; match any ~/docs/...
double square bracket is optional
*/
export default async function Doc({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  //docs/feature1/concept1
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature <u>{slug[0]}</u> and concept <u>{slug[1]}</u>
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return (<>
    <h1>Docs home page</h1>
    <p>Inside <code>app/docs/[[...slug]]</code></p>
  </>)
}
