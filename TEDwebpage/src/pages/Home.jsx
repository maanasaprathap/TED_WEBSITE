import EventCard from "../components/EventCard";

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold text-red-600">Welcome to TEDcMIT</h1>
      <p className="mt-2">Inspiring ideas, spreading knowledge.</p>

      <h2 className="text-2xl mt-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventCard title="AI & Future" date="March 10, 2024" description="A talk on AI advancements." />
        <EventCard title="Space Exploration" date="March 25, 2024" description="Exploring the universe." />
      </div>
    </div>
  );
};

export default Home;
