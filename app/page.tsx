import { generatePersonSchema } from "@/components/structured-data";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "Applied AI Engineer (MTS)",
    company: "Mercor",
    url: "https://www.mercor.com",
    logo: "/logos/mercor.png",
    description:
      "Working on reinforcement learning environments, model evaluations, AI agents, post-training pipelines, fine-tuning, and synthetic data generation for frontier AI systems.",
    tags: ["RL", "Evals", "Agents", "Post-Training", "Fine-Tuning", "Synthetic Data"],
  },
  {
    period: "Feb 2025 — Jul 2025",
    role: "CTO & Cofounder",
    company: "Neurix AI",
    url: "https://www.neurixhq.com",
    logo: "/logos/neurix.png",
    description:
      "Built a full-stack generative AI company delivering custom agents, copilots, and internal automation systems for startups and businesses. Led engineering from infrastructure to deployment.",
    tags: ["Generative AI", "Agents", "Automation", "Leadership"],
  },
  {
    period: "Aug 2024 — Jan 2025",
    role: "Co-Founder",
    company: "Sixeye — AI Voice Agent",
    url: "https://www.sixeye.in",
    logo: "/logos/sixeye.png",
    description:
      "Built the next communication layer for organizations. Led product development end-to-end, from architecture to shipping code, and engaged with customers to identify best use cases.",
    tags: ["AI Voice", "Product Engineering", "Full Stack"],
  },
  {
    period: "Mar 2023 — Aug 2024",
    role: "Chief Engineering Officer",
    company: "Oyela",
    url: "https://www.oyela.in",
    logo: "/logos/oyela.png",
    description:
      "Promoted to Chief Engineering Officer to lead Oyela's scaling phase. Scaled the platform from 100k to 500k+ MAU and grew API volume from 10k to 250k+ daily calls. Expanded the engineering team from 2 engineers to 12+, owning hiring, architecture decisions, and technical execution across all products.",
    tags: ["Scaling", "Leadership", "Architecture", "Team Growth"],
  },
  {
    period: "Jun 2021 — Mar 2023",
    role: "Founding Member",
    company: "Oyela",
    url: "https://www.oyela.in",
    logo: "/logos/oyela.png",
    description:
      "Joined as the first engineer and built the entire tech stack from scratch — the Oyela buyer-side commerce platform, Frontway seller app, internal admin panel, and FastBuy quick checkout. Owned everything from product UX to backend infrastructure. Set up CI/CD pipelines with GitHub Actions and Docker, integrated payment gateways (Juspay, Razorpay), optimized page load from 12s to under 3s, and built the foundation that the platform scaled on.",
    tags: ["Founding Engineer", "0-to-1", "Full Stack", "Product", "AWS"],
  },
  {
    period: "Nov 2019 — Apr 2021",
    role: "Founder & Director",
    company: "Lys Labs Pvt Ltd",
    logo: "/logos/lyslabs.png",
    description:
      "Designed and developed IoT-powered taxi-top ad displays using real-time cab data, AI, and analytics to target specific audiences. Built the product to early customer stage before COVID-19 forced shutdown.",
    tags: ["IoT", "Startup", "Hardware", "Advertising"],
  },
  {
    period: "Dec 2019 — Dec 2020",
    role: "President",
    company: "Entrepreneurship & Skill Development Cell",
    logo: "/logos/ecell.png",
    description:
      "Led the university's entrepreneurship organization. Managed 8 team leads and 40+ members. Organized talks, hackathons, and provided startup mentorship, labs, and grants to student founders.",
    tags: ["Leadership", "Entrepreneurship", "Mentorship"],
  },
  {
    period: "Dec 2018 — Nov 2019",
    role: "VP of Technology",
    company: "Entrepreneurship & Skill Development Cell",
    logo: "/logos/ecell.png",
    description:
      "Maintained organization website and empowered students to transform their projects into real-world applications.",
    tags: ["Development", "Community"],
  },
];

const techStack = {
  "Languages": "TypeScript, Python, JavaScript, C++",
  "AI & ML": "RL Environments, Post-Training, Evals, Fine-Tuning, Synthetic Data Generation, TensorFlow, PyTorch, OpenAI API, Hugging Face",
  "Frontend": "React, Next.js, Tailwind CSS, Bootstrap",
  "Backend": "Node.js, Django, PostgreSQL, MongoDB, Redis",
  "Cloud & DevOps": "AWS, Docker, Kubernetes, GitHub Actions, Azure",
  "Mobile": "React Native, Flutter, iOS (Swift), Android (Kotlin)",
  "Testing": "Jest, Cypress, Playwright, Vitest",
  "Tools": "Git, VS Code, Figma, Postman",
};

