import React from 'react';
import Image from 'next/image';
import footerImage from '@/public/footer.svg';
import footerImage2 from '@/public/footer2.svg';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${footerImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url(${footerImage2.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
  };

  return (
    <div>
      <div className="w-full z-40" style={backgroundImageStyle}>
        <div className="w-full z-10" style={backgroundImageStyle2}>
          <footer className="text-gray-600 body-font">

            <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col md:flex-row md:items-start">
              <div className="flex lg:flex-row flex-col justify-center  w-full ">
                <div className="w-full lg:w-1/4 mb-4 md:mb-0 lg:ml-0 ml-10 text-center md:text-left">
                  <a href="" className="flex title-font font-medium justify-center md:justify-start text-gray-900">
                    <Image src="/mainlogo.svg" alt="Logo" width={500} height={48} />
                  </a>
                </div>


                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-900 tracking-widest text-[20px] lg:text-[20px]">Company</h2>
                  <nav className="leading-10 mt-8">
                    <p><a href="" className="text-gray-600 hover:text-gray-800">About us</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Home</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Pricing</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Demo</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Contact us</a></p>
                  </nav>
                </div>


                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-900 tracking-widest text-[20px] lg:text-[20px]">Support Us</h2>
                  <nav className="leading-10 mt-8">
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Blog</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Help center</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">FAQ&apos;s</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Product</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Updates</a></p>
                  </nav>
                </div>


                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-900 tracking-widest text-[20px] lg:text-[20px]">Resources</h2>
                  <nav className="leading-10 mt-8">
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Community</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Contact</a></p>
                    <p><a href="" className="text-gray-600 hover:text-gray-800">Terms of service</a></p>
                  </nav>
                </div>


                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-900 tracking-widest text-[20px] lg:text-[20px]">Address</h2>
                  <div className="leading-10 mt-8">
                  <p className="text-gray-600">101 Marlow Street, #12-05 Clife Parkview, Singapore 059020. View on Maps</p>
                  <p className="text-gray-600">Inquiries: +65 6156 5519 hello@Newsify.com</p>
                  <div className="mt-4 flex justify-center md:justify-start">
                    <a href="" className="text-gray-600 hover:text-gray-800 h-20 w-20"><FaTwitter /></a>
                    <a href="" className="text-gray-600 hover:text-gray-800 h-20 w-20 ml-4"><FaFacebookF /></a>
                    <a href="" className="text-gray-600 hover:text-gray-800 h-20 w-20 ml-4"><FaLinkedinIn /></a>
                    <a href="" className="text-gray-600 hover:text-gray-800 h-20 w-20 ml-4"><FaYoutube /></a>
                    <a href="" className="text-gray-600 hover:text-gray-800 h-20 w-20 ml-4"><FaInstagram /></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-20 items-center px-10">
              <div className="div">
                <p className="text-gray-500 text-sm lg:text-center sm:text-left">© 2023 Newsify. All rights reserved</p>
              </div>


              <div className="flex lg:flex-row flex-col gap-5">
                <a href="" className="text-gray-500">Cookie Settings</a>
                <a href="" className="text-gray-500">Anti-Spam</a>
                <a href="" className="text-gray-500">Privacy</a>
                <a href="" className="text-gray-500">User agreement</a>
                <a href="" className="text-gray-500">Legal Notice and Responsible Disclosure</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
