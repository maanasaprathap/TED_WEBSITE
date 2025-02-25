const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80">
      {/* Event Image */}
      <img src="/assets/Events/2025/Innovate-25.jpg" alt={title} className="w-full h-48 object-cover" />


      {/* Event Details */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
