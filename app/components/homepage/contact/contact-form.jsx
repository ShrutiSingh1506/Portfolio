"use client";
// @flow strict

import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = (nextInput = userInput) => {
    if (nextInput.name && nextInput.email && nextInput.message) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }

    const emailOk = isValidEmail(userInput.email);
    if (!emailOk) {
      setError((prev) => ({ ...prev, email: true }));
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
      setError({ email: false, required: false });
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
      "bg-white !text-gray-900 !caret-gray-900 placeholder:!text-gray-500 border border-[#464c6a] rounded-md px-3 py-2 outline-none focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3]/30";
  return (
    <div>
      <p className="mb-4 text-3xl font-extrabold text-[#046a38] uppercase">
        Get in Touch
      </p>

      <div className="max-w-3xl bg-[#2F2F2F] rounded-lg border border-[#464c6a] p-5">
        <p className="text-sm text-[#d3d8e8] leading-relaxed">
          Interested in security engineering, threat detection, or applied ML in
          cybersecurity?
          <br />
          Feel free to reach out — I’m open to full-time roles, internships,
          research collaborations, and technical discussions.
        </p>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Name *</label>
            <input
              className={inputBase}
              type="text"
              maxLength={100}
              placeholder="Your name"
              value={userInput.name}
              onChange={(e) => {
                const next = { ...userInput, name: e.target.value };
                setUserInput(next);
                checkRequired(next);
              }}
              onBlur={() => checkRequired()}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Email *</label>
            <input
              className={inputBase}
              type="email"
              maxLength={100}
              placeholder="you@example.com"
              value={userInput.email}
              onChange={(e) => {
                const val = e.target.value;
                const next = { ...userInput, email: val };
                setUserInput(next);
                checkRequired(next);
                // live-validate (optional but helpful)
                setError((prev) => ({ ...prev, email: val.length > 0 && !isValidEmail(val) }));
              }}
              onBlur={(e) => {
                const val = e.target.value;
                checkRequired({ ...userInput, email: val });
                setError((prev) => ({ ...prev, email: val.length > 0 && !isValidEmail(val) }));
              }}
            />
            {error.email && (
              <p className="text-xs text-red-400">
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-white text-sm">Message *</label>
            <textarea
              rows={4}
              maxLength={500}
              className={inputBase}
              placeholder="Write your message..."
              value={userInput.message}
              onChange={(e) => {
                const next = { ...userInput, message: e.target.value };
                setUserInput(next);
                checkRequired(next);
              }}
              onBlur={() => checkRequired()}
            />
          </div>

          {error.required && (
            <p className="text-xs text-red-400">All fields are required.</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#046a38] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:opacity-90 transition disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Message"}
            <TbMailForward size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
