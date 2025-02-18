import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  
  return (
    <div className="relative text-center font-medium">
     
      <div className=" text-[4rem]">
        <h1></h1>
        <p className="text-primary text-2xl font-bold">
          Code . Collab . Improve
        </p>
      </div>
        <AvatarLine/>
        <div className="flex gap-20 justify-center items-center"></div>
        <Button>Get Started</Button>
        <Button>Get Started</Button>
    </div>
  );
};

export default HeroSection;

const AvatarLine = () => {
  const avatarImages = [
    "https://gravatar.com/avatar/43b2003dcd10f6efb8f3be90dced3ad2?s=400&d=robohash&r=x",
    "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png",
    "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Images.png",
  ];
  return(
    <div className="flex items-center justify-center">
    {avatarImages.map((image) => (
      <Avatar className="-mr-2 border-2">
        <AvatarImage src={image} className="" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ))}
    <p className="px-4">200+ Users Community</p>
  </div>
  )}