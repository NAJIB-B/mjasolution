import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

import avatar from "../../../public/avatar.webp";
import heroImg from "../../../public/heroImg.webp";
import bigCloud from "../../../public/bigCloud.webp";

const Hero = () => {
  return (
    <div className="bg-[#1D58CF] text-white flex flex-row items-center overflow-hidden">
      <div className="ml-[10%] relative">
        <h1 className="font-semibold text-[40px] my-3">Innovating Tomorrow</h1>
        <p className="text-[22px] w-[70%]">
          Empowering businesses with cutting-edge IT solutions for a smarter,
          safer, and more efficient future.
        </p>

        <div className="flex flex-row items-center gap-2 my-4">
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage src={avatar.src} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-3">
              <AvatarImage src={avatar.src} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-3">
              <AvatarImage src={avatar.src} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-3">
              <AvatarImage src={avatar.src} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <Avatar className="-ml-3">
              <AvatarImage src={avatar.src} />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>

          <p className="text-[14px]">Trusted by 540+ people </p>
        </div>

        <Button className="bg-transparent border-2 border-white text-[13px] font-semibold">
          Get Started
        </Button>
      </div>
	  <div className="relative">
	  <Image
        src={heroImg}
        alt="guy wearing black hoodie with VR"
        className=" w-[100%] pt-[-5rem] relative z-30"
      ></Image>
	  <Image src={bigCloud} alt="big cloud" className="bottom-0 left-[-50%] absolute z-10 w-[80%]"></Image>
	  <Image src={bigCloud} alt="small cloud" className="top-[40%] right-[-30%] absolute z-10 w-[80%]"></Image>
	  </div>

     
    </div>
  );
};

export default Hero;
