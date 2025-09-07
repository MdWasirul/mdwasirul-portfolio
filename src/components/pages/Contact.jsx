import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Get in Touch</h1>
          <p className="mt-4 text-xl font-semibold">
            I'd love to hear from you! Whether you have a question or just want
            to connect.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-blue-100 p-8 rounded-xl shadow-lg">
          <div className="space-y-6 text-gray-800 ">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p>
              Fill up the form and I will get back to you within 24 hours. Or
              reach out directly through the channels below.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:techbymdwasirul2024@gmail.com"
                className="flex items-center space-x-3 group"
              >
                <MdEmail className="text-blue-500 text-2xl group-hover:text-blue-700 transition" />
                <span className="group-hover:underline">
                  techbymdwasirul2024@gmail.com
                </span>
              </a>

              <a
                href="tel:+916203106712"
                className="flex items-center space-x-3 group"
              >
                <MdPhone className="text-blue-500 text-2xl group-hover:text-blue-700 transition" />
                <span className="group-hover:underline">+91 62031 06712</span>
              </a>

              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-blue-500 text-2xl hover:text-blue-700 transition" />
                <span>Madhapur, Hyderabad, India</span>
              </div>
            </div>
          </div>

          <form action="" className="space-y-6 ">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="Useremail"
                placeholder="Enter Your Email"
                required
                className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="UserMessage"
                rows="5"
                placeholder="Enter message here..."
                required
                className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
