import { useNavigate } from "react-router";
import GoBack from "../../assets/cagnotte/goback.png";


const GobackComponent = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" flex flex-row w-auto mt-5 cursor-pointer" onClick={()=>handleGoBack()}>
      <div className="border border-[#B7C9D266] rounded-[15px] px-[20px] py-[14px] flex flex-row space-x-2 cursor-pointer">
        <img src={GoBack} alt="" className="w-[14px]" />
        <p className="text-[14px] font-bold">Retour</p>
      </div>
    </div>
  );
};

export default GobackComponent;