const awards = [
  {
    year: "2025",
    title: "Research Paper — The AI Productivity Index (APEX)",
    org: "arXiv",
    detail:
      "Co-authored research on APEX-v1-extended, a benchmark evaluating whether frontier AI models can perform economically valuable professional tasks across investment banking, consulting, law, and medicine.",
    link: "https://arxiv.org/abs/2509.25721",
  },
  {
    year: "2023",
    title: "Raised $2M in Seed Funding",
    org: "Prime Venture Partners",
    detail:
      "Led the technical execution that helped Oyela Technologies secure $2 million in seed funding to expand the team and empower 2 million small businesses in India.",
    link: "https://www.instagram.com/karo_startup_/p/CyvltxSSxv5/#",
  },
  {
    year: "2021",
    title: "Award of Excellence",
    org: "Punjabi University",
    detail:
      "Highest honor given by the university for exceptional performance in academics, robotics, and AI research.",
    link: "http://www.punjabiuniversity.ac.in/",
  },
  {
    year: "2018",
    title: "Youngest Child Scientist Award",
    org: "Government of Uttar Pradesh",
    detail:
      "Awarded by the Chief Minister for contribution and research in plated bomb detection systems. Youngest recipient of this honor.",
    link: "https://www.inextlive.com/uttar-pradesh/allahabad/pbd-robot-model-199358",
  },
  {
    year: "2016",
    title: "Northern India Science Fair",
    org: "Government of India",
    detail:
      "Represented Uttar Pradesh at the National Science Centre, New Delhi. Won first prize for the plated bomb detection system project.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Kanishka Sahu
            </h1>
            <p className="text-lg text-muted-foreground mb-3">
              Applied AI Engineer at{" "}
              <Link
                href="https://www.mercor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground link-underline"
              >
                Mercor
              </Link>
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              I work on reinforcement learning, model evaluations, AI agents,
              post-training, fine-tuning, and synthetic data generation. Previously
              CTO & Cofounder at Neurix AI. CSE graduate from Punjabi University
              with experience scaling products from zero to 500k+ users.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="/contact"
                className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
              <Link
                href="https://github.com/sahukanishka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/kanixdp.jpg"
              alt="Kanishka Sahu"
              width={140}
              height={140}
              className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover w-[120px] h-[120px] md:w-[140px] md:h-[140px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I've been building things since I was a kid — from robots and
              IoT-powered taxi-top billboards to AI voice agents and commerce
              platforms. I graduated in Computer Science from Punjabi University
              in 2021 and have been shipping products ever since.
            </p>
            <p>
              Currently I work on RL environments, post-training pipelines,
              evals, and synthetic data generation at Mercor. Before that, I
              co-founded Neurix AI, scaled Oyela from 0 to 500k+ MAU, and was
              recognized as the Youngest Child Scientist.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beyond engineering, I chase adrenaline. I've done the world's
              highest paragliding in Bir Billing at 2,400m and the world's
              second-highest bungee jump in Nepal at 228m. I completed an 11-day
              Vipassana silent meditation retreat — no phone, no talking, 8 hours
              of daily meditation.
            </p>
            <p>
              I've explored 30+ places across India and Nepal. By day I build
              products, by night I'm a tech geek who loves food, travel, dogs,
              and solving problems that matter.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Experience
        </h2>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-6 border-b border-border last:border-0"
            >
              <p className="font-mono text-xs text-muted-foreground pt-1 shrink-0">
                {exp.period}
              </p>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={28}
                    height={28}
                    className="rounded-md bg-secondary object-contain p-0.5"
                  />
                  <h3 className="font-medium">
                    {exp.role}
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      &middot;{" "}
                    </span>
                    {exp.url ? (
                      <Link
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">{exp.company}</span>
                    )}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section id="stack" className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Tech Stack
        </h2>
        <div className="grid gap-0">
          {Object.entries(techStack).map(([category, items]) => (
            <div
              key={category}
              className="grid md:grid-cols-[180px_1fr] gap-1 md:gap-8 py-3 border-b border-border last:border-0"
            >
              <p className="text-sm font-medium">{category}</p>
              <p className="text-sm text-muted-foreground">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Awards ─── */}
      <section id="awards" className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Awards & Recognition
        </h2>
        <div className="space-y-0">
          {awards.map((award, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-6 border-b border-border last:border-0"
            >
              <p className="font-mono text-xs text-muted-foreground pt-1">
                {award.year}
              </p>
              <div>
                <h3 className="font-medium mb-1">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {award.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.detail}
                </p>
                {"link" in award && award.link && (
                  <Link
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm mt-2 text-foreground hover:opacity-70 transition-opacity"
                  >
                    Know more
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Beyond Work ─── */}
      <section className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Beyond Work
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-sm font-medium mb-2">Adventure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              World's highest paragliding in Bir Billing at 2,400m above sea
              level. World's second-highest bungee jump in Nepal at 228m.
              Explored 30+ places across India and Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Meditation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Completed 11-day Vipassana meditation course at Dhamma Vipula,
              Mumbai. No phone, no speaking, 8 hours of daily meditation.
              Wake up at 3:30 AM, discipline until 9 PM.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Building</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I code because I love it. From AI-powered chatbots to scalable
              commerce platforms to IoT hardware — I enjoy turning ideas into
              products that work and ship.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Travel</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mountains are my second home. From Manali and Sissu to Nainital
              and Khajjiar — from spiritual Mathura to bustling Mumbai and
              Bangalore. Always looking for the next destination.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section id="gallery" className="section-spacing section-divider">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { src: "/kanishka-sahu-paragliding.jpg", alt: "Paragliding in Bir Billing at 2,400m" },
            { src: "/kanishka-sahu-vipasana.jpeg", alt: "Vipassana meditation retreat" },
            { src: "/kanishka-manali.jpeg", alt: "Mountains — Manali" },
            { src: "/kanishka-working.jpg", alt: "At work" },
{ src: "/about-kanishka.jpeg", alt: "Kanishka Sahu" },
            { src: "/cm-yogi-award-kanishka-sahu.jpeg", alt: "Youngest Child Scientist Award" },
            { src: "/kanishka-oyela-funding.png", alt: "Oyela $2M funding" },
            { src: "/kanishka-sahu-award-punjabi-university.png", alt: "Award of Excellence — Punjabi University" },
          ].map((photo, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="section-spacing section-divider pb-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg">
          Have a question, want to collaborate, or just want to say hi? I'd love
          to hear from you.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            Send a message
          </Link>
          <Link
            href="https://www.linkedin.com/in/sahukanishka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors inline-flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
