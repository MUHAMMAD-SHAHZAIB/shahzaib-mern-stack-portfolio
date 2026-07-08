import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "HICar - Rental SaaS Platform",
    description:
      "A comprehensive rental SaaS product for the Australian market. Building scalable features for vehicle rental management, booking systems, and user management with modern React architecture.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    current: true,
  },
  {
    title: "WorkForcePro",
    description:
      "Complete employee attendance and management system featuring check-in/check-out, working hours calculation, organization-wide tracking, and comprehensive analytics dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "#",
  },
  {
    title: "SOM - Smart Operations Management",
    description:
      "Task inspection workflow system with inspection modules, feedback management, admin task assignment, and real-time status tracking using Redux Toolkit.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Tawajud App",
    description:
      "AI-based mobile inspection application. Designed complete UI/UX using Figma, tailored for mobile responsiveness and AI-powered features for intelligent inspections.",
    tech: ["Figma", "React.js", "AI Integration", "Mobile Design"],
    link: "#",
  },
  {
    title: "Doctor Appointment System",
    description:
      "Full-stack web application with modules for Admin, Doctor, and Patient. Features dynamic doctor scheduling, user slot booking, and appointment management.",
    tech: ["React.js", "Node.js", "MongoDB", "Lovable.AI", "Claude AI"],
    link: "#",
  },
  {
    title: "OTP Authentication System",
    description:
      "Secure MERN stack OTP verification system with email and call-based OTP using Twilio API for real-time verification through email and voice calls.",
    tech: ["React.js", "Node.js", "Express.js", "Twilio API", "MongoDB"],
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Selected work
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              A showcase of SaaS workflows, admin systems, inspection tools,
              and authentication products.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`glass-panel panel-hover group relative overflow-hidden rounded-[1.7rem] p-5 sm:p-6 ${
                  project.current ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-accent opacity-70" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-primary">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-black transition-colors group-hover:text-primary sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    {project.current && (
                      <span className="flex-shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mb-5 flex-grow text-sm leading-7 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xl border border-primary/20 bg-primary/10 px-2 py-1 text-xs text-primary sm:px-3 sm:py-1.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-10 w-full rounded-xl border-white/15 bg-white/[0.03] text-xs hover:border-primary/50 hover:bg-primary/10 sm:text-sm"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          View Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
