import HeroImage from '../img/salima.jpg';

const Hero = () => {
  return <section id="hero" className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeroImage})` }}></section>;
};

export default Hero;
