// src/components/TestimonialSection.tsx

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Doe",
    title: "Satisfied Customer",
    testimonial:
      "This product exceeded my expectations. The quality is amazing, and the shipping was faster than expected.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Regular Shopper",
    testimonial:
      "I love shopping here! The website is easy to navigate, and I always find the best deals on everything I need.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sara Lee",
    title: "First-Time Buyer",
    testimonial:
      "Great experience! Customer service was fantastic, and my order arrived perfectly packaged and on time.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Michael Johnson",
    title: "Frequent Shopper",
    testimonial:
      "I always trust this store for my purchases. The quality is unmatched, and the delivery is always prompt.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto p-4 ">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
