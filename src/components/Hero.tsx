import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download, Mail, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const metrics = [
  { value: "2+", label: "Years building" },
  { value: "15+", label: "Projects shipped" },
  { value: "99%", label: "Responsive polish" },
];

const stack = ["React", "Next.js", "Node", "MongoDB", "Tailwind", "TypeScript"];

const activity = [
  "Frontend architecture",
  "SaaS dashboards",
  "API integration",
  "Motion systems",
];

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm"
        >
          {stack.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.35 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              Available for frontend and MERN projects
            </motion.div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              Building sharp, animated web experiences for{" "}
              <span className="text-gradient">modern products.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              I&apos;m Muhammad Shahzaib, a Senior Frontend and MERN developer
              turning complex product ideas into fast, responsive, polished
              interfaces with React, Next.js, Node.js, and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="shine-line gradient-primary h-12 rounded-xl px-6 text-sm font-bold text-primary-foreground shadow-glow sm:text-base"
                asChild
              >
                <a href="#contact">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/15 bg-white/[0.03] px-6 text-sm font-bold hover:border-primary/50 hover:bg-primary/10 sm:text-base"
                asChild
              >
                <a href="#projects">
                  <Download className="h-4 w-4" />
                  View Work
                </a>
              </Button>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.08, duration: 0.45 }}
                  className="glass-panel rounded-2xl px-3 py-4 text-center sm:px-5"
                >
                  <div className="text-2xl font-black text-gradient sm:text-3xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/Muhammad-Shahzaib-Anwar"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-foreground transition hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                aria-label="GitHub profile"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-shahzaib-anwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-foreground transition hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn profile"
              >
                in
              </a>
              <a
                href="mailto:shahzaibanwar1122@gmail.com"
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground transition hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                aria-label="Email Muhammad Shahzaib"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-white/5 dashboard-grid opacity-60" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 mesh-surface p-4 shadow-2xl sm:p-5">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Terminal className="h-4 w-4 text-primary" />
                  live.portfolio
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-[1.7rem] border border-primary/30 bg-black/25"
                >
                  <Image
                    src={profileImage}
                    alt="Muhammad Shahzaib"
                    fill
                    sizes="(min-width: 1024px) 280px, 80vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                    <p className="text-sm font-bold">Muhammad Shahzaib</p>
                    <p className="text-xs text-muted-foreground">Senior Frontend Developer</p>
                  </div>
                </motion.div>

                <div className="grid gap-3">
                  {activity.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + index * 0.08, duration: 0.45 }}
                      className="glass-panel panel-hover rounded-2xl p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-semibold">{item}</span>
                        <span className="text-xs text-primary">active</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${78 + index * 5}%` }}
                          transition={{ delay: 0.75 + index * 0.08, duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-emerald-400 to-accent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="mx-auto mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur transition hover:border-primary/50 hover:text-primary"
              aria-label="Scroll to about section"
            >
              Scroll to explore
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-primary"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
