"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Mail, Phone, ArrowRight, HelpCircle, MessageSquare, LifeBuoy, FileQuestion } from "lucide-react";

export default function SupportPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                Berkeley
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                Privacy
                            </Link>
                            <Link href="/support" className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                                Support
                            </Link>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none"
                            >
                                <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 shadow-lg">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                            Privacy Policy
                        </Link>
                        <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">
                            Support
                        </Link>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 opacity-50" />
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                                Berkeley <span className="text-blue-600 dark:text-blue-400">Support Center</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                How can we help you today? Get expert assistance with your <span className="font-semibold text-slate-900 dark:text-white">Berkeley Banking App</span> features and services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* Help Categories */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            { title: "Technical Help", desc: "Troubleshoot app issues and connectivity.", icon: LifeBuoy, color: "blue" },
                            { title: "Account Safety", desc: "Security and fraud prevention tools.", icon: HelpCircle, color: "indigo" },
                            { title: "Banking Features", desc: "Guides on transfers, loans and more.", icon: MessageSquare, color: "green" },
                        ].map((cat, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                                <div className={`w-12 h-12 rounded-xl bg-${cat.color}-100 dark:bg-${cat.color}-900/30 flex items-center justify-center mb-6 text-${cat.color}-600 dark:text-${cat.color}-400 group-hover:scale-110 transition-transform`}>
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{cat.desc}</p>
                                <button className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Links Section */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-16">
                        <div className="p-8 sm:p-10 border-b border-slate-100 dark:border-slate-700/50">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Common Questions</h2>
                            <p className="text-slate-600 dark:text-slate-400">Quick answers to our most popular inquiries.</p>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
                            {[
                                "How do I reset my banking password?",
                                "What are the transfer limits for international wires?",
                                "How do I update my KYC documentation?",
                                "Is there a fee for closing my account?",
                                "How do I link a new debit card?"
                            ].map((q, i) => (
                                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <FileQuestion className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{q}</span>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-slate-300 -rotate-90" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Support Section */}
                    <section id="contact-support" className="scroll-mt-24">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Still Need Help?</h2>
                            <p className="text-slate-600 dark:text-slate-400">Our team is available round the clock to assist you.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center hover:border-blue-400 transition-colors group">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:rotate-6 transition-transform">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Email Support</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Send us a detailed message about your inquiry. We typically respond within 24 hours.
                                </p>
                                <a href="mailto:support@berkeleybanking.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                                    Contact Via Email
                                </a>
                            </div>

                            <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center hover:border-green-400 transition-colors group">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">Phone Support</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    Speak directly with a support agent for urgent matters. Available Mon-Fri.
                                </p>
                                <a href="tel:+1-800-123-4567" className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-xl transition-all active:scale-95">
                                    +1-800-123-4567
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-bold text-lg text-slate-900 dark:text-white block mb-1">Berkeley Banking</span>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Trusted banking solutions for the modern world.
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
                        <Link href="/support" className="hover:text-blue-600 dark:hover:text-blue-400">Support</Link>
                        <Link href="/account-deletion" className="hover:text-blue-600 dark:hover:text-blue-400">Account Deletion</Link>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
                        © {new Date().getFullYear()} Berkeley Credit Bank.
                    </div>
                </div>
            </footer>
        </div>
    );
}
