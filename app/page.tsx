"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot - if filled, it's a bot
    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setEmail("");
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 lg:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-3">
          <Image
            src="/TM logo v2.png"
            alt="Ministry Teams Logo"
            width={50}
            height={50}
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
          <div className="text-xl lg:text-2xl font-bold text-gray-900">Ministry Teams</div>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2">
            <Image
              src="/google play logo.png"
              alt="Google Play"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Image
              src="/apple logo.png"
              alt="Apple"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <span className="text-sm font-medium text-blue-700">Coming soon to iOS and Android</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 lg:pl-12 xl:pl-32">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-200/50 relative overflow-hidden animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
              <span className="relative text-xl">✨</span>
              <span className="relative text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Coming soon</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Get notified</span>
              <br />
              <span className="text-blue-600">when we launch.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md">
              Simplifying volunteer management for churches and making ministry coordination more efficient.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400 text-sm sm:text-base"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400 text-sm sm:text-base"
              />

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:from-green-500 disabled:via-green-500 disabled:to-green-500 disabled:cursor-not-allowed relative overflow-hidden group text-sm sm:text-base"
              >
                <span className="relative z-10">
                  {isSubmitted ? "✓ Thank you!" : isLoading ? "Subscribing..." : "Notify Me"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </button>
            </form>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[625px]">
              <Image
                src="/MT Dashboard Mockup wbubbles.png"
                alt="Ministry Teams Dashboard"
                width={625}
                height={1250}
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-6 lg:py-8">
        <div className="flex items-center gap-3 text-gray-400 text-xs sm:text-sm">
          <span>Prophetic Horizon Apps</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent max-w-[200px] sm:max-w-xs"></div>
        </div>
      </footer>
    </div>
  );
}
