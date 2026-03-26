import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

type SkillItem = {
  src: string;
  label: string;
  lightPlate?: boolean;
};

const SKILL_SECTIONS: { title: string; items: SkillItem[] }[] = [
  {
    title: "Development",
    items: [
      { src: "/skill_icon/typescript.svg", label: "TypeScript" },
      { src: "/skill_icon/react.svg", label: "React" },
      { src: "/skill_icon/nextjs.svg", label: "Next.js", lightPlate: true },
      { src: "/skill_icon/tailwindcss.svg", label: "Tailwind CSS" },
      { src: "/skill_icon/reactquery.svg", label: "TanStack Query" },
      { src: "/skill_icon/zustand.svg", label: "Zustand" },
      { src: "/skill_icon/vitejs.svg", label: "Vite" },
      { src: "/skill_icon/pnpm.svg", label: "pnpm" },
      { src: "/skill_icon/spring.svg", label: "Spring Boot" },
      { src: "/skill_icon/mysql.svg", label: "MySQL" },
      { src: "/skill_icon/postgresql.svg", label: "PostgreSQL" },
      { src: "/skill_icon/snowflake.svg", label: "Snowflake" },
      { src: "/skill_icon/swagger.svg", label: "Swagger" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { src: "/skill_icon/aws.svg", label: "AWS", lightPlate: true },
      { src: "/skill_icon/docker.svg", label: "Docker" },
      { src: "/skill_icon/nginx.svg", label: "Nginx", lightPlate: true },
    ],
  },
  {
    title: "Collaboration",
    items: [
      { src: "/skill_icon/figma.svg", label: "Figma" },
      { src: "/skill_icon/github.svg", label: "GitHub", lightPlate: true },
      { src: "/skill_icon/jira.svg", label: "Jira" },
      { src: "/skill_icon/notion.svg", label: "Notion" },
      { src: "/skill_icon/slack.svg", label: "Slack" },
    ],
  },
];

const Skills = () => {
  const sectionElsRef = useRef<(HTMLElement | null)[]>([]);
  const [revealedBySection, setRevealedBySection] = useState<boolean[]>(() =>
    SKILL_SECTIONS.map(() => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sectionElsRef.current.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          setRevealedBySection((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    sectionElsRef.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skillsWrapper">
      <h2 className="skillsHeading">SKILLS</h2>
      <div className="skillsPanelOuter skillsPanelOuter--chrome">
        <div className="skillsGrid">
          {SKILL_SECTIONS.map((section, sectionIndex) => (
            <section
              className={`skillsRowSection${revealedBySection[sectionIndex] ? " skillsRowSection--revealed" : ""}`}
              key={section.title}
              aria-label={section.title}
              ref={(el) => {
                sectionElsRef.current[sectionIndex] = el;
              }}
            >
              <h3 className="skillsRowTitle">{section.title}</h3>
              <div className="skillsRowInner">
                {section.items.map(({ src, label, lightPlate }, itemIndex) => (
                  <div
                    className="skillsCell"
                    key={src}
                    style={{ "--stagger": itemIndex } as React.CSSProperties}
                  >
                    <div className="skillsCellInner">
                      <div
                        className={
                          lightPlate
                            ? "skillsIconFrame skillsIconFrame--light"
                            : "skillsIconFrame"
                        }
                      >
                        <img className="skillsIcon" src={src} alt="" />
                      </div>
                      <span className="skillsLabel" title={label}>
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
