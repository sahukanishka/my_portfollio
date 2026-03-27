import {
  Github,
  Instagram,
  Layers,
  Linkedin,
  Rss,
  Twitter,
  Youtube,
} from "lucide-react";

export const navigation = {
  main: [
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Stack", path: "/#stack" },
    { name: "Awards", path: "/#awards" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      path: "https://github.com/sahukanishka",
      icon: Github,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/sahukanishka/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      path: "https://x.com/KanishkaSahu",
      icon: Twitter,
    },
    {
      name: "Instagram",
      path: "https://instagram.com/kanixsahu",
      icon: Instagram,
    },
    {
      name: "Stack Overflow",
      path: "https://stackoverflow.com/users/9965025/kanishka-sahu",
      icon: Layers,
    },
    {
      name: "Medium",
      path: "https://medium.com/@kanishka-sahu",
      icon: Rss,
    },
    {
      name: "Youtube",
      path: "https://www.youtube.com/@sahukanishka",
      icon: Youtube,
    },
  ],
};
