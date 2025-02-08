const JoinUs = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-600">Join TEDcMIT</h1>
      <p>Become a part of our inspiring community.</p>
      <form className="mt-4">
        <input type="text" placeholder="Name" className="border p-2 mb-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-full" />
        <button className="bg-red-600 text-white p-2 rounded">Join Now</button>
      </form>
    </div>
  );
};

export default JoinUs;
