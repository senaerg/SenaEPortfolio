import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
//languages
  { name: "C", level: 95, category: "languages" },
  { name: "C++", level: 85, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "C#", level: 95, category: "languages" },
  // Frontend
  
  { name: "STM32/ARM Cortex‑M", level: 95, category: "embedded & Microcontrollers" },

  { name: "Bare‑metal firmware", level: 90, category: "embedded & Microcontrollers" },

  { name: "RTOS concepts", level: 90, category: "embedded & Microcontrollers" },
  { name: "UART, SPI, I2C, CAN, timers, DMA, ADC, PWM", level: 80, category: "embedded & Microcontrollers" },
  { name: "Sensor integration and calibration", level: 80, category: "embedded & Microcontrollers" }

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
{ name: "Rest API", level: 75, category: "backend" },
{ name: "LLM API Integration", level: 75, category: "backend" },
{ name: "Rabbit MQ", level: 70, category: "backend" },
{ name: "Microservices", level: 85, category: "backend" },

  { name: "MongoDB", level: 70, category: "database" },
  { name: "PostgreSQL", level: 70, category: "database" },
  { name: "MySQL", level: 60, category: "database" },
  { name: "PL/SQL", level: 90, category: "database" },
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
{ name: "Kubernetes", level: 60, category: "tools" },
{ name: "AWS", level: 75, category: "tools" }
];

const categories = ["all", "embedded & Microcontrollers","embedded Linux & Kernel", "real-Time Systems", "debugging & Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
