const ContactPage = () => {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <input
          className="w-full border-2 px-2 py-2 rounded-md"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="w-full border-2 px-2 py-2 rounded-md"
          type="email"
          placeholder="Enter your email"
        />
        <textarea
          className="w-full border-2 px-2 py-2 rounded-md"
          name=""
          id=""
          placeholder="Give us a message"
        ></textarea>
        <button className="bg-green-500 text-white py-2 rounded">
          Contact
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
