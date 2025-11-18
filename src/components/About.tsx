import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20  sm:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 gradient-primary rounded-full blur-3xl opacity-10" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-foreground leading-relaxed relative z-10"
            >
              A highly skilled and motivated <span className="text-primary font-semibold">Full Stack Developer</span> with 
              over 2 years of industrial experience in MERN stack development. Proven expertise in building scalable 
              web applications, API integrations, authentication systems, and crafting responsive user interfaces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed relative z-10"
            >
              Currently working as a <span className="text-accent font-semibold">Senior Frontend Developer</span> at 
              Tajirpay, where I'm building <span className="text-accent font-semibold">HICar</span> - a rental SaaS 
              product for the Australian market. I specialize in React.js, Node.js, Express.js, MongoDB, and modern 
              UI/UX design practices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed relative z-10"
            >
              I'm passionate about creating exceptional digital experiences that combine beautiful design with 
              robust functionality. From requirement gathering to deployment, I focus on delivering high-performance 
              solutions that exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 relative z-10"
            >
              <div className="text-center p-3 sm:p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-secondary/50 rounded-xl border border-border col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">3</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Languages Spoken</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
