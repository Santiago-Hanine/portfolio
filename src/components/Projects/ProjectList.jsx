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
    name: "Shopi",
    description:
      "I created a Shop Ecommerce where you can shop for a wide range of products with ease and speed. Enjoy a modern, responsive, and intuitive shopping experience.",
    img: "./Shopi.webp",
    link: "https://github.com/Santiago-Hanine/Shop-Ecommerce",
  },
];

export const ProjectList = () => {
  return projects
}
