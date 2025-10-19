import RodCad from "../../assets/RodcatIcon.svg";
import Msi from "../../assets/MsiIcon.svg";
import Razer from "../../assets/RazerIcon.svg";
import Thermaltake from "../../assets/ThermaltakeIcon.svg";
import Adata from "../../assets/AdataIcon.svg";
import Hp from "../../assets/HpIcon.svg";
import Gigabyte from "../../assets/GigabyteIcon.svg";
import Comma from "../../assets/CommaIcon.svg";
import { Link } from "react-router-dom";

const logos = [RodCad, Msi, Razer, Thermaltake, Adata, Hp, Gigabyte];

const LogoTechnology = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-[8rem] px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center items-center">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="h-[9rem] w-auto"
                src={logo}
                alt="Logo Technology"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center px-10 sm:px-12 md:px-24 lg:px-80 pt-20">
      <div className="bg-gray-200 w-full h-auto px-6 sm:px-12 md:px-20 py-12 rounded-lg">
        {/* Quote + Text */}
        <div className="flex flex-col sm:flex-row justify-start items-start gap-6">
          <img className="h-5 w-40" src={Comma} alt="Quote" />
          <p className="text-gray-800 text-base sm:text-lg sm:text-justify">
            My first order arrived today in perfect condition. From the time I
            sent a question about the item to making the purchase, to the
            shipping and now the delivery, your company, Tecs, has stayed in
            touch. Such great service. I look forward to shopping on your site
            in the future and would highly recommend it.
          </p>
        </div>

        {/* Author */}
        <div className="flex justify-end mt-6">
          <p className="font-semibold">- Toma Brown</p>
        </div>

        {/* Button */}
        <div className="flex justify-center sm:justify-start mt-6">
          <Link to="/review">
            <button className="border-2 sm:border-4 w-full sm:w-60 h-10 text-blue-600 rounded-full border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
              Leave Us A Review
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogoTechnology;
