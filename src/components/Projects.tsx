import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
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
    <section id="projects" className="py-12 sm:py-16 md:py-20  sm:px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            A showcase of my recent work and contributions
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.current && (
                      <span className="text-xs px-2 py-1 gradient-accent text-accent-foreground rounded-full font-medium flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/50 hover:bg-primary/10 text-xs sm:text-sm"
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
