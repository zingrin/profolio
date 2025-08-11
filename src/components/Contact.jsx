import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Add current time to the form data manually
    const formData = new FormData(formRef.current);
    formData.set("time", new Date().toLocaleString());

    // Convert FormData back to object to send to EmailJS
    const templateParams = {};
    formData.forEach((value, key) => {
      templateParams[key] = value;
    });

    emailjs
      .send(
        "service_vm9x8ah", 
        "template_7b8jbof", 
        templateParams,
        "i6jP6CnJdDJDJSeHb" 
      )
      .then(
        (result) => {
          setStatus("SUCCESS");
          formRef.current.reset();
        },
        (error) => {
          setStatus("FAILED");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-cyan-300">Me</span>
          </h2>
          <p className="text-gray-300 mb-6">
            I’m always open to new ideas and collaborations. Whether you want
            to work together on a project or just say hello, feel free to reach
            out. Let’s create something amazing!
          </p>
          <div className="mb-4 text-gray-300">
            <p className="mb-2 flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              <span>📧</span> jerinloncheu@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              <span>📞</span> +8801755171954
            </p>
          </div>
          {/* Add your social links here if you want */}
        </div>

        {/* Right Side: Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          noValidate
        >
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          {/* Hidden input for time will be added dynamically in sendEmail */}

          <button
            type="submit"
            className="w-full bg-cyan-400 text-gray-900 font-semibold py-3 rounded-md hover:bg-cyan-200 transition duration-300"
          >
            Submit
          </button>

          {status === "SUCCESS" && (
            <p className="text-cyan-500 mt-4">Message sent successfully!</p>
          )}
          {status === "FAILED" && (
            <p className="text-red-500 mt-4">Failed to send message. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
