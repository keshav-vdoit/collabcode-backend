const Logo = ({ size = "3xl" }: { size?: string }) => {
  return (
    <div
      className={`text-${size} font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-primary hover:scale-105 transition-all cursor-pointer`}
    >
      {"Collab Code"}
    </div>
  );
};

export default Logo;
