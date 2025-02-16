import Hero from "@/components/Hero";
import { HeroCard, HeroCardData } from "@/components/screen/landing";
import { generatePersonSchema } from "@/components/structured-data";
import Script from "next/script";

export default function Home() {
  //kanishka
  return (
    <div className=" ">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />

      <Hero />

      <div className="container mx-auto px-6">
        {HeroCardData.map((data, index) => (
          <HeroCard
            title={data.title}
            description={data.description}
            image={data.image}
            link={data.link}
            reverse={data.reverse}
          />
        ))}
      </div>
    </div>
  );
}
