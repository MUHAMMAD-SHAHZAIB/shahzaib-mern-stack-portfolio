import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
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
    <section id="skills" className="py-12 sm:py-16 md:py-20  sm:px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable web applications
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 relative z-10">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary border border-border rounded-lg text-xs sm:text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
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
