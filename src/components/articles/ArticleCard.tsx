import clap_hand_icon from "../../assets/articles/clap_hand_icon.png";

const ArticleCard = ({ image, date, desc, react }:any) => {
  return (
    <div className="w-full  p-4 rounded-[20px] border border-[#E3F2F6] flex flex-col items-start gap-3 bg-white shadow-sm">
      <img
        src={image}
        alt="Article Avatar"
        className="w-full h-auto object-cover rounded-[12px]"
      />

      <div className="w-full flex flex-col items-start gap-2">
        {/* Top infos */}
        <div className="w-full flex items-center justify-between">
          <span className="text-[#888888] font-normal text-sm 2xl:text-xl">{`le ${date}`}</span>

          <div className="bg-[#ECFDFF] flex items-center gap-1 px-3 py-1 rounded-[20px]">
            <span className="text-sm font-medium text-black 2xl:text-xl">
              {react}
            </span>

            <img
              src={clap_hand_icon}
              alt="Clap Hand Icon"
              className="w-[20px] 2xl:w-[30px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#000000] text-base sm:text-lg 2xl:text-2xl font-semibold leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
