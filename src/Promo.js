import React from "react";

function Promo() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  let season = "";

  if (currentMonth >= 3 && currentMonth <= 5) {
    season = "spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    season = "summer";
  } else if (currentMonth >= 9 && currentMonth <= 11) {
    season = "autumn";
  } else {
    season = "winter";
  }

  let discountPercentage = 0;
  if (season === "winter") {
    discountPercentage = 30;
  } else {
    discountPercentage = 20;
  }

  return (
    <div className=" bg-white ">
      <div class="relative flex overflow-x-hidden">
        <div class="py-1 animate-marquee whitespace-nowrap ">
          <span class="mx-4 text-2xl text-black font-bold">
            {discountPercentage}% OFF SHIPPING WITH YOUR FIRST ORDER
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            BUY ONE GET ONE FOR {season.toUpperCase()} SALE
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            {discountPercentage}% OFF SHIPPING WITH YOUR FIRST ORDER
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            BUY ONE GET ONE FOR {season.toUpperCase()} SALE
          </span>
        </div>
        <div class=" absolute top-0 py-1 animate-marquee2 whitespace-nowrap">
          <span class="mx-4 text-2xl text-black font-bold">
            {discountPercentage}% OFF SHIPPING WITH YOUR FIRST ORDER
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            BUY ONE GET ONE FOR {season.toUpperCase()} SALE
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            {discountPercentage}% OFF SHIPPING WITH YOUR FIRST ORDER
          </span>
          <span class="mx-4 text-2xl text-black font-bold">
            BUY ONE GET ONE FOR {season.toUpperCase()} SALE
          </span>
        </div>
      </div>
    </div>
  );
}

export default Promo;
