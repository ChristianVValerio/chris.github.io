import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import Projects from '../components/Projects';
import { AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <AnimatePresence>
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <h1 className='display-1 fw-bold'>
              My Works
            </h1>
            <p>Here are some of the projects I've worked on:</p>
            <hr/>
            <ul>
              <li>
                <h4 className='fw-bold'>CRUD Project</h4>
                <p> Its where store, create, delete and update a students that where enrolled 
                </p>
              </li>
              <li>
                <h4 className='fw-bold'>UPCITE Event</h4>
                <p>It showcases the events happens in CITE
                </p>
              </li>
              <li>
                <h4 className='fw-bold'>UoP-Agile</h4>
                <p>An app where they put their goals, task, and their habits in app
                </p>
              </li>
            </ul>
          </Col>
          <Col className='projects'>
            <Projects />
          </Col>
        </Row>
        </Container>
    </AnimatePresence>
  );
};

export default Work;
