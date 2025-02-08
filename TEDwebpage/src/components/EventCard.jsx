const EventCard = ({ title, date, description }) => {
  return (
    <div className="border p-3 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-500">{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
