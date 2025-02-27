
import { Button } from "@/components/ui/button"

import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo.webp"

const links = [
	{
		name: "HOME",
		link: "/",
	},
	{
		name: "SERVICES",
		link: "/services",
	},
	{
		name: "ABOUT",
		link: "/about",
	},
	{
		name: "CONTACT",
		link: "/contact",
	},

]

const Navbar = () => {
	return ( 
		<div className="w-[80%] mx-auto flex justify-between flex-row bg-transparent absolute top-4 left-[50%] translate-x-[-50%] z-50">
			
			<div>
				<Image src={logo} alt="mja logo"></Image>
			</div>
			<div className="flex justify-around flex-row gap-4 items-center">
				{links.map((link, key) => <Link key={key} href={link.link} className="text-white">{link.name}</Link>)}
				<Button className="bg-[#0067FF]">MARKET PLACE</Button>
			</div>

			
		</div>
	 );
}
 
export default Navbar;