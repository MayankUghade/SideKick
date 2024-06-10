import Image from "next/image";
import { Button } from "./ui/button";
import { AnimatedListDemo } from "./AnimatedList";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";

export function LandingPage() {
  return (
    <div className="p-8 flex flex-col items-center justify-center ">
      <div className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
          Discover and Rate Side Projects
        </p>
        <h1 className="max-w-[850px] text-center text-sm md:text-xl px-4">
          Sidekick is a cool social media platform for discovering,
          collaborating on, and rating side projects, connecting with
          like-minded individuals around the globe for feedback and growth.
        </h1>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-2 mt-5">
        <Image
          src="/image2.svg"
          alt="Logo"
          width={550}
          height={550}
          className="mt-8"
        />
        <AnimatedListDemo />
      </div>
      <Button className="mt-10 text-xl py-5 bg-blue-600 text-white">
        Lets Get started !
      </Button>

      <FeaturedProjects />
      <Footer />
    </div>
  );
}
