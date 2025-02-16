"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgZoom from "lightgallery/plugins/zoom";

export default function Media() {
  const images = [
    { src: "/news/n1.jpeg", link: "" },
    { src: "/news/n2.jpeg", link: "" },
    { src: "/news/n3.jpeg", link: "" },
    { src: "/news/n4.jpeg", link: "" },
    { src: "/news/n5.jpeg", link: "" },
    { src: "/news/n6.jpeg", link: "" },
    { src: "/news/n7.jpeg", link: "" },
    { src: "/news/n8.jpeg", link: "" },
    { src: "/news/n9.jpeg", link: "" },
    // { src: "/news/n1.jpg", width: 400, height: 300 },
    // { src: "/news/n1.jpg", width: 500, height: 700 },
    // { src: "/news/n1.jpg", width: 600, height: 500 },
    // { src: "/news/n1.jpg", width: 250, height: 350 },
  ];

  useEffect(() => {}, []);

  return (
    <div className=" pt-24 pb-16">
      <div className="container mx-auto px-6">
        <PageHeader
          title="Media Coverage"
          description="Featured in leading technology publications and news outlets worldwide."
        />
        <LightGallery
          plugins={[lgZoom]}
          mode="lg-fade"
          pager={false}
          thumbnail={true}
          galleryId={"nature"}
          autoplayFirstVideo={false}
          elementClassNames={"gallery"}
          mobileSettings={{
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false,
          }}
        >
          {images.map((image, index) => (
            <img
              className="img-responsive"
              key={index}
              src={image.src}
              alt="media"
            />
          ))}
        </LightGallery>
      </div>
    </div>
  );
}

interface Logo {
  name: string;
  imageUrl: string;
}

interface LogoSliderProps {
  logos: Logo[];
}

function LogoSlider({ logos }: LogoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <div className="w-full overflow-hidden bg-secondary/50 rounded-xl py-12">
      <div className="flex justify-center items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-16 w-48"
        >
          <Image
            src={logos[currentIndex].imageUrl}
            alt={logos[currentIndex].name}
            fill
            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-4" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface MediaCardProps {
  title: string;
  publication: string;
  date: string;
  imageUrl: string;
  link: string;
  excerpt: string;
}

function MediaCard({
  title,
  publication,
  date,
  imageUrl,
  link,
  excerpt,
}: MediaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={link} target="_blank">
        <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">
                {publication}
              </span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{excerpt}</p>
            <div className="flex items-center text-primary">
              <span className="text-sm">Read Article</span>
              <ExternalLink className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
