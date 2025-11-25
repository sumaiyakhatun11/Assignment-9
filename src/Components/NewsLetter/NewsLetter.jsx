import React, { useState } from "react";

const NewsletterSection = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage("Thank you for subscribing!");
            setEmail("");
        } catch (_) {
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="bg-gray-400 py-12 text-white">
            <div className="max-w-md mx-auto text-center px-4">
                <h2 className="text-2xl font-semibold mb-4">
                    Subscribe to our Newsletter
                </h2>
                <p className="mb-6 opacity-80">
                    Join our newsletter to get the latest updates, game news, and special offers.
                </p>

                <form onSubmit={handleSubmit} className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 rounded-l-md text-black w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
                    >
                        Subscribe
                    </button>
                </form>

                {message && <p className="mt-4">{message}</p>}

                <p className="mt-4 text-xs opacity-70">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
