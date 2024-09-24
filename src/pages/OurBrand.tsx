import cat1 from '../img/logo1.png';
import cat2 from '../img/logo2.png';
import cat3 from '../img/logo3.png';

const OurBrand = () => {
  const classMission = 'relative flex justify-center items-center text-center  z-10 bg-white rounded-lg  overflow-hidden group';

  return (
    <section id="ourbrand" className="w-full py-16 px-8 ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <h1 className="text-center text-3xl md:text-4xl font-extrabold font-playfair mb-4 ">Our Brand</h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className={classMission}>
              <img src={cat1} alt="Category 1" className="w-[100px]   transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className={classMission}>
              <img src={cat2} alt="Category 2" className="w-[100px]  transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className={classMission}>
              <img src={cat3} alt="Category 3" className="w-[100px]  transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
