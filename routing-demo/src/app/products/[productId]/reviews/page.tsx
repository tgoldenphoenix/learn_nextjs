// TODO: review listing page for each product
export default async function productReviewList({ params }: {
  params: Promise<{ productId: string; }>
}) {
  const { productId } = await params;

  return <>
    <h1>All reviews of product: {productId}</h1>
    <ul>
      <li>Review 1</li>
      <li>Review 2</li>
      <li>Review 3</li>
      <li>Review 4</li>
    </ul>
  </>
}
