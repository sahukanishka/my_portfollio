"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    year: "20214-2025",
    title: "Founder & CTO",
    company: "Sixeye Technologies",
    description:
      "Building the next communication layer for organizations. Leading the development of the product from scratch and writing the code.",
    badges: [
      "AI",
      "Leadership",
      "Innovation",
      "Product Development",
      "Founding Engineer",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGAr1cK2rSYiw/company-logo_100_100/company-logo_100_100/0/1738573362649/sixeye_in_logo?e=1747872000&v=beta&t=_SOq4QOClSpiyP6_DgjHdRI0axxQ8GasuvnYBwWleQ4",
  },
  {
    year: "2021-2024",
    title: "Chief Engineering officer",
    company: "Oyela Technologies",
    description:
      "Joined as a founding engineer and was promoted to Chief Engineering officer. Led the development of five key products, including the Oyela Buy-Sell commerce platform, the main Oyela app for buyers, the Frontway app for sellers, an internal admin panel, and the FastBuy Quick Checkout product. Built and scaled the tech team from scratch, ensuring a strong engineering foundation for rapid growth.Scaled the platform from 0 to over 500k+ Monthly Active Users (MAU). - Optimized backend infrastructure, increasing API call volume from 10k to over 250k daily. Drove technical execution and product development, contributing to the tech and business side of the company. I have worked in this startup as a founder did all the stuff from scratch and made it to 1. Learned a lot beyond technical skills, including hiring, delivering quickly, understanding customer problems, and building great products.",
    badges: [
      "AI",
      "Leadership",
      "Innovation",
      "Product Development",
      "Founding Engineer",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGt0wmd7OrjLg/company-logo_200_200/company-logo_200_200/0/1720263140887/oyela_in_logo?e=1747872000&v=beta&t=In_XRPW1znJlQJIJ-6bNe2sauKLwnlCZYRa6bHrO9Ck",
  },

  {
    year: "2019-2021",
    title: "Founder & CTO",
    company: "Lys Labs Pvt ltd (Startup)",
    description:
      "Founded a startup in my third year of college. At that time, Uber and Ola were growing rapidly in India, and I thought, why not build something on top of it? My co-founder friend ( Ujjwal ) and I came up with the idea of Glomo (Glowing + Moving) taxi-top LED boards mounted on car roofs. These boards were connected to the driver’s mobile via an app. The app was designed to take the driver’s live location and send it to a server, where we processed the data to display relevant ads to people outside the cab. The idea was simple - take a fee from advertisers and slit to 50-50 with a cab driver, extra income stream for drivers and more advertising opportunities for advertisers. I almost completed building the product and was working with early customers when the first wave of COVID-19 hit, leading to lockdowns. After waiting for a month, the second wave struck even harder, preventing us from launching. Ultimately, we made the difficult decision to shut down due to the unexpected lockdowns and ongoing COVID-19 disruptions.",
    badges: ["Startup", "AI", "Analytics", "IOT", "Engineering"],
    logo: "https://media.licdn.com/dms/image/v2/C510BAQFaKskwf3ySwA/company-logo_100_100/company-logo_100_100/0/1630617550251/lys_labs_pvt_ltd_logo?e=1747872000&v=beta&t=TmT7_lrIzvx-P-_HPXfZbnv4ErjWtNobkikey49QhJA",
  },
  {
    year: "2019-2020",
    title: "President",
    company: "Entrepreneurship and Skill Development Cell",
    description:
      "The Entrepreneurship and Skill Development Cell is responsible for promoting the culture of entrepreneurship and innovation at the university. Due to my strong technical and leadership skills, as well as my previous contributions as VP of Tech, the senior management elected me as President. As President, I was responsible for helping students with their startups and providing them with resources such as labs, grants, and mentorship. I was also responsible for organizing talks and hackathons to promote entrepreneurship within the university. This was my first formal leadership position, where I worked on my leadership skills and managed a large organization consisting of a team of 8 leaders and 40+ members, all working toward a single mission.",
    badges: [
      "Ecell",
      "Leadership",
      "Development",
      "Innovation",
      "Entrepreneurship",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFgbmzWBLrkHg/company-logo_200_200/company-logo_200_200/0/1630665220862?e=1747872000&v=beta&t=TV2iJ1EeNSaGR68edT67Z1BDsccLZxxzFvuJ0XWK4KU",
  },
  {
    year: "2018-2019",
    title: "VP of Tech",
    company: "Entrepreneurship and Skill Development Cell",
    description:
      "The Entrepreneurship and Skill Development Cell is the sole organization driving the entrepreneurial culture at our university. As the Vice President of Technical, I take charge of maintaining the website and empowering students to ideate and transform their projects into real world applications.",
    badges: [
      "Ecell",
      "Leadership",
      "Development",
      "Innovation",
      "Entrepreneurship",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFgbmzWBLrkHg/company-logo_200_200/company-logo_200_200/0/1630665220862?e=1747872000&v=beta&t=TV2iJ1EeNSaGR68edT67Z1BDsccLZxxzFvuJ0XWK4KU",
  },
];

export default function Timeline() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="My Journey"
          description="My epic saga of tech wizardry, where I tamed wild code, built cool stuff, and hit major geek milestones"
        />

        <div className="mt-16 space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-6">
                    <div className="hidden md:block">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        {/* Replace with your actual company logo */}
                        <img src={event.logo} />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-1">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {event.company}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.badges.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
