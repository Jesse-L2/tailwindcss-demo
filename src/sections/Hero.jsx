import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 flex border-red-500 p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 w-full">
        <p className="">Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br></br>
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
