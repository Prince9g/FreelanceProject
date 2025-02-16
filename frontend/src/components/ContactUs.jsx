import React, { useEffect, useState } from "react";
import image from '../assets/infinity1.jpeg';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
    address: "",
    country: "",
  });

  const [countries, setCountries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch countries list when component mounts
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (send data to backend)
  const submitForm = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Show loading state

    try {
      const response = await axios.post("http://localhost:8080/admin/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response from server:", response.data);
      toast.success(response.data.message);
      setFormData({ fullname: "", phone: "", email: "", message: "", address: "", country: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-4">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      {/* Top Section: Form and Image */}
      <div className="flex flex-col md:justify-around md:flex-row">
        {/* Left side: Form */}
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-secondary mb-4">
            ** Request a Quote **
          </h1>
          <p className="text-2xl text-center mt-2 text-primary mb-4">
            We'll get back to you with an estimate
          </p>

          <form onSubmit={submitForm}>
            <div className="flex items-center mb-5">
              <label htmlFor="fullname" className="w-[20%]">Full name *</label>
              <input type="text" id="fullname" name="fullname" placeholder="Enter your full name"
                required value={formData.fullname} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="phone" className="w-[20%]">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"
                value={formData.phone} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="email" className="w-[20%]">Email *</label>
              <input type="email" id="email" name="email" placeholder="Enter your email"
                required value={formData.email} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>

            <div className="flex items-center mb-5">
              <label htmlFor="message" className="w-[20%]">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message"
                rows="4" value={formData.message} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <label htmlFor="address" className="w-[18%]">Address</label>
              <input type="text" id="address" name="address" placeholder="Enter your address"
                value={formData.address} onChange={handleChange} className="border rounded-md p-2 w-full" />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <label htmlFor="country" className="w-[18%]">Country*</label>
              <select id="country" name="country" value={formData.country} onChange={handleChange}
                required className="border rounded-md p-2 w-full">
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>{country.label}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-2 mb-4">
              <input type="checkbox" id="privacy" required className="p-2" />
              <label htmlFor="privacy" className="text-semibold">
                By submitting the above information, you agree to our
                <a href="#"> privacy policy</a>.
              </label>
            </div>

            <button type="submit" className="bg-secondary p-3 rounded-full hover:bg-[#c37662]"
              disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "GET A QUOTE"}
            </button>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="mt-4 md:mt-0 md:w-1/2">
          <img src={image} className="h-full rounded-lg shadow-lg" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
