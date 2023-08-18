import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Image, Row, Col, Container } from 'react-bootstrap';
import {AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <section>
       <AnimatePresence>
            <Container className='hero'>
              <Row className='hero d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-center items-center'>
                  <Image src='/christian.jpg' width={400} height={400} style={{minWidth:300}} roundedCircle fluid/>
                </Col>
                <Col className='d-flex flex-column'>
                  <h1 className='display-5 fw-bold'>
                    Christian Joshua Valerio
                  </h1>
                  <h3 className='display-6 fw-semibold '>Web Developer</h3>
                  <hr />
                  <p>
                    3rd Yr BSIT Student Major in Web Development,Extremely passionate web designer skilled in Adobe Creative Suite, HTML, and CSS.
                  </p>
                  <div className='d-flex align-items-center gap-2'>
                    <SocialLinks />
                  </div>
                </Col>
              </Row>
            </Container>
      </AnimatePresence>

    </section>
  );
};

export default Home;
