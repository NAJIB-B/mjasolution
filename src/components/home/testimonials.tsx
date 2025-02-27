import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import ticks from "../../../public/threeTick.webp";
import face from "../../../public/TFace.webp";

const Testimonials = () => {
  return (
    <div className="py-[3rem]">
      <div className="flex flex-row justify-center items-center mb-[4rem]">
        <Image
          src={ticks}
          alt={"fancy ticks"}
          className="w-10 relative -top-3"
        ></Image>
        <h2 className="font-semibold text-[30px] text-[#0B0A0A] ">
          TESTIMONIALS
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        {Array.from({ length: 6 }).map((_, key) => {
          return (
            <Card className={`w-[45%] relative my-9 ${key % 2 === 0 ? "translate-y-[-4.5rem]" : ""}`} key={key}>
              <Image
                src={face}
                alt="avatar"
                className="absolute top-[-20%] left-[%50] right-[50%] translate-x-[50%]"
              ></Image>

              <CardContent className="mt-[3rem]">
                <p className="text-[#364151] text-[14px]">
                  From consultation to delivery, the entire process was
                  seamless. The team was knowledgeable, friendly, and ensured I
                  got exactly what I needed. I’ll definitely be coming back!
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-[#0067FF] text-[15px]">
                  Daniel A., Entrepreneur
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
