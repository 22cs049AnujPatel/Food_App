import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

// Import your images
import Image1 from "@/assets/slider1.png";
import Image2 from "@/assets/slider2.png";
import Image3 from "@/assets/slider3.png";
import Image4 from "@/assets/slider4.png";
import Image5 from "@/assets/slider5.png"; // previously HereImage

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const navigate = useNavigate();

  const images = [Image1, Image2, Image3, Image4, Image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      {/* Image on the left */}
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Food Slide"
          className="object-cover w-full max-h-[500px] rounded-lg transition-all duration-700"
        />
      </div>

      {/* Search/Text section on the right */}
      <div className="flex flex-col gap-10 md:w-[50%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Craving something tasty? We’ve got you covered!
          </h1>
          <p className="text-gray-500">
            Enjoy fresh and delicious meals delivered to your doorstep - anytime, anywhere.
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 shadow-lg"
          />
          <Search className="text-gray-500 absolute inset-y-2 left-2" />
          <Button
            onClick={() => navigate(`/search/${searchText}`)}
            className="bg-orange hover:bg-hoverOrange"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
