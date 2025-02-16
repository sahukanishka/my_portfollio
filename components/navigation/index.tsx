import {
  FileStack,
  Github,
  Instagram,
  InstagramIcon,
  Layers,
  Linkedin,
  Rss,
  SunMedium,
  Twitter,
  Youtube,
} from "lucide-react";

export const navigation = {
  main: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Timeline", path: "/timeline" },
    // { name: "Media", path: "/media" },
    { name: "Stack", path: "/stack" },
    // { name: "Projects", path: "/projects" },
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
      icon: InstagramIcon,
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
