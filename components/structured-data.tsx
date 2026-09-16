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
      "https://www.neurixhq.com",
    ],
    jobTitle: ["Applied AI Engineer", "CTO & Cofounder"],
    worksFor: [
      {
        "@type": "Organization",
        name: "Mercor",
        url: "https://www.mercor.com",
      },
      {
        "@type": "Organization",
        name: "Neurix AI",
        url: "https://www.neurixhq.com",
        sameAs: "https://www.neurixhq.com",
      },
    ],
    description:
      "Applied AI Engineer at Mercor and CTO & Cofounder of Neurix AI (neurixhq.com). Working on RL, evals, agents, post-training, and full-stack generative AI systems.",
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
