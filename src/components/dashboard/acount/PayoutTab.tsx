import { useState } from "react";
import MTN from "../../../assets/accueil/MTN.png";
import Moov from "../../../assets/accueil/Moov.png";

export default function PayoutTab() {

  return (
    <div className="">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">

        {/* HEADER */}
        <div className="space-y-1.5">
          <h2 className="text-[16px] font-semibold text-[#1A1A2E]">
            Moyens de reversement
          </h2>
          <p className="text-[13px] text-[#9AA3B0]">
            Complétez chaque étape pour débloquer votre compte.
          </p>
        </div>

        {/* CARD */}
        <div className="border-[1.5px] border-[#E8EDF2] bg-[#FAFAFA] rounded-xl space-y-2.5 p-2.5">

          <h3 className="text-center text-sm font-bold text-[#1A1A2E]">
            Mobile Money
          </h3>

          <div className="space-y-3">

            {/* MTN */}
            <div
              className="flex items-center justify-between space-x-2.5 py-2.5 px-[11px] bg-white border-[#DDE3EA] rounded-lg border cursor-pointer transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={MTN}
                  alt="MTN"
                  className="w-10 h-10 object-contain bg-yellow-400 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm text-[#1A1A2E]">
                    MTN MOMO
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    +229 0191739280
                  </p>
                </div>
              </div>

            
                <span className="text-xs font-semibold bg-[#EDEFF1CC] text-[#555555] px-3 py-1 rounded-full">
                  Par défaut
                </span>
            </div>

            {/* MOOV */}
            <div
             
              className="flex items-center justify-between space-x-2.5 py-2.5 px-[11px] bg-white border-[#DDE3EA] rounded-lg border cursor-pointer transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={Moov}
                  alt="MOOV"
                  className="w-10 h-10 object-contain bg-blue-600 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm text-[#1A1A2E]">
                    MOOV MONEY
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    Nom, prénom, date de naissance
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}