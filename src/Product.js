function Product(props) {
  return (
    <div className="divide-x-2 divide-none">
      <div className="  ">
        <img src={props.productObj.photoName} alt={props.productObj.name}></img>
      </div>
      <div className="font-bold text-xl p-4 pl-6 text-center ">
        <p>{props.productObj.name}</p>
        <span>${props.productObj.price}</span>
      </div>
    </div>
  );
}

export default Product;
