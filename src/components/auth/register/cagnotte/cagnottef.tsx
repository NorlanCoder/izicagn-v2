import { section } from "motion/react-client"
import Logo from '../../../../assets/cagnotte/Frame 1000001883.png'
import gif from  "/src/assets/cagnotte/gif.gif"
import ellipse from  "/src/assets/cagnotte/Ellipse 2578.png"
import vive from "/src/assets/cagnotte/Vector 2.png"

import React from "react"
const Cagnottef=()=>{
return(
    
    <div className="min-h-screen bg-[#13C7F4BF] flex flex-col items-center  p-4">
      
  
    <div className="mb-20">
    
      <img src={Logo} alt="Logo" className="h-[27px] mx-auto " />
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center max-w-[700px] w-full relative">

      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     
        <img src={gif}  className="w-full" />
      </div>

   
      <div className="flex justify-center pb-10 ">
        <div className="bg-green-100 rounded-full p-2 absolute">
          <img className="w-[50px] h-[50px]" src={ellipse} alt="" />
          <img
                src={vive}
                alt="icone"
                className="w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
        </div>
      </div>

 
      <h1 className="text-[30px] font-bold text-gray-800 mb-2 pt-10">Félicitations, bienvenue sur izicagn !</h1>


      <p className=" mb-6 tex-[16px] text-[#6F7886]">
        Bienvenue dans la communauté Izicagn ! Votre compte a été créé avec succès et vous êtes maintenant prêt à collecter des fonds
      </p>

      <button className="bg-[#07AED8] hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
        Accéder à mon espace
      </button>
    </div>
  </div>
    )

}
export default Cagnottef