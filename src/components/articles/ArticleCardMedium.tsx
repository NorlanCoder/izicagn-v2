import Clap from "../../assets/clap.svg";

const ArticleCardMedium = ({ image, date, desc, react }:any) => {
    return (
        <div className="md:w-1/3 w-full p-4">
            <div className="h-[] rounded-[16px] px-[13px] pb-[28px] pt-[12px] border border-[#C8E6F0] transition-all hover:shadow-2xl">
                <img
                    src={image}
                    alt="Article Avatar"
                    className="w-full h-auto object-cover rounded-[12px]"
                />

                <div className="w-full flex flex-col items-start gap-2 mt-3">
                    {/* Top infos */}
                    <div className="w-full flex items-center justify-between">
                    <span className="text-[#888888] font-normal text-sm">{`Publié le ${date}`}</span>

                    <div className="bg-[#ECFDFF] flex items-center gap-1 px-3 py-1 rounded-[20px]">
                        <span className="text-sm font-medium text-black montserrat-bold">{react}</span>

                        <img
                            src={Clap}
                            alt="Clap Hand Icon"
                            className="w-[20px] h-auto object-cover"
                        />
                    </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#000000] text-[20px] montserrat-bold leading-snug line-clamp-2 min-h-[2.8em]">
                    {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCardMedium