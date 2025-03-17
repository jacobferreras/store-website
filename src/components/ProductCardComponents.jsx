import React from "react";

function Productcard({ product }) {
  return (
    <>
      <div className="card bg-gray-100 w-68 h-96 shadow-sm">
        <figure>
          <img src={product.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
            {product.title}
            <div className="badge badge-secondary bg-red-600">NEW</div>
          </h2>
          <p className="text-black">{product.price}</p>
          <div className="card-actions justify-end">
            <div className="badge bg-black">Fashion</div>
            <div className="badge bg-black">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
