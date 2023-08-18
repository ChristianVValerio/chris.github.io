import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-200'>
        <Carousel.Item>
            <Image src="/CRUDPROJECT.jpg" className='project-image w-100 h-100 object-fit-cover' fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark bordery w-25 rounded'>CRUD Project</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/UPCITE EVENT.png" className='project-image w-100 h-100 object-fit-cover' fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark border w-25 rounded'>UPCITE Event</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="/UoP-Agile.png" className='project-image w-100 h-100 object-fit-cover' fluid rounded/>
          <Carousel.Caption className='d-flex justify-content-center'>
            <h3 className='text-light bg-dark border w-25 rounded'>UoP-Agile</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
