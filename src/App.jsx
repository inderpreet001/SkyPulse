import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import { Button, Container, Form } from 'react-bootstrap';

function App() {
  

  return (
    <>
      <Header></Header>
      <div>
        <Container className='d-flex flex-column align-items-center justify-content-center mt-5 pt-5'>
        <h1>SkyPulse</h1>
        <h5>Know the weather</h5>
          <div className='d-flex align-items-center justify-content-center w-100 mt-5'>
          
          <Form.Control  placeholder="Enter you location"  className='d-flex w-50  me-5'/>
          <Button style={{width:"100px"}} className='main-button'>Go</Button>
          </div>
        </Container>
      </div>
      
    </>
  )
}

export default App
