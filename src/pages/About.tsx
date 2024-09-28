import AboutImage from '../img/sasembilan.jpg';

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-200 py-12 px-4 md:px-[50px] lg:px-[150px]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h1 className=" text-5xl md:text-4xl font-bold mb-6 text-center font-sans">About Us</h1>
          <p className=" mb-4 indent-8 text-base md:text-xl text-justify">
            Welcome to YHH, where we transform the ordinary into the extraordinary with our high-quality, premium zippers. At YHH, we understand that the smallest details often make the biggest impact. Our mission is to elevate your
            products and make them stand out by adding a touch of luxury and sophistication through our meticulously crafted zippers.
          </p>
          <p className=" mb-4 text-base md:text-xl text-justify">
            We believe that every zipper should be more than just a functional component—it should be a statement of quality and elegance. That’s why we pour our expertise into creating zippers that exude a premium feel and enhance the
            overall aesthetics of your products. Our zippers are designed to seamlessly blend form and function, providing not just reliability but also a sense of high-end refinement.
          </p>
          <p className=" text-base md:text-xl text-justify">
            With a keen eye for detail and a commitment to excellence, YHH produces zippers that embody both durability and style. From the smooth, effortless glide to the sleek finishes and custom options, every aspect of our zippers is
            crafted to reflect an upscale look and feel. Our dedication to high-quality materials and precision engineering ensures that each zipper not only performs flawlessly but also contributes to a luxurious finish.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={AboutImage} alt="About YHH" className="w-full max-w-[450px] md:max-w-[550px] h-auto object-cover rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
