import React from 'react'
import { Layout } from '../../components/Layout'
import { Sidebar } from '../../components/Sidebar'
import { Presentation } from '../../components/Presentation'
import { About } from '../../components/About'
import { Projects } from '../../components/Projects'

export const Home = () => {
  return (
    <>
    <Sidebar />
    <Layout>
        <Presentation/>
        <About/>
        <Projects/>
    </Layout>
    </>
  )
}
