import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Creative Web Developer",
    description: "Turning ideas into beautiful, functional websites",
  },
  {
    icon: Globe,
    title: "WordPress Specialist",
    description: "Expert in custom themes and responsive designs",
  },
  {
    icon: GraduationCap,
    title: "Student (BCA)",
    description: "Continuously learning and growing in tech",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-card">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">A</span>
                    </div>
                    <p className="text-muted-foreground">Arjun's Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Passionate About Creating{" "}
              <span className="gradient-text">Digital Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hi there! I'm Arjun, a passionate web developer with a love for clean UI design 
              and creative problem-solving. I believe that great websites are not just about 
              code—they're about crafting experiences that connect with people.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Currently pursuing my BCA, I spend my time building impactful websites, 
              learning new technologies, and helping businesses establish their online presence. 
              Every project is an opportunity to create something meaningful.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 hover:bg-card transition-colors duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
