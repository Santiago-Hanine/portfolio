import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Presentation } from '../../components/Presentation'
import { About } from '../../components/About'
import { Projects } from '../../components/Projects'
import { Contact } from '../../components/Contact'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Experience } from '../../components/Experience'

export const Home = () => {
  return (
    <>
    <Sidebar />
    <Header/>
	<main className="w-full overflow-hidden">
        <Presentation/>
        <Experience />
        <About/>
        <Projects/>
        <Contact/>
	</main>
    <Footer/>
    </>
  )
}
