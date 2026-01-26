"use client";

import Link from "next/link";
import { ShieldAlert, Eye, Users, Gavel, Flag, ArrowLeft } from "lucide-react";

export default function CSAEStandardsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">

            {/* Navigation */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Privacy
                    </Link>
                    <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-red-600" /> Safety Center
                    </span>
                    <div className="w-16"></div>
                </div>
            </header>

            <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Standards Against Child Sexual <br className="hidden sm:block" /> Abuse and Exploitation (CSAE)
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        We are committed to providing a safe environment for all our users. We maintain a zero-tolerance policy regarding any content or behavior related to child sexual abuse or exploitation.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* Zero Tolerance */}
                    <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                <Gavel className="w-6 h-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Zero-Tolerance Policy</h2>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                            Our platform strictly prohibits the creation, distribution, or promotion of Child Sexual Abuse Material (CSAM) and any form of Child Sexual Abuse and Exploitation (CSAE). This includes:
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                Visual representations of sexual abuse of minors.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                Grooming or solicitation of minors.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                Promotion of CSE activities.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 font-bold">•</span>
                                Any content that endangers the safety of children.
                            </li>
                        </ul>
                    </section>

                    {/* Reporting & Collaboration */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Law Enforcement</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                We cooperate fully with global law enforcement agencies and the National Center for Missing & Exploited Children (NCMEC). We report all instances of CSAM found on our platform as required by international and local laws.
                            </p>
                        </section>

                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Content Moderation</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our safety systems utilize advanced hashing technologies (such as PhotoDNA) and human moderation to proactively identify and remove prohibited content before it reaches our community.
                            </p>
                        </section>
                    </div>

                    {/* Reporting Mechanism */}
                    <section className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white shadow-xl shadow-blue-500/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <Flag className="w-3 h-3" /> Urgent
                                </div>
                                <h2 className="text-2xl font-extrabold mb-2">Report a Concern</h2>
                                <p className="text-blue-100 text-sm max-w-md">
                                    If you encounter any content or user behavior that violates these standards, please report it immediately via the in-app reporting tool or contact our safety team.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                                <a href="mailto:safety@berkeleybanking.com" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl text-center hover:bg-blue-50 transition-colors">
                                    Contact Safety Team
                                </a>
                                <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-800 text-white font-bold rounded-xl text-center hover:bg-blue-900 transition-colors text-sm">
                                    Report to NCMEC (External)
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Compliance */}
                    <section className="text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            These standards are part of our broader commitment to digital safety and compliance with the <br className="hidden sm:block" />
                            <strong>Digital Services Act (DSA)</strong> and other global safety regulations.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} BSK Tech. All rights reserved.</p>
                <div className="mt-4 flex gap-6 justify-center">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Privacy</Link>
                    <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
                </div>
            </footer>
        </div>
    );
}
