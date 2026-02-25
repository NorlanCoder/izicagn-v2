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
import Home from "./pages/Home";
import Cagnotte from "./pages/Cagnotte";
import AllArticle from "./pages/AllArticle";
import Article from "./pages/Article";
import LeverDesFonds1 from "./pages/leverdesfonds/LDF1";
import LeverDesFonds3 from "./pages/leverdesfonds/LDF3";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
<<<<<<< HEAD
import Garanties from "./pages/Garanties";
import CategoryCagnotte from "./pages/CategoryCagnotte";
import FormPayment from "./pages/paiement/FormPayment";
=======
import Cagnottef from "./components/auth/register/cagnotte/cagnottef";

>>>>>>> e20316b2d36c21571a25c2199387b84b5826a983

function App() {
  return (
    <>
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
          <Route path="register" element={<Register />} />
          <Route path="cagnottef" element={<Cagnottef />} />
     

        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
