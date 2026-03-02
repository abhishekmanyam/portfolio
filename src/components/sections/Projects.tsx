"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedText from "@/components/ui/AnimatedText";
import { useTilt } from "@/hooks/useTilt";
import { projects, type Project } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(8);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  const Wrapper = project.link && project.link !== "#" ? "a" : "div";
  const wrapperProps =
    project.link && project.link !== "#"
      ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
    >
      <Wrapper {...wrapperProps} className="block">
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="relative overflow-hidden border border-bg-surface/50 bg-bg-elevated transition-colors duration-500 group-hover:border-accent/30"
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              scale: tilt.scale,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Project image area */}
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-surface">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle overlay for readability */}
              <div className="absolute inset-0 bg-bg-void/20" />

              {/* Project number watermark */}
              <div className="absolute top-4 right-4 font-serif text-4xl font-bold text-text-primary/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Hover overlay with description */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg-void/95 via-bg-void/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm leading-relaxed text-text-primary/90">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Card info */}
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  {project.year}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold transition-colors duration-300 group-hover:text-accent md:text-2xl">
                {project.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary transition-colors duration-300 group-hover:border-accent/20 group-hover:text-accent/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.collaborators && project.collaborators.length > 0 && (
                <div className="mt-4 flex items-center gap-2 border-t border-bg-surface/50 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    Collab:
                  </span>
                  {project.collaborators.map((collab) => (
                    <a
                      key={collab.name}
                      href={collab.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-xs text-text-secondary transition-colors duration-300 hover:text-accent"
                    >
                      {collab.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Gold accent line at bottom */}
            <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
          </motion.div>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionLabel text="Selected Work" number="02" />

        <AnimatedText
          text="Projects that push boundaries"
          as="h2"
          className="font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
