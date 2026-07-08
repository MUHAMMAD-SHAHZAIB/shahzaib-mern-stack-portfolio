import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "3", label: "Languages Spoken" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-10 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                About me
              </p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                Product-minded developer with a{" "}
                <span className="text-gradient">frontend edge.</span>
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I build interfaces that feel fast, clear, and alive, with the
              engineering discipline needed to keep them scalable.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="glass-panel dashboard-grid rounded-[1.75rem] p-6 sm:p-8 md:p-10">
              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-base leading-8 text-foreground sm:text-lg"
                >
                  A highly skilled and motivated{" "}
                  <span className="font-semibold text-primary">Full Stack Developer</span>{" "}
                  with over 2 years of industrial experience in MERN stack
                  development. Proven expertise in scalable web applications,
                  API integrations, authentication systems, and responsive user
                  interfaces.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  Currently working as a{" "}
                  <span className="font-semibold text-accent">Senior Frontend Developer</span>{" "}
                  at Tajirpay, where I&apos;m building{" "}
                  <span className="font-semibold text-accent">HICar</span>, a
                  rental SaaS product for the Australian market.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base leading-8 text-muted-foreground sm:text-lg"
                >
                  From requirement gathering to deployment, I focus on
                  high-performance solutions that balance beautiful design with
                  robust functionality.
                </motion.p>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.5 }}
                  className="glass-panel panel-hover rounded-3xl p-6"
                >
                  <div className="text-4xl font-black text-gradient">{item.value}</div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
              <div className="rounded-3xl border border-accent/25 bg-accent/10 p-6 text-sm leading-7 text-accent">
                Currently crafting SaaS-grade user experiences with React,
                Next.js, Tailwind CSS, Node.js, and MongoDB.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
