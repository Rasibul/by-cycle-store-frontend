interface TestimonialProps {
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  title,
  testimonial,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
