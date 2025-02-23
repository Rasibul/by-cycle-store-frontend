import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import TestimonialSection from "../../components/testimonial/TestimonialSection";
import Navbar from "../../header/navbar/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Products></Products>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Home;
