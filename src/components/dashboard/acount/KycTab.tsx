import { Check, Lock, Clock } from "lucide-react";
import Security from "../../../assets/accueil/check.png";

export default function KYCTab() {
  return (
    <div className=" pb-10">
      <div className=" space-y-6">

        {/* ===== KYC HEADER ===== */}
        <div className="bg-white rounded-2xl border-2 border-[#E8EDF2] p-[30px] space-y-4">
          <div>
            <h2 className="text-[16px] font-semibold text-[#1A1A2E]">
              Processus de vérification KYC
            </h2>
            <p className="text-[12px] text-[#9AA3B0]">
              Complétez votre vérification pour débloquer plus de fonctionnalités
            </p>
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-[#0D1F2D] to-[#1E3448] rounded-xl py-6 px-7 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-white">
              <img src={Security} alt="Security" />
              <div>
                <p className="font-bold text-lg">
                  Commencer la vérification
                </p>
                <p className="text-[13px]">
                  Munissez-vous d’une pièce d’identité valide (CNI, passeport ou permis) et d’un accès à votre caméra.
                </p>
              </div>
            </div>

            <button className="bg-white text-[#0E405D] px-6 py-3 rounded-full text-sm font-bold">
              Démarrer la vérification →
            </button>
          </div>

          {/* Benefits */}
          <div className="border border-blue-200 bg-[#F6FCFE] rounded-[10px] py-3.5 px-4">
            <p className="text-xs text-[#5A6272] font-semibold mb-2 uppercase tracking-wide">
              Bénéfices du niveau suivant
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2 text-[13px] text-[#1A1A2E]">
                <span className="bg-[#23C7ED] p-1 rounded-full">
                    <Check size={10} className="text-white" />
                </span>
                Montant de collectes illimitées
              </li>
              <li className="flex items-center gap-2 text-[13px] text-[#1A1A2E]">
                <span className="bg-[#23C7ED] p-1 rounded-full">
                    <Check size={10} className="text-white" />
                </span>
                Reversement de fonds sans contraintes
              </li>
              <li className="flex items-center gap-2 text-[13px] text-[#1A1A2E]">
                <span className="bg-[#23C7ED] p-1 rounded-full">
                    <Check size={10} className="text-white" />
                </span>
                Badge de confiance sur votre profil
              </li>
            </ul>
          </div>
        </div>

        {/* ===== STEPS ===== */}
        <div className="bg-white rounded-2xl border border-[#E8EDF2] p-[30px] space-y-4">

          <div>
            <h3 className="font-semibold text-[16px] text-[#1A1A2E]">
              Etape de vérification
            </h3>
            <p className="text-[13px] text-[#9AA3B0]">
              Complétez chaque étape pour débloquer votre compte.
            </p>
          </div>

          <div className="space-y-3">

            {/* STEP 1 */}
            <div className="flex items-center justify-between p-5 rounded-xl border-[1.5px] border-[#E8EDF2] bg-[#FAFAFA]">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] text-white p-[11px] rounded-[20px]">
                  <Check size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">
                    Identité de base
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    Nom, prénom, date de naissance
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-semibold bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-full">
                Complété
              </span>
            </div>

            {/* STEP 2 */}
            <div className="flex items-center justify-between p-5 rounded-xl border-[1.5px] border-[#E8EDF2] bg-[#FAFAFA]">
              <div className="flex items-center gap-3">
                <div className="bg-[#4CAF50] text-white p-[11px] rounded-[20px]">
                  <Check size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">
                    Numéro de téléphone
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    Vérification par SMS OTP
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-semibold bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-full">
                Complété
              </span>
            </div>

            {/* STEP 3 */}
            <div className="flex items-center justify-between p-4 rounded-xl border-[1.5px] border-[#FFE0B2] bg-[#FFF8E1]">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF9800] text-white p-[11px] rounded-[20px]">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E]">
                    Pièce d'identité
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    CNI, passeport ou permis de conduire
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold text-[#FF9800]">
                  En attente
                </span>
                <button className="bg-[#FF9800] text-white px-3 py-2 rounded-full text-[11px]">
                  Soumettre →
                </button>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex items-center justify-between p-4 rounded-xl border-[1.5px] border-[#E8EDF2] bg-[#FAFAFA] ">
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 text-white p-[11px] rounded-[20px]">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#9AA3B0]">
                    Justificatif de domicile
                  </p>
                  <p className="text-xs text-[#9AA3B0]">
                    Facture, relevé bancaire de moins de 3 mois
                  </p>
                </div>
              </div>

              <span className="text-[11px] bg-[#F4F9FA] font-semibold text-[#9AA3B0] px-3 py-1 rounded-full">
                Verrouillé
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}