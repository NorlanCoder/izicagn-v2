// import Cagnotte from "./pages/Cagnotte"
// import CategoryCagnotte from "./pages/CategoryCagnotte"
import DetailsCagnotte from "./pages/DetailsCagnotte";
// import FormPayment from "./pages/paiement/FormPayment"
import RechercheCagnotte from "./pages/RechercheCagnotte";
// import SuccessPayment from "./pages/paiement/SuccessPayment"
import Investissement from "./pages/Investissement";
import Mission from "./pages/Mission";
import CommentMarche from "./pages/ccm";
import Tarifs from "./pages/Tarifs";
// import LeverDesFonds3 from "./pages/leverdesfonds/LDF3"
import LeverDesFonds2 from "./pages/leverdesfonds/LDF2";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home";
import Cagnotte from "./pages/Cagnotte";
import AllArticle from "./pages/AllArticle";
import Article from "./pages/Article";
import LeverDesFonds1 from "./pages/leverdesfonds/LDF1";
import LeverDesFonds3 from "./pages/leverdesfonds/LDF3";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Garanties from "./pages/Garanties";
import CategoryCagnotte from "./pages/CategoryCagnotte";
import FormPayment from "./pages/paiement/FormPayment";
import Cagnottef from "./components/auth/register/cagnotte/cagnottef";
import DashboardHome from "./pages/dashboard";
import DashboardCagnottes from "./pages/dashboard/Cagnottes";
import DashboardContributions from "./pages/dashboard/Contributions";
import DashboardSolde from "./pages/dashboard/Solde";
import DashboardReversements from "./pages/dashboard/Reversements";
import DashboardOrganisation from "./pages/dashboard/Organisation";
import DashboardParametres from "./pages/dashboard/Parametres";
// import Register from "./pages/auth/Register";


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />

          <Route path="cagnotte">
            <Route index element={<Cagnotte />} />
            <Route path="search" element={<RechercheCagnotte />} />
            <Route path="details" element={<DetailsCagnotte />} />
            <Route path="categorie" element={<CategoryCagnotte />} />
            <Route path="paiement" element={<FormPayment />} />
          </Route>

          <Route path="leverdesfonds">
            <Route index element={<LeverDesFonds1 />} />
            <Route path="details" element={<LeverDesFonds2 />} />
            <Route path="commentçamarche" element={<LeverDesFonds3 />} />
          </Route>

          

          <Route path="commentçamarche" element={<CommentMarche />} />
          <Route path="garantie" element={<Garanties />} />
          <Route path="investissement" element={<Investissement />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="mission" element={<Mission />} />
          <Route path="articles" element={<AllArticle />} />
          <Route path="article/:id" element={<Article />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="cagnottef" element={<Cagnottef />} />

          <Route path="dashboard">
            <Route index element={<DashboardHome />} />
            <Route path="cagnottes" element={<DashboardCagnottes />} />
            <Route path="contributions" element={<DashboardContributions />} />
            <Route path="solde" element={<DashboardSolde />} />
            <Route path="reversements" element={<DashboardReversements />} />
            <Route path="organisation" element={<DashboardOrganisation />} />
            <Route path="parametres" element={<DashboardParametres />} />
          </Route>


          </Routes>
        </BrowserRouter>  
      </QueryClientProvider>
    </>
  );
}

export default App;
