"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Rocket, Server } from "lucide-react";
import TimelineCard from "@/components/TimelineCard";

const Timeline = () => {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "TechVentures Inc.",
      logo: <Rocket className="w-6 h-6" />,
      startDate: "Jan 2023",
      endDate: "Present",
      description:
        "Leading a team of 50+ to build next-generation AI solutions. Secured Series A funding and launched successful AI platform with 100k+ users.",
    },
    {
      role: "CTO",
      company: "StartupBoost",
      logo: <Code className="w-6 h-6" />,
      startDate: "Mar 2020",
      endDate: "Dec 2022",
      description:
        "Scaled technical operations from 5 to 100 team members. Built microservices architecture and led distributed teams across 5 countries.",
    },
    {
      role: "Technical Lead",
      company: "InnovateLabs",
      logo: <Server className="w-6 h-6" />,
      startDate: "Jun 2018",
      endDate: "Feb 2020",
      description:
        "Led development of award-winning SaaS platform. Reduced infrastructure costs by 60% and implemented modern CI/CD pipeline.",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Briefcase className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Professional Journey</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A decade of experience building and scaling innovative tech
                solutions
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-600 to-indigo-200" />

              {/* Timeline items */}
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "pr-12" : "pl-12"
                      }`}
                    >
                      <TimelineCard
                        role={exp.role}
                        company={exp.company}
                        logo={exp.logo}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                        description={exp.description}
                        isLeft={index % 2 === 0}
                      />
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
