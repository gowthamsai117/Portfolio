import React, { useState } from "react";
import { motion } from "framer-motion";
import StarsCanvas from "../components/StarsCanvas";
import mail from '../assets/mail.webp';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send email
    emailjs.send(
      'service_n7rj767', // EmailJS Service ID
      'template_nydbz34', // EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'EgrBP_tYgf4j4PO-A' // EmailJS Public Key (User ID)
    )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setStatus("Failed to send message. Please try again.");
      });
  };

  // Animation variants to match Projects.jsx
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#1A0324] text-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      {/* Stars Canvas Background */}
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      {/* Header */}
      <div className="relative z-0 text-center mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm uppercase text-gray-400 mt-16">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
          Contact.
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-0 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={mail}
            alt="Contact Illustration"
            className="w-[200px] sm:w-[250px] lg:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] object-contain"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full lg:w-1/2 bg-gradient-to-br from-purple-500 to-pink-500 mt-10 rounded-[20px] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)] order-2 lg:order-1"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-4 sm:p-5 lg:p-6 bg-gray-800 rounded-[16px] overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-gray-100 text-xs sm:text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="w-full p-3 sm:p-4 bg-[#1A0324] text-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#AD49E1] placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-100 text-xs sm:text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="w-full p-3 sm:p-4 bg-[#1A0324] text-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#AD49E1] placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-100 text-xs sm:text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="w-full p-3 sm:p-4 bg-[#1A0324] text-gray-300 rounded-lg h-28 sm:h-32 lg:h-36 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#AD49E1] placeholder-gray-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#AD49E1] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-[#7A1CAC] transition-all duration-200"
              >
                Send
              </button>
            </form>
            {/* Status Message */}
            {status && (
              <p className={`mt-4 text-sm text-center ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                {status}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;