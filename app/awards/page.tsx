import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  ExternalLink,
  Award,
  Globe,
  Building2,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";

const Awards = () => {
  const awards = [
    {
      title: "Tech Innovator of the Year",
      organization: {
        name: "Global Tech Awards Foundation",
        description:
          "The world's leading technology awards organization, recognizing excellence in innovation since 1995. Known for their rigorous selection process and prestigious jury panel of industry leaders.",
        website: "https://example.com",
        logo: <Award className="w-12 h-12" />,
      },
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800&h=600",
      description:
        "Awarded for developing groundbreaking AI-powered analytics solutions that revolutionized data processing efficiency by 300%. The project demonstrated exceptional innovation in machine learning applications, serving over 100,000 users globally and processing 1 billion+ data points daily.",
      criteria: [
        "Revolutionary technological advancement",
        "Global market impact",
        "Sustainable implementation",
      ],
    },
    {
      title: "40 Under 40 Business Leaders",
      organization: {
        name: "Business Excellence Magazine",
        description:
          "A premier business publication with over 2 million readers worldwide, known for identifying and showcasing emerging business leaders who are reshaping their industries.",
        website: "https://example.com",
        logo: <Building2 className="w-12 h-12" />,
      },
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=800&h=600",
      description:
        "Selected among 5,000+ nominees for demonstrating exceptional leadership and innovation in the technology sector. Led the successful launch of three enterprise software products, achieving $10M+ in revenue within the first year and creating 100+ new jobs.",
      criteria: [
        "Business impact and growth",
        "Innovation in leadership",
        "Community contribution",
      ],
    },
    {
      title: "Sustainable Tech Pioneer",
      organization: {
        name: "International Sustainability Council",
        description:
          "A globally recognized authority on sustainable technology practices, backed by 50+ environmental organizations and tech industry leaders.",
        website: "https://example.com",
        logo: <Globe className="w-12 h-12" />,
      },
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600",
      description:
        "Recognized for developing eco-friendly cloud computing solutions that reduced data center energy consumption by 45%. The initiative has been adopted by major tech companies, leading to an estimated reduction of 100,000 metric tons of CO2 emissions annually.",
      criteria: [
        "Environmental impact",
        "Technical innovation",
        "Industry adoption",
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <PageHeader
            title="Awards & Achievements"
            description="I got some trophies! I was lucky :)"
          />
          <div className="space-y-12 pt-10">
            {awards.map((award, index) => (
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-[250px] lg:h-auto">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{award.year}</span>
                    </div> */}
                  </div>

                  <div className="p-8">
                    <h2 className="text-3xl font-bold  mb-4">{award.title}</h2>

                    <div className="flex items-start space-x-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {award.organization.name}
                        </h3>
                        <a
                          href={award.organization.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center my-4"
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          <span>Know More</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {award.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold  mb-3">
                        Contribution
                      </h4>
                      <ul className="space-y-2">
                        {award.criteria.map((criterion, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-400"
                          >
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        About the Organization
                      </h4>
                      <p className="text-sm text-gray-600">
                        {award.organization.description}
                      </p>
                    </div> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
