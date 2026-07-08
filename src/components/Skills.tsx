import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    level: 92,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Context API",
      "Material UI",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    level: 82,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "API Integration",
    ],
  },
  {
    title: "No Code Tools",
    icon: Zap,
    level: 88,
    skills: [
      "Claude AI",
      "Cursor.ai",
      "Lovable.ai",
      "Bolt.ai",
      "Locofy.ai",
      "Agentic AI",
      "MCP Server",
    ],
  },
  {
    title: "Tools & Design",
    icon: Palette,
    level: 86,
    skills: [
      "Git & GitHub",
      "Figma",
      "Postman",
      "Vercel",
      "Netlify",
      "i18n",
      "UI/UX Design",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Skill matrix
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              A focused toolkit for building modern, scalable, animated web
              applications.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass-panel panel-hover group relative overflow-hidden rounded-[1.7rem] p-5 sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black sm:text-2xl">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">Production ready</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-primary">
                    {category.level}%
                  </span>
                </div>

                <div className="relative z-10 mb-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.level}%` } : {}}
                    transition={{ delay: 0.2 + categoryIndex * 0.12, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-emerald-400 to-accent"
                  />
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="cursor-default rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
