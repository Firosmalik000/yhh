import cat1 from "../img/changeroll.jpeg";
import cat2 from "../img/changemain.jpeg";
import cat3 from "../img/changekepala.jpeg";

const Catalog = () => {
  const classMission = 'relative flex justify-center items-center text-center w-full max-w-[350px] md:max-w-[500px] z-10 bg-white rounded-lg shadow-md overflow-hidden group';

  return (
    <section id="productcatalog" className="w-full py-16 px-8">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <h1 className="text-center text-3xl md:text-5xl font-extrabold font-sans mb-8">Product Catalog</h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <a href="https://drive.google.com/file/d/1nEJuE64sSrdlI2naOip9NMUEpUEdbOLh/view?usp=drive_link" className={`block ${classMission}`}>
              {/* <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">01</p> */}
              <img src={cat1} alt="Category 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a href="https://drive.google.com/file/d/1c_FtdyMrpo8YBXKqbrJ7Bn0jFt3BHi_R/view?usp=drive_link" className={`block ${classMission}`}>
              {/* <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">02</p> */}
              <img src={cat2} alt="Category 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </a>
            <a href="https://drive.google.com/file/d/1N-Ml3Tr7sq0MnA3Jqld_4CuJT4uJ4qa0/view?usp=drive_link" className={`block ${classMission}`}>
              {/* <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">03</p> */}
              <img src={cat3} alt="Category 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
