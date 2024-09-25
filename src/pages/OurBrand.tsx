import cat1 from '../img/logo1.png';
import cat2 from '../img/logo2.png';
import cat3 from '../img/logo3.png';
import satu from '../img/satu.jpg';
import dua from '../img/sadua.jpg';
import tiga from '../img/satiga.jpg';
import empat from '../img/saempat.jpg';
import lima from '../img/salima.jpg';
import enam from '../img/saenam.jpg';
import tujuh from '../img/satujuh.jpg';
import delapan from '../img/sadelapan.jpg';
import sembilan from '../img/sasembilan.jpg';
import sepuluh from '../img/sasepuluh.jpg';
import sebelas from '../img/sasebelas.jpg';

const OurBrand = () => {
  const classMission = 'relative flex justify-center items-center text-center z-10 bg-white rounded-lg overflow-hidden group';

  return (
    <section id="ourbrand" className="w-full py-16 px-8 ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <h1 className="text-center text-3xl md:text-5xl font-extrabold font-sans mb-4 ">Our Brand</h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className={classMission}>
              <img src={cat2} alt="Category 2" className="w-[100px] transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className={classMission}>
              <img src={cat1} alt="Category 1" className="w-[100px] transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className={classMission}>
              <img src={cat3} alt="Category 3" className="w-[100px] transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          <div className="w-full flex overflow-x-scroll scroll-smooth scrollbar-hide gap-4 py-4 scroll-snap-x snap-mandatory snap-x">
            <img src={satu} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={dua} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={tiga} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={empat} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={lima} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={enam} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={tujuh} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={delapan} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={sembilan} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={sepuluh} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
            <img src={sebelas} alt="" className="w-[200px] h-[200px] object-cover snap-center rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
