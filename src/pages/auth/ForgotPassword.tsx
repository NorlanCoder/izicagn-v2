import { useState, useEffect } from "react";
import Logo from "../../assets/Logo-izicagn.svg";
import LoginLeft from "../../assets/auth/login_left.svg";
import {
  useAskResetMutation,
  useValidateOtpMutation,
  useDefinePasswordMutation,
  useEncryptMutation,
} from "../../features/auth/mutations";
import { useNavigate } from "react-router";
import { Eye, EyeClosed } from "lucide-react";

const ForgotPassword = () => {
    // État du formulaire
    const [countryCode, setCountryCode] = useState("229");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // État du flux
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [personId, setPersonId] = useState("");

    const navigate = useNavigate();
    const askResetMutation = useAskResetMutation();
    const validateOtpMutation = useValidateOtpMutation();
    const definePasswordMutation = useDefinePasswordMutation();
    const encryptMutation = useEncryptMutation();

    const isLoadingStep1 = askResetMutation.isPending;
    const isLoadingStep2 = validateOtpMutation.isPending;
    const isLoadingStep3 = encryptMutation.isPending || definePasswordMutation.isPending;

    // Redirection après succès
    useEffect(() => {
        if (success && step === 4) {
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
    }, [success, step, navigate]);

    // Étape 1: Soumettre le numéro de téléphone
    const handleStep1Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!phone.trim()) {
            setError("Veuillez entrer votre numéro de téléphone.");
            return;
        }

        try {
            const result = await askResetMutation.mutateAsync({
                countryCode,
                phone,
            });

            setPersonId(result.personId || "");
            setStep(2);
            setSuccess(result.message || "Un code OTP a été envoyé à votre numéro.");
        } catch (err: any) {
            setError(err.message || "Une erreur est survenue.");
        }
    };

    // Étape 2: Soumettre le code OTP
    const handleStep2Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!otp.trim()) {
            setError("Veuillez entrer le code OTP.");
            return;
        }

        if (!personId) {
            setError("Erreur: personId manquant.");
            return;
        }

        try {
            const result = await validateOtpMutation.mutateAsync({
                personId,
                otp,
            });

            setStep(3);
            setSuccess(result.message || "Code OTP validé. Entrez un nouveau mot de passe.");
        } catch (err: any) {
            setError(err.message || "Le code OTP est invalide.");
        }
    };

    // Étape 3: Soumettre le nouveau mot de passe
    const handleStep3Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!newPassword.trim() || !confirmPassword.trim()) {
            setError("Veuillez remplir tous les champs.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        if (newPassword.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères.");
            return;
        }

        try {
            const encryptResult = await encryptMutation.mutateAsync({ data: newPassword });
            const encryptedPassword = encryptResult.encryptedData;

            await definePasswordMutation.mutateAsync({
                personId,
                otp,
                encryptedPassword,
            });

            setStep(4);
            setSuccess("Mot de passe réinitialisé avec succès! Redirection vers la connexion...");
        } catch (err: any) {
            setError(err.message || "Une erreur est survenue lors de la réinitialisation.");
        }
    };

    return (
        <div className="flex flex-row h-screen">
            <div className="md:w-7/12 w-full lg:px-20 md:px-10 px-10 py-10 h-full overflow-y-auto auth-scroll">
                <a href="/"><img src={Logo} alt="" /></a>

                <div className="h-full md:max-w-[450px] m-auto gap-3 text-center flex flex-col justify-center items-center xl:px-24">
                    <div className="w-full mb-8 md:mt-0 mt-10 text-center">
                        <h1 className="text-[32px] font-bold text-[#001829] heading-">
                            {step === 1 && "Réinitialiser votre mot de passe"}
                            {step === 2 && "Entrer le code OTP"}
                            {step === 3 && "Créer un nouveau mot de passe"}
                            {step === 4 && "Succès!"}
                        </h1>
                        <p className="text-[#5C6F84] text-[16px]">
                            {step === 1 && "Entrez votre numéro de téléphone pour recevoir un code de réinitialisation."}
                            {step === 2 && "Un code OTP a été envoyé. Veuillez l'entrer ci-dessous."}
                            {step === 3 && "Créez un nouveau mot de passe sécurisé."}
                            {step === 4 && "Votre mot de passe a été réinitialisé avec succès!"}
                        </p>
                    </div>

                    {/* ÉTAPE 1: Numéro de téléphone */}
                    {step === 1 && (
                        <form onSubmit={handleStep1Submit} className="w-full flex flex-col gap-3">
                            <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center">
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="bg-transparent py-[22px] pl-[12px] pr-[4px] rounded-l-[12px] font-semibold focus:outline-0 text-[#5C6F84]"
                                >
                                    <option value="292">+292</option>
                                    <option value="229">+229</option>
                                    <option value="228">+228</option>
                                    <option value="225">+225</option>
                                    <option value="33">+33</option>
                                    <option value="1">+1</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Numéro de téléphone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full font-semibold h-full py-[22px] px-[10px] rounded-r-[12px] focus:border-none focus:outline-0"
                                    required
                                />
                            </div>

                            <div className="w-full mt-3">
                                {error && (
                                    <p className="text-red-500 text-sm mb-3">{error}</p>
                                )}
                                {success && (
                                    <p className="text-green-500 text-sm mb-3">{success}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isLoadingStep1}
                                    className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-black font-semibold disabled:opacity-50"
                                >
                                    {isLoadingStep1 ? "Envoi..." : "Envoyer le code"}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* ÉTAPE 2: Code OTP */}
                    {step === 2 && (
                        <form onSubmit={handleStep2Submit} className="w-full flex flex-col gap-3">
                            <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3">
                                <input
                                    type="text"
                                    placeholder="Entrer le code OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full font-semibold py-[22px] px-[19px] rounded-[12px] focus:border-none focus:outline-0"
                                    required
                                />
                            </div>

                            <div className="w-full mt-3">
                                {error && (
                                    <p className="text-red-500 text-sm mb-3">{error}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isLoadingStep2}
                                    className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-black font-semibold disabled:opacity-50"
                                >
                                    {isLoadingStep2 ? "Validation..." : "Valider le code"}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* ÉTAPE 3: Nouveau mot de passe */}
                    {step === 3 && (
                        <form onSubmit={handleStep3Submit} className="w-full flex flex-col gap-3">
                            <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center space-x-1 pr-4">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Nouveau mot de passe"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                                />
                                {showPassword ? (
                                    <EyeClosed
                                        className="cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <Eye
                                        className="cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>

                            <div className="w-full bg-[#F3F5F7] rounded-[12px] mb-3 flex flex-row items-center space-x-1 pr-4">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirmer le mot de passe"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full h-full py-[22px] px-[19px] rounded-[12px] font-semibold focus:border-none focus:outline-0"
                                />
                                {showConfirmPassword ? (
                                    <EyeClosed
                                        className="cursor-pointer"
                                        onClick={() => setShowConfirmPassword(false)}
                                    />
                                ) : (
                                    <Eye
                                        className="cursor-pointer"
                                        onClick={() => setShowConfirmPassword(true)}
                                    />
                                )}
                            </div>

                            <div className="w-full mt-3">
                                {error && (
                                    <p className="text-red-500 text-sm mb-3">{error}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isLoadingStep3}
                                    className="bg-[#23C7ED] rounded-full w-full flex justify-center items-center py-[18px] text-black font-semibold disabled:opacity-50"
                                >
                                    {isLoadingStep3 ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* ÉTAPE 4: Succès */}
                    {step === 4 && (
                        <div className="w-full flex flex-col gap-3 items-center justify-center">
                            <div className="text-6xl mb-4">✓</div>
                            {success && (
                                <p className="text-green-500 text-center font-semibold mb-3">{success}</p>
                            )}
                        </div>
                    )}

                    <div className="w-full mt-5">
                        <button
                            onClick={() => {
                                if (step > 1) {
                                    setStep(step - 1);
                                    setError("");
                                } else {
                                    navigate("/login");
                                }
                            }}
                            className="text-[14px] font-semibold text-[#1485B2] underline"
                        >
                            {step === 1 ? "Retour à la connexion" : "Étape précédente"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-5/12 md:flex hidden h-full justify-start">
                <img src={LoginLeft} alt="" className="h-full w-full" />
            </div>
        </div>
    );
};

export default ForgotPassword;