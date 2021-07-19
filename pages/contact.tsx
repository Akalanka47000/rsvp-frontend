import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import InfoCards from '../components/InfoCards'
import Navbar from '../components/Navbar'
import Container from '../components/Layout/Container'

const Contact = (): JSX.Element => {
  return (
    <div className=''>
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className='bg-no-repeat bg-right-top bg-cover py-10'>
        <ContactForm />
        <Container>
          <InfoCards />
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default Contact