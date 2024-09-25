import cat1 from '../img/category1.jpg';
import cat2 from '../img/category2.jpg';
import cat3 from '../img/category3.jpg';

const ProductCategory = () => {
  const classMission = 'relative flex justify-center items-center text-center w-full max-w-[350px] md:max-w-[500px] h-[300px] md:h-[400px] z-10 bg-white rounded-lg shadow-md overflow-hidden group';

  return (
    <section id="productcategory" className="w-full py-16 px-8 bg-blue-900">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8 w-full md:w-3/4">
          <div>
            <h1 className="text-center text-3xl md:text-6xl font-bold font-playfair  text-white">Product</h1>
            <h1 className="text-center text-3xl md:text-6xl font-bold font-playfair mb-8 text-white">Category</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className={classMission}>
              <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">01</p>
              <img src={cat1} alt="Category 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <p className="absolute bottom-5  text-2xl md:text-3xl font-bold text-gray-800 z-10">Resleting Roll</p>
            </div>
            <div className={classMission}>
              <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">02</p>
              <img src={cat2} alt="Category 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <p className="absolute bottom-5  text-2xl md:text-3xl font-bold text-gray-800 z-10">Finish Zipper</p>
            </div>
            <div className={classMission}>
              <p className="absolute top-4 left-4 text-4xl md:text-5xl font-bold text-gray-400 z-20">03</p>
              <img src={cat3} alt="Category 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <p className="absolute bottom-5  text-2xl md:text-3xl font-bold text-gray-800 z-10">Kepala Resleting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
