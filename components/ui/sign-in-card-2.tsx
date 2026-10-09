"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-xl border border-white/10 bg-white/[0.045] px-10 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-violet-200/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-violet-300/10",
        className
      )}
      {...props}
    />
  );
}

export function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [notice, setNotice] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-240, 240], [7, -7]);
  const rotateY = useTransform(mouseX, [-240, 240], [-7, 7]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice("Demo only — no sign-in occurred and no details were saved or sent.");
    setPassword("");
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050307] px-4 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,.34),transparent_55%),linear-gradient(180deg,rgba(88,28,135,.35),#050307_75%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[min(90vw,800px)] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
      <motion.div
        className="pointer-events-none absolute bottom-[-15rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[100px]"
        animate={{ scale: [1, 1.14, 1], opacity: [.3, .55, .3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[.055] [background-image:linear-gradient(135deg,white_1px,transparent_1px),linear-gradient(45deg,white_1px,transparent_1px)] [background-size:44px_44px]" />

      <motion.section
        initial={{ opacity: 0, y: 24, scale: .98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[390px]"
        style={{ perspective: 1200 }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          style={{ rotateX, rotateY }}
          className="relative"
        >
          <div className="absolute -inset-px overflow-hidden rounded-[26px] opacity-80">
            <motion.div
              className="absolute -left-1/2 top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px]"
              animate={{ left: ["-50%", "150%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: .6 }}
            />
            <motion.div
              className="absolute right-0 top-[-50%] h-1/2 w-[2px] bg-gradient-to-b from-transparent via-violet-100 to-transparent blur-[1px]"
              animate={{ top: ["-50%", "150%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: .6, delay: .8 }}
            />
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-white/[.12] bg-[#100b19]/80 p-6 shadow-[0_25px_100px_rgba(0,0,0,.55)] backdrop-blur-2xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[.07] via-transparent to-violet-400/[.04]" />
            <div className="relative">
              <div className="mb-7 text-center">
                <motion.div
                  initial={{ scale: .6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[.07] shadow-[0_0_35px_rgba(168,85,247,.18)]"
                >
                  <Sparkles className="h-5 w-5 text-violet-100" />
                </motion.div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.32em] text-violet-200/80">WELCOME BACK</p>
                <h1 className="text-2xl font-semibold tracking-tight text-white">Sign in to continue</h1>
                <p className="mt-2 text-xs leading-5 text-white/50">A little space for your next big idea.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block space-y-2">
                  <span className="ml-1 text-xs font-medium text-white/75">Email address</span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-100/60" />
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </label>

                <label className="block space-y-2">
                  <span className="ml-1 text-xs font-medium text-white/75">Password</span>
                  <span className="relative block">
                    <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-100/60" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter a demo password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-11"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/45 transition hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </span>
                </label>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <label className="flex cursor-pointer items-center gap-2 text-white/60">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-3.5 w-3.5 accent-violet-300"
                    />
                    Remember me
                  </label>
                  <span className="text-violet-200/80">Demo page</span>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: .985 }}
                  className="group mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-200 via-purple-200 to-fuchsia-200 text-sm font-semibold text-[#1a1024] shadow-[0_8px_30px_rgba(168,85,247,.2)] transition hover:brightness-105"
                >
                  Try demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
                {notice && (
                  <p role="status" className="rounded-lg border border-violet-200/15 bg-violet-300/[.08] p-3 text-center text-xs leading-5 text-violet-100/90">
                    {notice}
                  </p>
                )}
              </form>
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] uppercase tracking-[.18em] text-white/30">Secure design preview</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="text-center text-[11px] leading-5 text-white/35">
                UI concept by <span className="text-white/65">Hariom</span> · Demo only, not a real account service
              </p>
            </div>
          </div>
        </motion.div>
        <p className="mt-5 text-center text-[10px] tracking-wide text-white/30">PURPLE GLASS · SOFT GLOW · MICRO ANIMATIONS</p>
      </motion.section>
    </main>
  );
}
