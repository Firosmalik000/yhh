import HeroImage from '../img/profile.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="text-4xl mb-3 font-bold">Crafted to Close </p>
        <p className="text-4xl font-bold">Designed to Last </p>
      </div>
    </section>
  );
};

export default Hero;
