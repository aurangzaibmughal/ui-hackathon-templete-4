import React from "react";
import Image from "next/image"; // Image component import karein

const ShopexOffer: React.FC = () => {
  const offers = [
    { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/Group24-7.png" },
    { id: 2, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/hand-doller.png" },
    { id: 3, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/Group1 (3).png" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/free.png" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">What Shopex Offer!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="text-center p-4">
            <Image 
              src={offer.image} 
              alt={offer.title} 
              width={64} // Image ka width
              height={64} // Image ka height
              className="mx-auto mb-4" // CSS classes ko className mein rakh sakte hain
            />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
// import React from "react";

// const ShopexOffer: React.FC = () => {
//   const offers = [
//     { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/Group24-7.png" },
//     { id: 2, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/hand-doller.png" },
//     { id: 3, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/Group1 (3).png" },
//     { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/free.png" },
//   ];

//   return (
//     <div className="py-10 px-5 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-5">What Shopex Offer!</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {offers.map((offer) => (
//           <div key={offer.id} className="text-center p-4">
//             <img src={offer.image} alt={offer.title} className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">{offer.title}</h3>
//             <p className="text-gray-500">{offer.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopexOffer;