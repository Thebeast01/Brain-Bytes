import "../index.css";
import { useState } from "react";
export const DoubtForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    query: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Class:${formData.class}, Query: ${formData.query}`
    );
    setFormData({
      name: "",
      email: "",
      class: "",
      query: "",
    });
  };

  return (
    <div className="w-full h-full  m-0 flex justify-center items-center ">
      <div className="form-container drop-shadow-2xl  p-9 w-1/2 xl:w-1/3 rounded-xl bg-white">
        <h1 className="text-black text-center font-extrabold text-2xl mb-3">
          Ask Your Doubts
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label for="name">Name:</label>
          <input
            className="border-2 rounded-xl text-black bg-gray-200"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" Enter your name"
          />
          <label for="email">Email</label>
          <input
            className="border-2 rounded-xl text-black bg-gray-200"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" Enter your email"
          />
          <label for="class">Class</label>
          <input
            className="border-2 rounded-xl text-black bg-gray-200"
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder=" Enter your class"
          />
          <label for="query">Query</label>
          <textarea
            className="h-36 border-2 rounded-xl text-center bg-gray-200 p-1 text-black"
            type="text"
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Ask your Doubt"
          ></textarea>
          <div className="flex justify-center">
            <button
              className="mt-2 w-28 p-2 drop-shadow-md bg-yellow-300 rounded-md md:mx-28 lg:mx-40 xl:mx- text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
