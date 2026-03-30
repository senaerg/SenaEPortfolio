import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "STM32 CIFAR-10 Image Classification",
    description: "A complete end-to-end pipeline that trains a CNN on CIFAR-10 dataset and deploys it to STM32 B-L475E-IOT01A2 using STM32CubeAI for real-time image classification.",
    image: "/projects/CNN.jpg",
    tags: ["CIFAR-10", "CNN", "STM32CubeAI"],
    demoUrl: "",
    githubUrl: "https://github.com/senaerg/EmbeddedMachineLearning",
  },
  {
    id: 2,
    title: "Video Streaming Application",
    description:
      "High performance architecture and responsive design that works well on various devices.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "MongoDB", "Next.js"],
    demoUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHAS-avu_2Bmw/feedshare-shrink_2048_1536/B4DZlT9s8hGgAw-/0/1758050310247?e=1767830400&v=beta&t=xMh91Cx9fC0VbSaw5U4cgQbOR2hAdzQ01SPso9PEgmk",
    githubUrl: "https://github.com/senaerg/VideoStreamer",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe","Redis"],
    demoUrl: "https://media.licdn.com/dms/image/v2/D4D22AQEbMa0dBvjriw/feedshare-shrink_2048_1536/B4DZosWSewGsAg-/0/1761680636865?e=1767830400&v=beta&t=UVXMPubYQRt3DrefR8q-oWy9z9XlJPuBnxak7aWPtQs",
    githubUrl: "https://github.com/senaerg/ecommerce",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/senaerg"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
