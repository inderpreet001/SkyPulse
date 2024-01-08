import {Navbar,Container} from 'react-bootstrap'

export default function Header() {
  return (
   <>
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand className='logo'>SkyPulse</Navbar.Brand>
      </Container>
    </Navbar>
   </>
  )
}
