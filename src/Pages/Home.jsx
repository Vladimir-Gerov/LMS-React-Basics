import SingleCard from "../Components/SingleDataCard";
import Student from "../Components/Student";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen ">
      <Header />
      <Hero />
      <Student />
      <SingleCard />
      <Footer />
    </div>
  );
};

export default Home;
