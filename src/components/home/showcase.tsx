import Image from "next/image";

import scribble from "../../../public/scribble.webp";
import laptop from "../../../public/laptop.webp";
import monitor from "../../../public/monitor.webp";
import macbook from "../../../public/macbook.webp";
import starlink from "../../../public/starlink.webp";
import printer from "../../../public/printer.webp";
import desktop from "../../../public/desktop.webp";
import scanner from "../../../public/scanner.webp";

import { Button } from "../ui/button";

const showcaseSection = [
	{
		name: "Laptop",
		link: "/",
		image: laptop,
		color: "#009B93",
	},
	{
		name: "Monitor",
		link: "/",
		image: monitor,
		color: "#04325C"
	},
	{
		name: "Macbook",
		link: "/",
		image: macbook,
		color: "#0E0F11"
	},
	{
		name: "Internet",
		link: "/",
		image: starlink,
		color: "#4B5162"
	},
	{
		name: "Printer",
		link: "/",
		image: printer,
		color: "#4B5162"
	},
	{
		name: "Desktop",
		link: "/",
		image: desktop,
		color: "#47C9FF"
	},
	{
		name: "Scanner",
		link: "/",
		image: scanner,
		color: "#000000"
	},


]

const Showcase = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[2rem]">
        <h2 className="font-medium text-[30px]">All in one tech store</h2>
        <Image
          src={scribble}
          alt="scribble line"
          className="mt-[-2rem]"
        ></Image>

        <p className="text-center w-[70%] text-[#5B5B5B] mt-6">
          Discover a wide range of high-quality IT devices, from laptops and
          accessories to networking solutions. Whether for business or personal
          use, we have the right technology to keep you connected, efficient,
          and ahead of the curve.
        </p>
      </div>

	  {showcaseSection.map((item, key) => {
		return (
			<div key={key} className="flex flex-col items-center text-white"
			style={{
			  background: `linear-gradient(${item.color}, #D9D9D9)`
			}}>
			  <h3 className="font-semibold mt-6 text-[30px]">{item.name}</h3>
			  <Button className="bg-[#3771C8] text-[13px] my-4">show more</Button>
			  <Image src={item.image} alt="a fine ass laptop" className="mb-[2rem]"></Image>
			</div>
		)
	  }
	
	)}
	
    </div>
  );
};

export default Showcase;
