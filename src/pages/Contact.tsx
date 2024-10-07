import { FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../img/logofooter.png';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 px-10 md:px-[300px] flex flex-col md:flex-row justify-between gap-x-10 bg-gray-200 ">
      <div className="w-full md:w-1/2 flex justify-start items-center">
        <img src={logo} alt="Logo" className="w-[200px] h-[200px]" />
      </div>

      <div className="w-full md:w-1/2 md:py-6 py-0 flex justify-end items-start">
        <div className="text-left">
          <h1 className="text-xl font-bold font-sans mb-6">Contact Us</h1>
          <div className="flex flex-col gap-y-2 mb-8">
            <div className="flex justify-start items-center">
              <FaEnvelope className="mr-2" />
              <p>cv.intimitrasukses@gmail.com</p>
            </div>
            <div className="flex justify-start items-center">
              <FaPhone className="mr-2" />
              <p>0821 8328 6126</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
