import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="font-sans p-5 mt-16 text-center bg-black bg-opacity-90">
      {/* Header Text */}
      <section className="mb-4">
        <h1 className="text-3xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-white">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to say hi, our team is here to help.
        </p>
      </section>
      {/* Alternative Contact Information */}
      <section className="mb-10">
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {/* Card 1: Contact Us Directly */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Contact Us Directly
            </h2>
            <p className="text-white text-center mb-4">
              Reach out to us via email or phone for any inquiries or support.
            </p>
            <p className="text-white">
              <span className="block font-medium">Email:</span>
              <a
                href="mailto:contact@moviewebsite.com"
                className="text-blue-400 hover:underline"
              >
                contact@movieworld.com
              </a>
            </p>
            <p className="text-white mt-4">
              <span className="block font-medium">Phone:</span>
              <Link
                to="tel:+91 99999 99999"
                className="text-blue-400 hover:underline"
              >
                +91 99999 99999
              </Link>
            </p>
          </div>

          {/* Card 2: Feedback Form */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-white mb-4">
              Feedback Form
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Your feedback matters to us! Share your thoughts by filling out
              our feedback form.
            </p>
            <Link
              to="/contact/feedback"
              className="bg-black hover:bg-opacity-30 border border-white text-white font-medium py-2 px-4 rounded"
            >
              Go to Feedback Form
            </Link>
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">Our Office</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7537.543320550092!2d72.88708005700455!3d19.161469917259158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731575853438!5m2!1sen!2sin"
          className="w-full h-72 mt-4 rounded-lg shadow-md"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
