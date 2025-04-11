import clap_hand_icon from "../../assets/articles/clap_hand_icon.png";

const ArticleCard = ({ image, date, desc, react }) => {
  return (
    <div className="w-[415px] pt-[12px] pl-[12px] pr-[12px] pb-[22px] h-auto rounded-[20px] border-[#E3F2F6] border-[1px] flex flex-col items-start justify-center gap-2.5">
      <img
        src={image}
        alt="Article Avatar"
        className="w-full h-auto object-cover"
      />

      <div className="w-full flex flex-col items-start gap-[5px]">
        <div className="w-full flex items-center justify-between">
          <span className="text-[#888888] font-[400] text-sm">{`le ${date}`}</span>

          <div className="bg-[#ECFDFF] flex items-center gap-[5px] w-[68px] h-[32px] rounded-[20px]">
            <span className="text-sm font-medium text-black">{react}</span>

            <img
              src={clap_hand_icon}
              alt="Clap Hand Icon"
              className="w-[20px] h-auto object-cover"
            />
          </div>
        </div>

        <p className="text-[#000000] text-[20px] font-[700] max-w-sm truncate overflow-hidden">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
