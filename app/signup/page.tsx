"use client";
import { useState } from "react";
import Link from "next/link";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex">
            {/* Left — branding panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-accent items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-accent-foreground"
                            style={{
                                width: `${60 + i * 50}px`,
                                height: `${60 + i * 50}px`,
                                top: `${8 + i * 15}%`,
                                right: `${5 + i * 12}%`,
                            }}
                        />
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center px-12"
                >
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-accent-foreground/20 mb-6">
                        <ChefHat className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h1 className="font-heading text-4xl font-bold text-accent-foreground mb-4">
                        Join MealFlow
                    </h1>
                    <p className="text-accent-foreground/80 text-lg max-w-md mx-auto">
                        Start planning smarter meals today. It's free to get started!
                    </p>
                </motion.div>
            </div>

            {/* Right - Form */}
            <div className="flex-1 flex items-center justify-center p-6 bg-background">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="lg:hidden flex items-center gap-2 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                            <ChefHat className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-heading text-xl font-semibold text-foreground">MealFlow</span>
                    </div>

                    <div>
                        <h2 className="text-2xl font-heading font-extrabold text-foreground">Create an account</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Sign up to start planning your meals
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <p className="text-sm font-body font-medium text-foreground">First name</p>
                                <input id="firstName" placeholder="John" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-body font-medium text-foreground">Last name</p>
                                <input id="lastName" placeholder="Doe" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm font-body font-medium text-foreground">Email</p>
                            <input id="email" type="email" placeholder="you@example.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm font-body font-medium text-foreground">Password</p>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
                        </div>

                        <button type="submit" className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                            Create account
                        </button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/signin" className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}