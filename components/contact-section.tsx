"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
        },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create WhatsApp message
        const message = `Hello! I'm interested in your interior design services.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Requirements:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919028002031?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="contact"
            className="bg-cover bg-center py-16 px-6"
            style={{ backgroundImage: "url('/background-texture.webp')" }}
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-center text-2xl md:text-5xl font-velista text-black mb-16 px-4 "
                >
                    LET'S{" "}
                    <span className="font-adelia text-3xl md:text-7xl relative -top-3 md:-top-2">
                        Design
                    </span>{" "}
                    YOUR DREAM SPACE
                </motion.h2>

                {/* Form Container */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex justify-center mb-10 px-4"
                >
                    <div className="absolute top-20 left-0 w-full h-full bg-[#7c624d] z-0"></div>
                    <div className="bg-[#f9f6ef] z-10 p-6 md:p-10 w-full max-w-lg rounded shadow-md text-center relative -mb-10">
                        <h3 className="text-xl md:text-3xl text-[#7c624d] font-velista mb-4 tracking-wide uppercase font-bold border-b-2 border-[#7c624d] inline-block">
                            SEND US A MESSAGE
                        </h3>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5 mx-2 md:mx-6 text-center"
                        >
                            <div>
                                <label className="text-sm text-[#7c624d] font-bold block mb-1 text-left">
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-2 bg-transparent border-[#7c624d] p-2 focus:outline-none focus:border-[#b57333]"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-[#7c624d] font-bold block mb-1 text-left">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-2 bg-transparent border-[#7c624d] p-2 focus:outline-none focus:border-[#b57333]"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-[#7c624d] font-bold block mb-1 text-left">
                                    PHONE NO
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-2 bg-transparent border-[#7c624d] p-2 focus:outline-none focus:border-[#b57333]"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-[#7c624d] font-bold block mb-1 text-left">
                                    REQUIREMENTS
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-2 bg-transparent border-[#7c624d] p-2 focus:outline-none focus:border-[#b57333] resize-none"
                                    rows={3}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#b57333] text-white font-velista font-bold text-lg md:text-2xl uppercase px-6 md:px-10 py-3 mt-2 hover:bg-[#a0642d] transition-colors w-full flex items-center justify-center gap-2"
                            >
                                <MessageCircle
                                    size={24}
                                    className="text-white"
                                />
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    variants={itemVariants}
                    className="bg-[#7c624d] text-[#f9f6ef] pt-20 pb-12 px-6"
                >
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-end min-h-[220px]">
                        {/* Contact Info */}
                        <div>
                            <h4 className="font-velista text-2xl font-bold uppercase border-b border-[#f9f6ef] pb-2 mb-4 mr-36">
                                Contact
                            </h4>
                            <p className="flex items-center gap-2 mb-2">
                                {" "}
                                +91-8767834926 · +91-9028002031
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                {" "}
                                hello@kathnicc.com
                            </p>
                            <p className="flex items-center gap-2">
                                {" "}
                                Mumbai, Available Globally
                            </p>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="font-velista text-2xl font-bold uppercase border-b border-[#f9f6ef] pb-2 mb-4 mr-36">
                                Social Media
                            </h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    {" "}
                                    Instagram
                                </li>
                                <li className="flex items-center gap-2">
                                    {" "}
                                    LinkedIn
                                </li>
                                <li className="flex items-center gap-2">
                                    {" "}
                                    Facebook
                                </li>
                            </ul>
                        </div>

                        {/* Thank You */}
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src="/k-logo-bg.png"
                                alt="Thank You Logo"
                                width={120}
                                height={120}
                            />
                            <h4 className="text-2xl md:text-5xl font-bold font-velista uppercase border-b border-[#f9f6ef]">
                                Thank You
                            </h4>
                        </div>
                    </div>
                </motion.footer>
            </motion.div>
        </section>
    );
}
