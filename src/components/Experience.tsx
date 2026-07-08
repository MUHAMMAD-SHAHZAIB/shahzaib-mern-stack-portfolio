import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tajirpay",
    location: "Remote",
    period: "July 2025 - Present",
    description: [
      "Building HICar - a rental SaaS product for the Australian market",
      "Leading frontend development with modern React.js architecture",
      "Implementing scalable and maintainable code practices",
      "Collaborating with cross-functional teams on product features",
    ],
    current: true,
  },
  {
    title: "Full Stack Developer & Designer",
    company: "Aman Integrated Solutions",
    location: "Islamabad, Pakistan",
    period: "Aug 2023 - June 2025",
    description: [
      "Developed WorkForcePro - complete employee attendance and management system with check-in/check-out, working hours calculation, and organization-wide tracking",
      "Built authentication and authorization flows using JWT",
      "Designed backend APIs and integrated with MongoDB and React.js",
      "Created SOM (Smart Operations Management) system for task inspection workflows with feedback management and admin task assignment",
      "Contributed to Tawajud App - an AI-based mobile inspection app, designed complete UI/UX using Figma",
    ],
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "Qupeer Technology",
    location: "Remote",
    period: "Jun 2023 - May 2023",
    description: [
      "Worked on HVG Driver - a cargo shipment platform",
      "Implemented multilingual functionality using React i18next library",
      "Built user interfaces with Material UI ensuring responsive design",
      "Independently managed frontend components for cargo tracking modules",
    ],
    current: false,
  },
  {
    title: "Web Developer Intern",
    company: "Orcalo",
    location: "Rawalpindi, Pakistan",
    period: "June 2022 - Sept 2022",
    description: [
      "Contributed to Care Fooster App focused on healthcare service listings",
      "Designed responsive UI components using React.js and JavaScript",
      "Improved user experience with clean layouts and reusable components",
    ],
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative px-4 py-16 sm:px-6 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Career path
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              My professional journey in building exceptional web applications.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl space-y-5">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-primary via-white/10 to-accent md:block" />
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-panel panel-hover group relative overflow-hidden rounded-[1.7rem] p-5 sm:p-6 md:ml-10 md:p-8"
              >
                <span className="absolute -left-[2.05rem] top-8 hidden h-4 w-4 rounded-full border-2 border-background bg-primary shadow-glow md:block" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 flex flex-wrap items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-base sm:text-lg text-primary font-semibold flex items-center gap-2">
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-muted-foreground sm:text-sm">
                      <p className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        {exp.period}
                      </p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 sm:gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
