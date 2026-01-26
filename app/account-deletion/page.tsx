"use client";

import Link from "next/link";
import { ShieldX, Database, Clock, ArrowLeft, Mail } from "lucide-react";

export default function AccountDeletionPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">

            {/* Simple Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                    <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">Vibemate</span>
                    <div className="w-16"></div> {/* Spacer for centering */}
                </div>
            </header>

            <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-6 text-red-600 dark:text-red-400">
                        <ShieldX className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Delete Your Vibemate Account
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        We value your privacy. If you wish to permanently remove your account and data from the Vibemate platform, please follow the instructions below.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Steps Section */}
                    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                How to Request Deletion
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">1</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Log in to the App</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Open the Vibemate mobile application and sign in to your account.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">2</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Navigate to Settings</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Tap on your Profile icon or Menu, then select <strong>Settings & Privacy</strong>.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">3</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Initiate Deletion</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Scroll to the "Account Management" section and tap <strong>Delete Account</strong>.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">4</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Confirm</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Follow the on-screen prompts to confirm your identity and final deletion request.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                    <Mail className="w-4 h-4 mt-0.5 text-blue-500" />
                                    <span>
                                        Can't access the app? You can arguably submit a manual request by emailing <a href="mailto:support@berkeleybanking.com" className="text-blue-600 hover:underline font-medium">bsktechltd@gmail.com</a> with the subject "Vibemate Account Deletion Request".
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Data Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Deleted Data */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-5 h-5 text-red-500" />
                                <h2 className="font-bold text-slate-900 dark:text-white">Data Completely Deleted</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Personal Profile (Name, Address, Email, Phone)",
                                    "Authentication Credentials & Passwords",
                                    "Linked Payment Methods (Tokenized)",
                                    "App Preferences & Settings",
                                    "Marketing Data & Cookies"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="text-red-500">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Retained Data */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-amber-500" />
                                <h2 className="font-bold text-slate-900 dark:text-white">Data Retained & Why</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Transaction History (Required by Banking Law)",
                                    "Loan & Credit Records (Financial Regulations)",
                                    "KYC/Identity Documents (Anti-Money Laundering)",
                                    "Fraud Prevention Logs (Security Audits)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="text-amber-500">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Retention Policy Note */}
                    <section className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg p-5">
                        <h3 className="text-amber-900 dark:text-amber-100 font-semibold mb-2 text-sm uppercase tracking-wider">Additional Retention Period</h3>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                            By law, financial institutions are required to retain transaction records and identity verification documents for a minimum of <strong>7 years</strong>. This data cannot be deleted upon request until the statutory retention period has expired. After this period, all retained data is securely archived or anonymized in accordance with our data destruction policy.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Vibemate. All rights reserved.</p>
            </footer>
        </div>
    );
}
