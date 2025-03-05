
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

const Motion = () => {
	return ( 
		<div className="grid items-center h-[100vh] gap-[0.8rem] justify-center">
			
			{/* <Button className="bg-amber-700 p-4 m-4 w-[6rem]">testing</Button> */}
			<motion.div
			initial={{
				backgroundColor: "blue",
			}}
			animate={{
				backgroundColor: "green",
			}}
			className="w-[150px] h-[150px]"></motion.div>
		</div>
	 );
}
 
export default Motion;