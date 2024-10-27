export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Doe",
    url: "https://yourdomain.com",
    sameAs: [
      "https://github.com/johndoe",
      "https://linkedin.com/in/johndoe",
      "https://twitter.com/johndoe",
    ],
    jobTitle: "Tech Innovator & AI Expert",
    worksFor: {
      "@type": "Organization",
      name: "Tech Innovators Inc.",
    },
    description:
      "Tech entrepreneur and AI specialist with expertise in machine learning and innovative solutions.",
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
      name: "John Doe",
    },
  };
}
