import React from 'react'

const projects = [
  {
    name: "Bytebusters",
    description:
      "A landing page created for a California company that provides computer repairing services. The website is built with Next.js and Tailwind CSS, and it is fully responsive and mobile-friendly.",
    img: "./bytebusters.png",
    link: "https://github.com/Santiago-Hanine/bytebusters",
  },
  {
    name: "Middleman Branding",
    description:
      "Work for a digital marketing agency in Argentina. Stack used: NextJS, NodeJS, TailwindCSS. The website is fully responsive and mobile-friendly.",
    img: "./middleman.png",
    link: "https://github.com/Santiago-Hanine/middleman-branding",
  },
  {
    name: "Compleet labs",
    description:
      "I created a simple landing page for a fictional company called compleet labs. The website is built with Vite and Tailwind CSS, and it is fully responsive and mobile-friendly.",
    img: "./compleet-labs.png",
    link: "https://github.com/Santiago-Hanine/DOMO",
  },
];

export const ProjectList = () => {
  return projects
}
