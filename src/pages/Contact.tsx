import { FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../img/logofooter.png';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 px-10 md:px-[100px] flex flex-col md:flex-row justify-between gap-x-5 bg-yellow-500 text-white">
      <div className="w-full md:w-1/2">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-[200px] h-[200px] py-[-100px]" />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:py-6 py-0">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[100px]">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold font-sans mb-6">Contact Us</h1>
            <div className="flex flex-col gap-y-2 mb-8">
              <div className="flex justify-center md:justify-start items-center">
                <FaEnvelope className="mr-2 text-white" />
                <p>email@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <FaPhone className="mr-2 text-white" />
                <p>0821 8328 6126</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-xl font-bold font-playfair mb-4">Address</p>
            <div className="flex justify-center md:justify-start">
              <p>Manyar Kertoadi, Surabaya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
