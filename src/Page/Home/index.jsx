import React from 'react'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { Presentation } from '../../components/Presentation'
import { About } from '../../components/About'
import { Projects } from '../../components/Projects'
import { Contact } from '../../components/Contact'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <>
    <Sidebar />
    <Header/>
    <Layout>
        <Presentation/>
        <About/>
        <Projects/>
        <Contact/>
    </Layout>
    <Footer/>
    </>
  )
}
