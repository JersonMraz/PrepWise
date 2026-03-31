"use client";
import { useState } from "react";
import Link from "next/link";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import api from "../lib/api";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loggingIn, setLoggingIn] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        setLoggingIn(true);
        const response = await api.post("/users/login", {
            email,
            password,
        });

        const data = response.data;

        if (data.success) {
            localStorage.setItem("token", data.token);
            router.push("/planner/dashboard");
        } else {
            alert(data.message);
        }

        setLoggingIn(false);
    }

    return (
        <div className="flex min-h-screen">
            {/* Left — branding panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-primary-foreground"
                            style={{
                                width: `${80 + i * 40}px`,
                                height: `${80 + i * 40}px`,
                                top: `${10 + i * 14}%`,
                                left: `${5 + i * 15}%`,
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
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-primary-foreground/20 mb-6">
                        <ChefHat className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h1 className="font-heading text-4xl font-bold text-primary-foreground mb-4">
                        Welcome back to MealFlow
                    </h1>
                    <p className="text-primary-foreground/80 text-lg max-w-md mx-auto">
                        Plan meals, discover recipes, and simplify your grocery shopping — all in one place.
                    </p>
                </motion.div>
            </div>

            {/* Right — form */}
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
                        <h2 className="text-2xl font-heading font-extrabold text-foreground">Sign in</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(email, password) }}>
                        <div className="space-y-2">
                            <p className="text-sm font-body font-medium text-foreground">Email</p>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-body font-medium text-foreground">Password</p>
                                <button type="button" className="text-xs text-primary hover:underline cursor-pointer">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loggingIn}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                            {loggingIn ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="animate-spin h-4 w-4 text-primary-foreground"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12" cy="12" r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 3 0 5.373 0 12H4z"
                                        />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>

                </motion.div>
            </div>
        </div>
    );
}