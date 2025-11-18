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
    <section id="experience" className="py-12 sm:py-16 md:py-20  sm:px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            My professional journey in building exceptional web applications
          </p>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4 gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 flex flex-wrap items-center gap-2">
                        {exp.title}
                        {exp.current && (
                          <span className="text-xs px-2 py-1 gradient-accent text-accent-foreground rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-base sm:text-lg text-primary font-semibold flex items-center gap-2">
                        <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm text-muted-foreground">
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
