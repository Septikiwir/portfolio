'use client';

import React from 'react';

export default function ContactSection() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // UI-only — no backend yet
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        { icon: "mail", label: "Email", value: "hello@nvg8.io", href: "mailto:hello@nvg8.io" },
        { icon: "location_on", label: "Location", value: "Jakarta, Indonesia", href: "#" },
        { icon: "language", label: "Website", value: "nvg8.io", href: "#" },
    ];

    const socials = [
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Dribbble", href: "#" },
        { name: "Behance", href: "#" },
    ];

    return (
        <section id="contact" className="section-container">
            <div className="text-center mb-16">
                <h2 className="section-heading">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p className="section-subheading mx-auto">
                    Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    Let&apos;s create something amazing together.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left — Contact Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Info Cards */}
                    <div className="space-y-4">
                        {contactInfo.map((info) => (
                            <a
                                key={info.label}
                                href={info.href}
                                className="glass-card rounded-xl p-4 flex items-center gap-4 group/item hover:!transform-none"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary-green/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-green/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary-green text-xl">
                                        {info.icon}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</div>
                                    <div className="text-sm text-white font-medium">{info.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Follow Me</p>
                        <div className="flex flex-wrap gap-2">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-sm px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:border-primary-green/30 hover:bg-primary-green/5 transition-all"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — Contact Form */}
                <div className="lg:col-span-3">
                    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 hover:!transform-none">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-green text-white font-bold py-3.5 rounded-xl hover:bg-white hover:text-black transition-all hover:shadow-neon flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                    send
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
