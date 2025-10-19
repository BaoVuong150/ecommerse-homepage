import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/facebookIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import PaypalIcon from "../../assets/paypal.svg";
import VisaIcon from "../../assets/visa.svg";
import MaestroIcon from "../../assets/maestro.svg";
import DiscoverIcon from "../../assets/discover.svg";
import AmericanExpressIcon from "../../assets/americanExpress.svg";

const Footer = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted!");
  };

  // Các link theo từng cột
  const footerLinks = {
    Information: [
      { name: "About Us", to: "/about-us" },
      { name: "About Zip", to: "/about-zip" },
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Search", to: "/search" },
      { name: "Terms", to: "/terms" },
      { name: "Orders and Returns", to: "/orders-returns" },
      { name: "Contact Us", to: "/contact-us" },
      { name: "Advanced Search", to: "/advanced-search" },
      { name: "Newsletter Subscription", to: "/newsletter-subscription" },
    ],
    "PC Parts": [
      { name: "CPUS", to: "/cpus" },
      { name: "Add On Cards", to: "/add-on-cards" },
      { name: "Hard Drives (Internal)", to: "/hard-drives" },
      { name: "Graphic Cards", to: "/graphic-cards" },
      { name: "Keyboards / Mice", to: "/keyboards-mice" },
      { name: "Cases / Power Supplies / Cooling", to: "/cases-power-cooling" },
      { name: "RAM (Memory)", to: "/ram" },
      { name: "Software", to: "/software" },
      { name: "Speakers / Headsets", to: "/speakers-headsets" },
      { name: "Motherboards", to: "/motherboards" },
    ],
    "Desktop PCs": [
      { name: "Custom PCs", to: "/custom-pcs" },
      { name: "Servers", to: "/servers" },
      { name: "MSI All-In-One PCs", to: "/msi-all-in-one" },
      { name: "HP/Compaq/ASUS/Tecs PCs", to: "/hp-asus-tecs-pcs" },
    ],
    Laptops: [
      { name: "Everyday Use Notebooks", to: "/everyday-notebooks" },
      { name: "MSI Workstation Series", to: "/msi-workstation" },
      { name: "MSI Prestige Series", to: "/msi-prestige" },
      { name: "Tablets and Pads", to: "/tablets-pads" },
      { name: "Netbooks", to: "/netbooks" },
      { name: "Infinity Gaming Notebooks", to: "/infinity-gaming" },
    ],
  };

  return (
    <div>
      <div className="p-8 mt-[8rem] bg-black text-white">
        <div className="px-8 md:px-40">
          {/* Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl">Sign Up To Our Newsletter.</h1>
              <p className="font-thin mt-4">
                Be the first to hear about the latest offers.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full md:w-[35rem]"
              onSubmit={onSubmit}
            >
              <input
                className="bg-black border-2 border-white rounded-md w-full h-[3.5rem] p-4"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <button
                className="w-full sm:w-40 h-[3.5rem] bg-blue-600 text-white rounded-full border-2 border-blue-600 hover:bg-blue-700 transition duration-300 font-semibold"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-8 text-sm">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex-1 min-w-[150px]">
                <p className="font-bold text-gray-500 text-lg">{title}</p>
                <div className="flex flex-col mt-6 space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="flex-1 min-w-[250px]">
              <p className="font-bold text-gray-500 text-lg">Address</p>
              <div className="flex flex-col mt-6 space-y-2">
                <p>Address: 1234 Street Address City, 1234</p>
                <p>
                  Phones: <span className="text-blue-500">(00) 1234 5678</span>
                </p>
                <p>We are open:</p>
                <p>Monday-Thursday: 9:00 AM - 5:30 PM</p>
                <p>Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 11:00 AM - 5:00 PM</p>
                <p>
                  E-mail: <span className="text-blue-500">shop@email.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 px-8 md:px-40 text-center">
            {/* Social */}
            <div className="flex gap-4">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
            </div>

            {/* Payments */}
            <div className="flex justify-center items-center gap-4">
              <img src={PaypalIcon} alt="PayPal" />
              <img src={VisaIcon} alt="Visa" />
              <img src={MaestroIcon} alt="Maestro" />
              <img src={DiscoverIcon} alt="Discover" />
              <img src={AmericanExpressIcon} alt="American Express" />
            </div>

            {/* Copyright */}
            <div>
              <small>Copyright © 2024 Tecs. All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
