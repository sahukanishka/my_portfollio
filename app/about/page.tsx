import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Kanishka | Tech Innovator & AI Enthusiast</title>
        <meta
          name="description"
          content="Discover the journey of Kanishka, a tech enthusiast, AI builder, and innovator who has scaled startups and developed cutting-edge AI solutions."
        />
        <meta
          name="keywords"
          content="Kanishka, AI, startups, developer, tech enthusiast, software engineer, Oyela, machine learning, automation"
        />
        <meta name="author" content="Kanishka" />
        <meta
          property="og:title"
          content="About Kanishka | Tech Innovator & AI Enthusiast"
        />
        <meta
          property="og:description"
          content="From robotics to AI voice agents, explore Kanishka’s journey as a tech entrepreneur and innovator."
        />
        <meta property="og:image" content="/about-kanishka.jpeg" />
        <meta property="og:url" content="https://kanishkasahu.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Kanishka | Tech Innovator & AI Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Read about Kanishka’s experience in AI, startups, and tech innovations."
        />
        <meta name="twitter:image" content="/about-kanishka.jpeg" />
        <link rel="canonical" href="https://kanishkasahu.com/about" />
      </Head>

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <PageHeader
            title="My Auto-biography"
            description="Hello World! I'm Kanishka"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">
                I’m a CSE graduate from Punjabi University (2021) and have been
                bringing my ideas to life for the past four years. From building
                robots and IoT-powered taxi-top billboards to creating apps and
                developing AI voice agents, my journey has been a wild mix of
                innovation and adventure. On the frontend, my life looks
                awesome, but on the backend, it's a chaotic mess just like any
                great tech project. But hey, I love the way I live!
              </p>
              <p className="text-lg text-muted-foreground">
                I played a key role in scaling{" "}
                <a href="https://oyela.in/">Oyela’s</a> platform from scratch to
                over 500k MAU, built multiple products from scratch, and led
                tech teams of 10+ members. I’ve also been recognized as the
                Youngest Child Scientist and won National Science Fair awards so
                yeah, I’ve been geeking out since childhood.
              </p>
              <p className="text-lg text-muted-foreground">
                Beyond tech, I’m always chasing thrill and adventure. I’ve done
                the world’s highest paragliding in Bir Billing at 2,400 meters
                above sea level and taken a leap of faith with the world’s
                second-highest bungee jump in Nepal at 228 meters.
              </p>
              <p className="text-lg text-muted-foreground">
                By day, I ideate, and by night, I’m a tech geek, foodie at
                heart, and traveller by nature. My passion spans across
                startups, AI, automation, and solving real world problems, and
                I’m always looking for the next big thing to build.<br></br> And
                no matter where I go, my love for dogs follows me because some
                things in life are just non-negotiable. 🐶💙
              </p>
              {/* <Button asChild className="mt-4">
              <Link href="/timeline">View My Journey</Link>
            </Button> */}
            </div>
            <div className="relative h-[650px] rounded-lg overflow-hidden">
              <Image
                src="/about-kanishka.jpeg"
                alt="Kanishka sahu - Tech Innovator"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
