"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      console.log("Raw response:", text);

      // Parse the response as JSON
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "An error occurred");
      }

      setSubmitMessage("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occurred");
      }
      setSubmitMessage("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="container mx-auto px-4 py-16 row-start-2">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 border-b border-green-500/20 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Contact Me</h1>
            <div className="h-1 w-20 bg-green-500 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-foreground/70">connorwfloyd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground/70">(843) 816-3643</p>
                    <p className="text-foreground/70">
                      NOTE: Please tell me you came from the website if you text or call me. I do not answer numbers I do not recognize.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-foreground/70">Bluffton, SC</p>
                    <p className="text-foreground/70">Open to relocation for full-time offers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-foreground"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full px-4 py-2 bg-green-500 text-[#040404] font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#040404] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {submitMessage && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-500">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}