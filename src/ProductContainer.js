import Product from "./Product.js";

const productData = [
  {
    name: "The Tortured Poets Department The Bolter Vinyl",
    price: "35.00",
    photoName: "./product1.jpg",
  },
  {
    name: "The Tortured Poets Department The Albatross Vinyl",
    price: "35.00",
    photoName: "./product2.jpg",
  },
  {
    name: "The Tortured Poets Department The Manuscript CD",
    price: "35.00",
    photoName: "./product3.jpg",
  },
];
export default function ProductContainer() {
  return (
    <div className="productcontainer">
      <div className="  products py-5 px-5 bg-smile-pink">
        <ul className=" gap-3 columns-3   ">
          <li className="">
            {productData.map((product) => (
              <Product productObj={product} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
