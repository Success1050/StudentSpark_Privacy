"use client";

import Link from "next/link";
import { ShieldX, Database, Clock, ArrowLeft, Mail, AlertTriangle, CheckCircle } from "lucide-react";

export default function AccountDeletionPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">

            {/* Simple Header */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back
                    </Link>
                    <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">StudentSpark</span>
                    <div className="w-16"></div> {/* Spacer for centering */}
                </div>
            </header>

            <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full">

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-6 text-red-600 dark:text-red-400 shadow-sm">
                        <ShieldX className="w-10 h-10" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Account Deletion Request
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        If you wish to remove your account and data from StudentSpark, you can do so directly within the application or by contacting our support team.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Steps Section */}
                    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                How to Delete Your Account
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">1</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Open the App</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Launch the mobile application on your device and log in to your account.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">2</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Navigate to Settings</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Tap on the Menu/Profile icon, then select <strong>Settings & Privacy</strong>.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-red-600 group-hover:text-white transition-colors text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">3</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Select "Delete Account"</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Find the "Account Management" or "Data Control" section and tap the <strong>Delete Account</strong> option.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-green-600 group-hover:text-white transition-colors text-slate-900 dark:text-white flex items-center justify-center font-bold border border-slate-200 dark:border-slate-600">4</div>
                                    <div>
                                        <h3 className="font-medium text-slate-900 dark:text-white mb-1">Confirm Deletion</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">You will be asked to confirm your choice. Once confirmed, your account will be scheduled for deletion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                    <Mail className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                                    <span>
                                        If you are unable to access the app, you may request account deletion by emailing us at <a href="mailto:emmanuelekwunife58@gmail.com" className="text-blue-600 hover:text-blue-700 underline font-medium">emmanuelekwunife58@gmail.com</a>. Please include your registered email address and "Account Deletion Request" in the subject line.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Data Handling Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* What Happens to Data */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-5 h-5 text-red-500" />
                                <h2 className="font-bold text-slate-900 dark:text-white">Data Deleted</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                The following data will be permanently removed from our active databases:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Account Profile & Identity Information",
                                    "Email Address & Credentials",
                                    "User-Generated Content & Preferences",
                                    "Linked Social Media Data",
                                    "Device Identifiers & App Usage History"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckCircle className="w-4 h-4 text-red-500 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Retention Policy */}
                        <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-amber-500" />
                                <h2 className="font-bold text-slate-900 dark:text-white">Retention Policy</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                We practice data minimization. However, some data may be retained for a limited period due to legal or technical reasons:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                                    <span>
                                        <strong>Transaction Records:</strong> Retained for up to 7 years as required by financial regulations and tax laws (if applicable).
                                    </span>
                                </li>
                                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                                    <span>
                                        <strong>Security Logs:</strong> Technical logs may be kept for up to 90 days for detailed security auditing and fraud prevention.
                                    </span>
                                </li>
                                <li className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                                    <span>
                                        <strong>Backups:</strong> Deleted data may remain in encrypted backups for up to 30 days before being completely overwritten.
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* ===== GOOGLE PLAY IDENTITY SECTION (REQUIRED) ===== */}
                    <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mt-8">
                        <h2 className="font-bold text-slate-900 dark:text-white mb-3">
                            App Identity & Ownership
                        </h2>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            This is the official Google Play data deletion page for the application listed below.
                            The information here matches the app identity on the Google Play Store.
                        </p>

                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>
                                <strong>App Name:</strong> StudentSpark
                            </li>

                            <li>
                                <strong>Developer Name:</strong> bsktechltd
                            </li>

                            <li>
                                <strong>Google Play Package:</strong> com.john_1050.student_assistant
                            </li>

                            <li>
                                <strong>Developer Email:</strong> emmanuelekwunife58@gmail.com
                            </li>
                        </ul>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                            This page serves as the official account and data deletion mechanism
                            for the <strong>StudentSpark</strong> mobile application published on Google Play.
                        </p>
                    </section>
                    {/* ===== END GOOGLE PLAY SECTION ===== */}


                    {/* Final Notice */}
                    <section className="bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-5 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Have questions about your data? Contact our Privacy Team at <a href="mailto:emmanuelekwunife58@gmail.com" className="text-blue-600 hover:underline">emmanuelekwunife58@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 mt-auto bg-white dark:bg-slate-900">
                <p>&copy; {new Date().getFullYear()} bsktechltd. All rights reserved.</p>
            </footer>
        </div>
    );
}
