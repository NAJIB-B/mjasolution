import support from "../../../public/support.webp";
import network from "../../../public/network.webp";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Middle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[85%] mx-auto">
      {/* Card 1 - Our Mission */}
      <Card className="flex flex-col ">
        <CardHeader>
		
			<Image src={support} alt="mission" />
       
		
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold pt-6 text-[25px]">Our Mission</h4>
          <p className="text-[14px] text-[#364151] py-8">
            MJA IT SOLUTIONS is a Company that offers General ICT services
            such as sales and servicing of all forms of computers such as
            desktops, laptops, palmtops and software, as well as accessories
            like printers, scanners, and keyboards, and general ICT
            Office Equipment across Abuja and its environs.
          </p>
        </CardContent>
      </Card>

      {/* Card 2 - Our Vision */}
      <Card className="flex flex-col">
        <CardHeader>

			<Image src={support} alt="mission" />


        </CardHeader>
        <CardContent>
          <h4 className="font-semibold pt-6 text-[25px]">Our Vision</h4>
          <p className="text-[14px] text-[#364151] py-8">
            To retail computers and related products and also to provide
            professional computer services that will assist businesses and
            individuals in ensuring that their computers are always in good
            shape to help them carry out their business.
          </p>
        </CardContent>
      </Card>


	   {/* Card 2 - Our Vision */}
	   <Card className="flex flex-col">
        <CardHeader>

			<Image src={support} alt="mission" />


        </CardHeader>
        <CardContent>
          <h4 className="font-semibold pt-6 text-[25px]">Our Vision</h4>
          <p className="text-[14px] text-[#364151] py-8">
            To retail computers and related products and also to provide
            professional computer services that will assist businesses and
            individuals in ensuring that their computers are always in good
            shape to help them carry out their business.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Middle;
