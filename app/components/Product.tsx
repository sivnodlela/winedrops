import React from "react";

function Product({
  product_name,
  isBottomTen,
  isTopTen,
  amount,
}: {
  product_name: string;
  isBottomTen: boolean;
  isTopTen: boolean;
  amount: string;
}) {
  let borderColor;
  if (isTopTen) {
    borderColor = "border-green-500";
  } else if (isBottomTen) {
    borderColor = "border-red-500";
  } else {
    borderColor = "border-gray-300";
  }
  return (
    <div className={`border-2 mb-4 rounded-lg p-2 ${borderColor}`}>
      <h3 className="text-lg font-semibold">
        {product_name} - {amount}
      </h3>
    </div>
  );
}

export default Product;
