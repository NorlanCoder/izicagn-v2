import Marquee from "react-fast-marquee";

const categories = [
  "Startups",
  "Énergies renouvelables",
  "Fintech",
  "Art et culture",
  "Entrepreneurs sociaux",
  "Commerce",
  "Industrie",
  "Mode et design",
  "Sport et loisirs",
  "Immobilier et urbanisme",
  "Distribution",
  "",
];

const CategoryBadge = ({ text }: { text: string }) => (
  <div className="px-6 py-2 rounded-full bg-[#ECFDFF] text-[#0F6D8F] font-semibold text-[14px] whitespace-nowrap mx-2">
    {text}
  </div>
);

const CategoriesSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-16 py-6 sm:py-8 md:py-10 overflow-hidden">
      {[1, 2, 3].map((_, i) => (
        <Marquee
          key={i}
          gradient={false}
          speed={30}
          pauseOnHover={true}
          loop={0}
          className="flex gap-6 sm:gap-8 md:gap-10"
          direction={i % 2 === 0 ? "left" : "right"}
        >
          {categories.concat(categories).map((category, index) => (
            <CategoryBadge key={`${i}-${index}`} text={category} />
          ))}
        </Marquee>
      ))}
    </div>
  );
};

export default CategoriesSection;
