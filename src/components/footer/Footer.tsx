// src/components/Footer.tsx

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonial" className="hover:text-gray-400">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="/all-bicycles" className="hover:text-gray-400">
                  See Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>support@bycyle.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>1234 Street, Chittagong, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaFacebook className="text-xl" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagramSquare className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* Copyright Section */}
        <div className="mt-12 text-center ">
          <p>
            &copy; {new Date().getFullYear()} ByCyle Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
