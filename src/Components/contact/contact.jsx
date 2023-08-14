import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="shadow-md rounded-lg max-w-md w-full"
        action="https://formspree.io/f/xoqoekad"
        method="POST"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#35dbd3]">
          Contact Me
        </h2>
        <div className="mb-4">
          <label
            className="block text-[#35dbd3] text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#35dbd3]"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#35dbd3] text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#35dbd3]"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-[#35dbd3] text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#35dbd3]"
            name="message"
            placeholder="Message"
            rows="4"
            required
          />
        </div>
        <button
          className="bg-[#35dbd3] text-white py-2 px-4 rounded hover:bg-[#2da9aa] transition-colors duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
