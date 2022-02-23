import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './Navbar';
import Home from './HomePage/Home';
import Man from './Man/Man All/Man';
import Women from './woman/Women All/Women';
import Accessories from './Accessories/Accessories';
import Discover from './DiscoverShopAll/Discover';
import Location from './Location';
import BestSelling from './Best Selling/BestSelling';
import Footer from './Footer';
import WomenNewArrival from './woman/WomensNewArrival';
import WomensBestSeller from './woman/Women Best Seller/WomenBestSeller';
import WomenJeans from './woman/Women Jeans/WomenJeans';
import WomenShorts from './woman/Women Shorts/WomenShorts';
import WomenJackets from './woman/Women Jackets/WomenJackets';
import Skirts from './woman/Skirts/Skirts';
import WomenAll from './woman/Women All/WomenAll ';
import ManAll from './Man/Man All/ManAll ';
import ManNewArrival from './Man/ManNewArrival/ManNewArrival';
import ManBestSeller from './Man/Man Best Seller/ManBestSeller';
import ManJeans from './Man/Man Jeans/ManJeans';
import ManJackets from './Man/Man Jackets/ManJackets';
import ManShorts from './Man/Man Shorts/ManShorts';
import ManAllNav from "./Man/NavBar Man/ManAllNav"
import ManNewArrivalNav from './Man/NavBar Man/ManNewArrivalNav';
import ManBestSellerNav from "./Man/NavBar Man/ManBestSellerNav"
import ManJeansNav from "./Man/NavBar Man/ManJeansNav"
import ManJacketsNav from "./Man/NavBar Man/ManJacketsNav"
import ManShortsNav from "./Man/NavBar Man/ManShortsNav"
import SkirtsNav from "./woman/Woman Nav/SkirtsNav"
import WomenAllNav from './woman/Woman Nav/WomenAllNav';
import WomensNewArrivalNav from "./woman/Woman Nav/WomensNewArrivalAllNav";
import WomensBestSellerNav from './woman/Woman Nav/WomenBestSellerAllNav';
import WomenJeansNav from './woman/Woman Nav/WomenJeansAllNav';
import WomenJacketsNav from './woman/Woman Nav/WomenJeansAllNav';
import WomenShortsnav from './woman/Woman Nav/WomenShortsAllNav';
import WomenAllDiscover from "./DiscoverShopAll/WomenAll "
import ManAllDiscover from "./DiscoverShopAll/ManAll "
import Contact from './Contact';
import Login from "./Login pages/Login";
import Error from './Error';












function App() {
  return (
      <>
       
       <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/womenallnav" element={<WomenAllNav />} />
        <Route path="/womennewarrival" element={<WomenNewArrival />} />
        <Route path="/womennewarrivalnav" element={<WomensNewArrivalNav />} />
        <Route path="/womenbestselling" element={<WomensBestSeller />} />
        <Route path="/womenbestsellingnav" element={<WomensBestSellerNav />} />
        <Route path="/womenjeans" element={<WomenJeans />} />
        <Route path="/womenjeansnav" element={<WomenJeansNav />} />
        <Route path="/womenshorts" element={<WomenShorts />} />
        <Route path="/womenshortsnav" element={<WomenShortsnav />} />
        <Route path="/womenjacketsnav" element={<WomenJacketsNav />} />
        <Route path="/womenjackets" element={<WomenJackets />} />
        <Route path="/skirts" element={<Skirts />} />
        <Route path="/skirtsnav" element={<SkirtsNav />} />
        <Route path="/womenall" element={<WomenAll />} />
        <Route path="/allwomenproducts" element={<WomenAllDiscover />} />
        <Route path="/man" element={<Man />} />
        <Route path="/manall" element={<ManAll />} />
        <Route path="/allmenproducts" element={<ManAllDiscover />} />
        <Route path="/manallnav" element={<ManAllNav />} />
        <Route path="/mannewarrivalnav" element={<ManNewArrivalNav />} />
        <Route path="/manbestsellingnav" element={<ManBestSellerNav />} />
        <Route path="/manjeansnav" element={<ManJeansNav />} />
        <Route path="/manjacketsnav" element={<ManJacketsNav />} />
        <Route path="/manshortsnav" element={<ManShortsNav />} />
        <Route path="/mannewarrival" element={<ManNewArrival />} />
        <Route path="/manbestselling" element={<ManBestSeller />} />
        <Route path="/manjeans" element={<ManJeans />} />
        <Route path="/manjackets" element={<ManJackets />} />
        <Route path="/manjacketnav" element={<ManJacketsNav />} />
        <Route path="/manshorts" element={<ManShorts />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/contact" element={<Location />} />
        <Route element={<Error />} />
      </Routes>

      <Footer/>


    </>
  );
}

export default App;
