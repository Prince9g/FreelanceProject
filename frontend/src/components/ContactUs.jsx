import React, { useState } from "react";

const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    address: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const submitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    sendEmail(); // Call the sendEmail function to send email
  };

  // Function to open email client
  const sendEmail = () => {
    const { fullName, phone, email, message, address } = formData;
    const recipientEmail = "#";
    const mailtoLink = `mailto:${recipientEmail}?subject=Quote Request from ${encodeURIComponent(fullName)}&body=Full Name: ${encodeURIComponent(fullName)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}%0AAddress: ${encodeURIComponent(address)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink; // This should be triggered by user gesture
  };

  return (
    <div className="m-4">
      {/* Top Section: Form and Image */}
      <div className="flex flex-col md:justify-around md:flex-row">
        {/* Left side: Form */}
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-secondary mb-4">** Request a Quote **</h1>
          <p className="text-2xl text-center mt-2 text-primary mb-4">We'll get back to you with an estimate</p>

          <form onSubmit={submitForm}>
            <div className="flex items-center mb-5">
              <label htmlFor="fullName" className="w-[20%]">Full name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="phone" className="w-[20%]">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="email" className="w-[20%]">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="message" className="w-[20%]">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <label htmlFor="address" className="w-[18%]">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            <div className="flex gap-2 mb-4">
              <input type="checkbox" id="privacy" required className="p-2"/>
              <label htmlFor="privacy" className="text-semibold">
                By submitting the above information, you agree to our
                <a href="#"> privacy policy</a>.
              </label>
            </div>

            <button type="submit" className="bg-secondary p-3 rounded-full hover:bg-[#c37662]">GET A QUOTE</button>
          </form>
        </div>

        {/* Right side: Image */}
        <div
          className="mt-4 md:mt-0 md:w-1/2"
        >
          <img
            src="https://www.mcpackagings.com/wp-content/uploads/2022/12/eco-paper-double-door-perfume-box.jpg"
            className="h-full"
            alt="prefumeImage"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
