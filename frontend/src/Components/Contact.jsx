import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);

      if (res.data && res.data.message) {
        toast.success(res.data.message);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message ❌");
    }
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        method="post" 
        className="max-w-lg mx-auto border shadow-lg rounded-lg p-8 mt-10"
      >
        <h1 className="text-center text-3xl font-bold mb-6">Contact Us</h1>
        <hr className="mb-6" />

        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name:-
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email:-
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block font-semibold mb-2">
            Subject:-
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block font-semibold mb-2">
            Message:-
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Type your message here..."
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
