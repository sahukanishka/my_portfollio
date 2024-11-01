import { Github, Linkedin, Twitter } from "lucide-react";

export const navigation = {
  main: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Timeline", path: "/timeline" },
    { name: "Media", path: "/media" },
    { name: "Stack", path: "/stack" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      path: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      path: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      path: "https://twitter.com",
      icon: Twitter,
    },
  ],
};
