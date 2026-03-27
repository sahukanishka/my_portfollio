export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kanishka Sahu",
    url: "https://kanishkasahu.com",
    sameAs: [
      "https://github.com/sahukanishka",
      "https://www.linkedin.com/in/sahukanishka/",
      "https://x.com/KanishkaSahu",
    ],
    jobTitle: "Applied AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Mercor",
      url: "https://www.mercor.com",
    },
    description:
      "Applied AI Engineer at Mercor working on RL, evals, agents, and post-training. Previously CTO & Cofounder at Neurix AI.",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Punjabi University",
    },
  };
}

export function generateProjectSchema(project: any) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "Technology",
    operatingSystem: "Web",
    url: project.liveUrl,
    author: {
      "@type": "Person",
      name: "Kanishka Sahu",
    },
  };
}
