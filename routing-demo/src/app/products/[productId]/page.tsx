import { Metadata } from "next";

type Props = {
  /* a promise that resolve to an object containing the dynamic
    segments as key-value pairs
  */
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });
  return {
    title: `Product - ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  // Default server component
  // await the resolve the promise and get the dynamic segment
  // This `productId` can be a string number like `12`, `iphone`
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
