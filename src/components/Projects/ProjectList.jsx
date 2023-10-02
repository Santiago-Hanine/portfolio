import React from 'react'

const projects = [
    {
        name: 'Shop Hanine ',
        description: 'In my early JavaScript learning journey, I created a simple online shop project. It showcases basic product browsing, cart management, and real-time updates. This project marked my initial steps into web development and e-commerce functionality.',
        img: './Shop-Hanine.png',
        link:'https://santiago-hanine.github.io/Shop-Hanine/',
    },
    {
        name: 'Portfolio ',
        description: 'My React and Vite-powered portfolio is a showcase of my web development expertise, where I have applied all my knowledge. It is a dynamic, fast, and interactive display of my skills and achievements.',
        img: './portfolio.png',
        link:'https://santiago-hanine.github.io/portfolio/',
    },
    {
        name: 'Todo List',
        description: 'This TodoList is a project that I developed during my journey of learning React.js, an influential JavaScript library for building interactive user interfaces. The project revolves around creating a personalized and feature-rich todo list application that showcases my progress and skills as I delved into the world of React.js development.',
        img: './TodoList.png',
        link:'https://santiago-hanine.github.io/Shop-Hanine/',
    },
]

export const ProjectList = () => {
  return projects
}
