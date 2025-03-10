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
import Image from "next/image";

const Awards = () => {
  const awards = [
    {
      title: "Raised $ 2 Million in Seed Funding : 2023",
      organization: {
        name: "Prime Venture Partners",
        website: "https://www.instagram.com/karo_startup_/p/CyvltxSSxv5/#",
        logo: <Award className="w-12 h-12" />,
      },
      year: 2024,
      image: "/kanishka-oyela-funding.png",
      description:
        "At Oyela Technologies, We raised $2 million in seed funding lead by Prime Venture Partner and a group of investors. The funding will be used to expand our team and empower 2 million small businesses in India.",
      contribution: [],
    },
    {
      title: "Award of Excellence : 2021",
      organization: {
        name: "Vice Chancellor Punjabi University",
        website: "http://www.punjabiuniversity.ac.in/",
        logo: <Award className="w-12 h-12" />,
      },
      year: 2024,
      image: "/kanishka-sahu-award-punjabi-university.png",
      description:
        "Award of Excellence is the highest honor given by the Punjabi University to the students who have shown exceptional performance in academics and research. I was awarded for my contribution to the field of robotics and AI.",
      contribution: [],
    },
    {
      title: "Youngest Child Scientist Award : 2018",
      organization: {
        name: "Government of Uttar Pradesh",
        website:
          "https://www.inextlive.com/uttar-pradesh/allahabad/pbd-robot-model-199358",
        logo: <Award className="w-12 h-12" />,
      },
      year: 2024,
      image: "/cm-yogi-award-kanishka-sahu.jpeg",
      description:
        "I got awarded by Honorable Chief Minister of Uttar Pradesh for my contribution and research in the plated bomb detection system. I was the youngest scientist to receive this award. It was a proud moment for me and my family. ",
      contribution: [],
    },
    {
      title: "Northern India Science Fair : 2016",
      organization: {
        name: "Government of India",
        website: "",
        logo: <Award className="w-12 h-12" />,
      },
      year: 2024,
      image: "/kanishka-sahu-award-northern-india.png",
      description:
        "Northern India Science Fair is a prestigious event organized by the Government of India at National Science center New Delhi. I represented my state Uttar Pradesh and won the first prize for my project on the plated bomb detection system. ",
      contribution: [],
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="object-cover h-full w-full"
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
                        {award.organization.website ? (
                          <a
                            href={award.organization.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center my-4"
                          >
                            <Globe className="w-4 h-4 mr-1" />
                            <span>Know More</span>
                          </a>
                        ) : (
                          <div className="py-6"></div>
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {award.description}
                    </p>

                    {/* <div className="mb-6">
                      <h4 className="text-lg font-semibold  mb-3">
                        Contribution
                      </h4>
                      <ul className="space-y-2">
                        {award.contribution.map((criterion, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-400"
                          >
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div> */}

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
