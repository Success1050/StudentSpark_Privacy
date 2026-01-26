"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Mail, Phone, ShieldX, Database, Clock, ArrowRight } from "lucide-react";

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
                                Berkeley <span className="text-blue-600 dark:text-blue-400">Support</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                Manage your data and get help with the <span className="font-semibold text-slate-900 dark:text-white">Berkeley Banking App</span>.
                                (BSK Account Controls)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                    {/* Account Deletion Section - Prominently Featured */}
                    <section id="account-deletion" className="scroll-mt-24">
                        <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <div className="p-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                            <div className="p-6 sm:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                                        <ShieldX className="w-8 h-8 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                            Request BSK Account Deletion
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            If you wish to permanently delete your <strong>BSK</strong> account and associated data from the Application, please follow the procedure below.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Steps to delete your BSK account:</h3>
                                    <ol className="space-y-4">
                                        {[
                                            "Log in to the Berkeley Banking mobile application.",
                                            "Tap the Menu icon (≡) or go to your Profile.",
                                            "Select 'Settings & Privacy'.",
                                            "Scroll down to find the 'Account Management' section.",
                                            "Tap 'Delete BSK Account' and follow the on-screen confirmation prompts."
                                        ].map((step, index) => (
                                            <li key={index} className="flex gap-4">
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-200 dark:border-blue-800">
                                                    {index + 1}
                                                </span>
                                                <span className="text-slate-700 dark:text-slate-300 font-medium py-1">{step}</span>
                                            </li>
                                        ))}
                                    </ol>

                                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                                            Alternatively, if you cannot access the app, you may submit a request by emailing our support team at <a href="mailto:support@berkeleybanking.com" className="text-blue-600 hover:underline">support@berkeleybanking.com</a> with the subject line "BSK Account Deletion Request". Please include your account email for verification.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Database className="w-5 h-5 text-slate-500" />
                                            <h3 className="font-semibold text-slate-900 dark:text-white">Data Deleted</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 marker:text-red-500 list-disc pl-5">
                                            <li>Personal profile information (Name, DOB, Address).</li>
                                            <li>Login credentials and authentication tokens.</li>
                                            <li>Linked payment methods (tokenized data).</li>
                                            <li>Marketing preferences and app settings.</li>
                                            <li>Cached device data.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock className="w-5 h-5 text-slate-500" />
                                            <h3 className="font-semibold text-slate-900 dark:text-white">Data Retained</h3>
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 marker:text-amber-500 list-disc pl-5">
                                            <li>Transaction history (Deposits, Withdrawals, Transfers).</li>
                                            <li>Loan agreements and repayment records.</li>
                                            <li>Identity verification records (KYC documents).</li>
                                            <li>Fraud prevention logs.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
                                    <p className="text-sm text-amber-800 dark:text-amber-200">
                                        <span className="font-bold">Retention Policy:</span> Financial transaction data and legal documents are retained for a minimum of 7 years in compliance with applicable banking regulations and anti-money laundering (AML) laws. After this period, data is securely archived or anonymized.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Support Section */}
                    <section id="contact-support">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Berkeley Banking Support</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center hover:border-blue-400 transition-colors">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Email Support</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                    For general inquiries, account issues, and deletion requests.
                                </p>
                                <a href="mailto:support@berkeleybanking.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                                    support@berkeleybanking.com <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center hover:border-blue-400 transition-colors">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">Phone Support</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                    Available Mon-Fri, 9:00 AM - 5:00 PM EST.
                                </p>
                                <a href="tel:+1-800-123-4567" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                                    +1-800-123-4567 <ArrowRight className="w-4 h-4" />
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
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
                        © {new Date().getFullYear()} Berkeley Credit Bank.
                    </div>
                </div>
            </footer>
        </div>
    );
}
