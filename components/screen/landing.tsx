interface IHeroCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
}
export const HeroCard = ({
  title,
  description,
  image,
  link,
  reverse = true,
}: IHeroCardProps) => {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 py-8 my-4`}
    >
      {/* Image Section */}
      <figure className="w-full md:w-1/2">
        <img
          src={image}
          alt={`${title} - related visual`}
          loading="lazy"
          width="600"
          height="400"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <figcaption className="sr-only">{title} Image</figcaption>
      </figure>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold leading-tight">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </a>
        )}
      </div>
    </section>
  );
};

export const HeroCardData = [
  {
    title: "Coding Coding & Coding",
    description:
      "Coding isn’t just my skill it’s my breathing. I love building, debugging, and solving complex problems with code. From AI-powered chatbots to scalable platforms, apps, websites. I enjoy creating products that makes life easier and me happy. Writing code feels like crafting magic, turning ideas into reality. Whether it’s a startup project or an automation tool, I dive deep into logic and innovation. Tech excites me, and coding keeps me unstoppable!",
    image: "/kanishka-working.jpg",
    link: "",
    reverse: true,
  },
  {
    title: "Thrill, Exploration, Adrenaline 🚀",
    description:
      "I love thrill activities and adventurous journeys, from traveling to paragliding and bungee jumping. Whether soaring at 2,400 meters in Bir Billing or leaping from 228 meters in Nepal, I chase excitement. A tech entrepreneur by day and an explorer by heart, I enjoy pushing limits in both innovation and adventure.",
    image: "/kanishka-sahu-paragliding.jpg",
    link: "",
    reverse: false,
  },
  {
    title: "No Phone, No Talk, Just Deep Meditation",
    description:
      "I completed an 11-day Vipassana meditation course at Dhamma Vipula, Mumbai, living without a smartphone, internet, or speaking (Mauna Vrat). Meditating 8 hours daily, waking up at 3:30 AM, and following a strict routine until 9 PM was a life-changing experience—testing my discipline, patience, and inner strength. 🧘‍♂️",
    image: "/kanishka-sahu-vipasana.jpeg",
    link: "",
    reverse: true,
  },
  {
    title: "Mountains My Second Home :)",
    description:
      "Traveling fuels my soul, and I’ve explored over 30+ incredible places across India and Nepal! From the serene lakes of Nainital to the breathtaking landscapes of Manali, Sissu, and Khajjiar, and from the spiritual vibes of Mathura and Vidhyachal to the bustling streets of Mumbai and Bangalore-each journey has been an unforgettable adventure. Next stop? The world! 🌍✈️",
    image: "/kanishka-manali.jpeg",
    link: "",
    reverse: false,
  },
];
