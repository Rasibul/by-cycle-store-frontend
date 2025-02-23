import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Navbar from "../../header/navbar/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
