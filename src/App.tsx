import { Layout } from '@/components/layout'
import { About, Contact, Hero, Projects, Skills, Stats, Testimonials } from '@/components/sections'

export function App() {
  return (
    <Layout>
      <div className="space-y-16">
        {/* Homepage Hero Section */}
        <Hero />

        {/* Screenshot 3-Card Stats / Highlights Section */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </div>
    </Layout>
  )
}

export default App
