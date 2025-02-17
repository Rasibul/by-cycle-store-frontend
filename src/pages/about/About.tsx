import Navbar from "../../header/navbar/NavBar";
import cyclingGroup from "../../assets/cycling group.jpg";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-teal-500 p-10 rounded-lg mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to [Your Application Name]
          </h1>
          <p className="text-lg text-white mb-8">
            Your Ultimate Cycling Companion
          </p>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            At [Your Application Name], we’re passionate about cycling and
            committed to providing cyclists with the best tools to enhance their
            riding experience.
          </p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full text-xl hover:bg-blue-600 hover:text-white transition">
            Get Started
          </button>
        </section>

        {/* Our Story Section */}
        <section className="mt-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Founded in [Year], [Your Application Name] was created by a group
              of cycling enthusiasts who wanted to build a space for fellow
              riders to access top-tier resources.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={cyclingGroup}
              alt="Cycling Group"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Watch Our Journey
          </h2>
          <div className="relative">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video link
              title="Our Journey"
              className="rounded-lg shadow-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ride Tracking
              </h3>
              <p className="text-lg text-gray-600">
                Track your cycling performance, distance, speed, and calories
                burned during every ride.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Route Discovery
              </h3>
              <p className="text-lg text-gray-600">
                Explore new cycling routes tailored to your skill level,
                location, and preferences.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Product Recommendations
              </h3>
              <p className="text-lg text-gray-600">
                Discover the best bicycles and accessories, with special offers
                on top products.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-12 bg-gray-50 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              Seamless Experience: Our easy-to-use platform is designed for both
              beginners and experienced cyclists.
            </li>
            <li>
              Personalized Features: Tailor the app to your specific needs,
              whether you’re looking for training programs, product discounts,
              or new routes.
            </li>
            <li>
              Exclusive Offers: Get access to special deals on top-rated
              bicycles, accessories, and more.
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Join the [Your Application Name] Family
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We’re excited to have you on board! Download our app today and start
            your journey with us. Stay connected on social media and let’s ride
            together towards a healthier, happier, and more sustainable future.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
