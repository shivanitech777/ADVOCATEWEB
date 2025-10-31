'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

export default function DisclaimerDialog() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted disclaimer
        const hasAccepted = localStorage.getItem('disclaimerAccepted');
        if (!hasAccepted) {
            // Show dialog after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('disclaimerAccepted', 'true');
        setIsOpen(false);
    };

    const handleClose = () => {
        // Redirect away from site if they don't accept
        window.location.href = 'https://www.google.com';
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#071428] to-[#0B1C2A] text-white px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-amber-500/20 rounded-full">
                                        <AlertTriangle className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">Legal Disclaimer</h2>
                                        <p className="text-sm text-gray-300">Indian Law Masters</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    aria-label="Close and leave website"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-sm font-medium text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                                    <strong>Important:</strong> The Bar Council of India prohibits advocates from engaging in any form of advertisement or solicitation.
                                </p>

                                <p className="text-sm">
                                    By accessing the <strong>Indian Law Masters</strong> website, you acknowledge that:
                                </p>

                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#C5A25A] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>You are voluntarily using our website to gain information about us for your information and use. You acknowledge that there has been no attempt by us to advertise or solicit work.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#C5A25A] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between Indian Law Masters and you.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#C5A25A] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#C5A25A] rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Indian Law Masters will not be held liable for any consequences from actions taken based on the materials or information provided on this website.</span>
                                    </li>
                                </ul>

                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                                    <p className="text-xs text-gray-600">
                                        By clicking &quot;Proceed to Website&quot;, you confirm that you have read, understood, and agree to these terms and conditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                {/* <button
                                    onClick={handleClose}
                                    className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors order-2 sm:order-1"
                                >
                                    Decline & Leave
                                </button> */}
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-2.5 bg-gradient-to-r from-[#C5A25A] to-[#B8956B] text-white font-semibold rounded-lg hover:from-[#B8956B] hover:to-[#C5A25A] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 order-1 sm:order-2"
                                >
                                    Proceed to Website
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}