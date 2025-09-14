/*
This is a "nested layout"
`app/layout.tsx` is the root layout
*/

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading product");
  // }

  return (
    <>
      {children}
      <h2>Features products</h2>
      <p>This feature section is a nested layout inside <code>products/[productId]/layout.tsx</code></p>
      <p>The root layout inside <code>app/layout.tsx</code> is still being rendered.</p>
    </>
  );
}
