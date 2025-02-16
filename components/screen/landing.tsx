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
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 py-8`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
        {link !== "" && (
          <a
            href={link}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export const HeroCardData = [
  {
    title: "Coding Coding & Coding",
    description:
      "Learn how to build a blog from scratch with Next.js and Tailwind CSS",
    image: "/kanishka-working.jpg",
    link: "",
    reverse: true,
  },
  {
    title: "Build your own portfolio",
    description:
      "Learn how to build a portfolio from scratch with Next.js and Tailwind CSS",
    image: "/kanix.jpg",
    link: "",
    reverse: false,
  },
];
