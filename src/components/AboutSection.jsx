import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              10+ years of experience building performance‑critical systems that run close to the metal. 
              </h3>

            <p className="text-muted-foreground">
            I specialize in:
              <ul>
<li>Bare‑metal and RTOS‑style firmware on STM32 and similar MCUs, with FreeRTOS‑style patterns and event‑driven architectures.  </li>
<li> Low‑level peripheral drivers (UART, SPI, I2C, CAN, timers, DMA, ADC) and real‑time sensor pipelines.  </li>
<li>Embedded Linux, kernel modules, device drivers, BSPs, and Yocto/Poky‑based builds.  </li>
<li>Debugging and failure analysis with JTAG, GDB, oscilloscopes, and logic analyzers. </li> 
<li>Edge‑AI and ML on microcontrollers, including quantization‑aware models and TinyML‑style inference infrastructure.</li>
</ul>
            </p>

            <p className="text-muted-foreground">
             I focus on writing deterministic, resource‑aware code with strong separation between hardware abstractions, protocols, and business logic, and I enjoy mentoring engineers in embedded best practices and structured debugging
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems & Embedded Depth</h4>
                  <p className="text-muted-foreground">
                    Architecting performance‑critical embedded and backend systems, from bare‑metal firmware to Linux‑based edge services.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real‑Time & Safety‑Aware Design</h4>
                  <p className="text-muted-foreground">
                  Designing deterministic, low‑latency software for constrained environments, including RTOS patterns, interrupt‑safe code, and failure‑mode analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Mentorship</h4>
                  <p className="text-muted-foreground">
                   Guiding engineers in embedded best practices, debugging workflows (JTAG/GDB, oscilloscopes, fault trees), and clean abstractions for long‑lifecycle products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
