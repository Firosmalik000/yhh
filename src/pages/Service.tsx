import { FaAnchor, FaTachometerAlt, FaDollarSign, FaUsers, FaCog } from 'react-icons/fa';

const Service = () => {
  const companyHighlights = {
    en: [
      {
        title: 'Extensive Industry Experience',
        description: 'With over a decade of expertise in marine transport services, we have built a solid foundation in the industry.',
        icon: <FaAnchor className="text-4xl text-blue-500 mb-4" />,
      },
      {
        title: 'Expanding Capabilities',
        description: 'We continuously evolve to meet the diverse and growing needs of our valued customers.',
        icon: <FaTachometerAlt className="text-4xl text-green-500 mb-4" />,
      },
      {
        title: 'Strong Financial Standing',
        description: 'Our robust financial position allows us to cultivate strong and lasting relationships with our clients.',
        icon: <FaDollarSign className="text-4xl text-yellow-500 mb-4" />,
      },
      {
        title: 'Dedicated and Skilled Workforce',
        description: 'Our committed team of professionals plays a vital role in driving significant growth and ensuring excellence in service delivery.',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
      },
      {
        title: 'Comprehensive Support Services',
        description: 'We are dedicated to providing exceptional support, maintenance, project management, and more to ensure the success of your maritime operations.',
        icon: <FaCog className="text-4xl text-purple-500 mb-4" />,
      },
    ],
  };

  return (
    <section id="service" className="w-full py-16 md:px-[100px] px-[60px] bg-orange-400">
      {/* Language Selector */}

      <h1 className="text-center text-4xl text-white font-bold mb-8 font-playfair">Our Services</h1>
      <p className="text-center text-xl text-white mb-12">We offer a range of services, including:</p>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyHighlights.en.map((highlight, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-110 transition duration-300">
            <div className="flex justify-center mb-4">{highlight.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-playfair">{highlight.title}</h2>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
