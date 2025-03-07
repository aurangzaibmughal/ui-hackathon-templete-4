import Image from "next/image";

export default function TrendingProducts() {
  return (
    <div className="py-10">
      {/* Grid Layout for 4 Cards */}
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Trending Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/imagef1.png" // Replace with your image source
              alt="Image 1"
              layout="fill"
              objectFit="contain" // Ensure image is not cropped
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/imagef32.png" // Replace with your image source
              alt="Image 2"
              layout="fill"
              objectFit="contain" // Ensure image is not cropped
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 1168.png" // Replace with your image source
              alt="Image 3"
              layout="fill"
              objectFit="contain" // Ensure image is not cropped
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          {/* Image Section */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 1169.png" // Replace with your image source
              alt="Image 4"
              layout="fill"
              objectFit="contain" // Ensure image is not cropped
            />
          </div>
          {/* Content Section */}
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-[#151875] mb-2">Cantilever chair</h3>
            <p className="mb-4 text-[#151875]">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}  