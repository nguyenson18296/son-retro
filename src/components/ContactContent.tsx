import { useState } from "react";
import { Send } from "lucide-react";

import LinkedInLogo from "../assets/linkedin.svg";
import GmailLogo from "../assets/gmail.svg";
import GithubLogo from "../assets/github_light.svg";
import TwitterLogo from "../assets/x.svg";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      icon: GmailLogo,
      label: "Email",
      href: "mailto:nguyenson18296@email.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GithubLogo,
      label: "GitHub",
      href: "https://github.com/nguyenson18296?tab=stars",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: LinkedInLogo,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/son-nguyen-49a798248/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: TwitterLogo,
      label: "Twitter",
      href: "https://twitter.com",
      color: "from-sky-400 to-blue-500",
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl mb-3">Get In Touch</h2>

      {/* Social Links */}
      <div>
        <h3 className="mb-4">Connect With Me</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br text-white`}>
                  <img src={link.icon} alt={link.label} className="w-5 h-5" />
                </div>
                <span className="group-hover:text-indigo-600 transition-colors">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="mb-4">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>

      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 animate-in fade-in duration-300">
          <p className="text-sm text-green-900">
            ✓ Message sent successfully! I'll get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
}
