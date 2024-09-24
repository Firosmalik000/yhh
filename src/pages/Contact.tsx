import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 px-10 md:px-[100px]  flex flex-col md:flex-row  justify-between gap-x-5 bg-yellow-400 text-white">
      <div className="w-full md:w-1/2">
        {/* penutup */}
        <div className="py-8  my-5">
          <img src="" alt="" />
          <p className="text-4xl text-center md:text-left font-bold font-playfair mb-3">CV Inti Mitra Sukses</p>
        </div>
      </div>

      <div>
        <div className="">
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[100px]">
            <div className="text-center md:text-left">
              <h1 className="text-xl font-bold font-playfair mb-6">Contact Us</h1>
              <div className="max-w-lg flex flex-col gap-y-2 mb-8">
                <div className="flex justify-center md:justify-start">
                  <FaEnvelope className="mr-2 mt-1 text-white" /> <p className="">email@gmail.com</p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <FaPhone className="mr-2 mt-1 text-white" /> <p className="">0821 8328 6126</p>
                </div>
              </div>
            </div>

            <div>
              <div className="max-w-lg flex flex-col gap-y-2  font-playfair mb-6 text-center md:text-left">
                <p className="text-xl font-bold  font-playfair mb-4">Address</p>
                <div className="flex  justify-center md:justify-start">
                  <p>Manyar Kertoadi, Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
