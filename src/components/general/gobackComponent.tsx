import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";


const GobackComponent = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" flex flex-row w-auto mt-5">
      <div onClick={()=>handleGoBack()} className="border border-[#B7C9D266] rounded-[15px] px-[20px] py-[14px] flex flex-row space-x-2 cursor-pointer">
        <ArrowLeft />
        <p className="text-[14px] font-bold">Retour</p>
      </div>
    </div>
  );
};

export default GobackComponent;
