import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahzaibktk0312@gmail.com",
      link: "mailto:shahzaibktk0312@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 312 8032478",
      link: "tel:+923128032478",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Shahzaib.Github",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20  sm:px-6 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 gradient-primary rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 gradient-accent rounded-full blur-3xl opacity-10" />
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="flex flex-col items-center text-center p-4 sm:p-6 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:bg-secondary group"
                      >
                        <div className="p-2.5 sm:p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2 sm:mb-3">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold mb-1">{info.label}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-secondary/50 border border-border rounded-xl">
                        <div className="p-2.5 sm:p-3 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold mb-1">{info.label}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center pt-4 sm:pt-6 border-t border-border"
              >
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Let's build something amazing together
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow-cyan text-sm sm:text-base"
                  asChild
                >
                  <a href="mailto:shahzaibanwar1122@gmail.com">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send Me an Email
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
