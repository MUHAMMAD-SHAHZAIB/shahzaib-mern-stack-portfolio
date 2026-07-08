import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
      icon: "GH",
      label: "GitHub",
      link: "https://github.com/Shahzaib.Github",
    },
    {
      icon: "in",
      label: "LinkedIn",
      link: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
          </div>

          <div className="glass-panel dashboard-grid relative overflow-hidden rounded-[1.9rem] p-6 sm:p-8 md:p-12">
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
                        className="panel-hover group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:border-primary/50 sm:p-6"
                      >
                        <div className="mb-3 rounded-2xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold mb-1">{info.label}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center sm:p-6">
                        <div className="mb-3 rounded-2xl bg-primary/10 p-3 text-primary">
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
                className="border-t border-white/10 pt-4 text-center sm:pt-6"
              >
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Let&apos;s build something amazing together
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.label}
                    >
                      <span className="text-sm font-bold sm:text-base">{social.icon}</span>
                    </a>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="shine-line gradient-primary h-12 rounded-xl px-6 text-sm font-bold text-primary-foreground shadow-glow sm:text-base"
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
