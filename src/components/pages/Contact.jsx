import React from "react";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  // const handleSubmit = (e) => {
  // e.preventDefault();
  // };

  return (
    <section id="contact">
      <div className="text-center space-y-4 px-5 py-5">
        <h1 className="font-bold text-3xl">Contact Us</h1>

        <form
          action=""
          className=" space-y-4 max-w-8/12 mx-auto bg-gray-200 py-5"
        >
          <div className="space-x-2 mt-4">
            <label htmlFor="name" className="text-lg font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder=" Enter Your Name"
              required
              className="rounded-sm outline-2 outline-blue-400 w-4/12 px-4 py-1"
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="email" className="text-lg font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="Useremail"
              placeholder="Enter Your Email  "
              required
              className="rounded-sm outline-2 outline-blue-400 w-4/12 px-4 py-1"
            />
          </div>
          <div className="">
            <textarea
              name="UserMessage"
              rows="5"
              placeholder="Enter Message Here"
              className="rounded-sm outline-2 outline-blue-400 w-4/12 px-4 py-1 ml-14"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border px-10 py-2 bg-blue-600 cursor-pointer rounded-lg font-mono shadow-lg shadow-blue-700 transition-all duration-300 delay-200 ease-in-out hover:bg-blue-900 hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
