import React from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container className='d-flex flex-column justify-content-center'>
          <h1 className='display-3 fw-bold text-center'> My Education </h1>
          <p className='text-center'>School that I graduated and university that im enrolled</p>
          <div className="main-timeline-5">
          <AnimatePresence>
              <div className="timeline-5 right-5">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5> Jn Montessori Inc </h5>
                    <span className="small text-muted"><i className="fas fa-clock me-1"></i>2015-2019</span>
                    <p className="mt-2 mb-0">Ramos st, Lingayen, Pangasinan</p>
                    <hr/>
                    <p>
                      I studied at Jn Montessori Inc in my Junior High
                    </p>
                  </div>
                </div>
              </div>
            </AnimatePresence>
            <AnimatePresence>         
                  <div className="timeline-5 right-5">
                    <div className="card w-100">
                      <div className="card-body p-4">
                        <h5>PHINMA University of Pangasinan</h5>
                        <span className="small text-muted"><i className="fas fa-clock me-1"></i>2019-2021</span>
                        <p className="mt-2">Arellano Street, Downtown District, Dagupan, Pangasinan</p>
                        <hr />
                        <p>
                          During my Senior High School years, I studied at PHINMA University of Pangasinan. 
                          I took Criminalogy (GAS-CRI) then swtich TLV-PROGRAMMING (TLV-PROG) as my Senior High track. I begin enjoying and learning 
                          how to manipulate codes.
                        </p>
                      </div>
                    </div>
                  </div>
            </AnimatePresence>
            <AnimatePresence>     
                  <div className="timeline-5 right-5">
                    <div className="card w-100">
                      <div className="card-body p-4">
                        <h5>PHINMA-University of Pangasinan</h5>
                        <span className="small text-muted"><i className="fas fa-clock me-1"></i>2021-current</span>
                        <p className="mt-2 mb-0">Arellano Street, Downtown District, Dagupan, Pangasinan</p>
                        <hr/>
                        <p>
                        As i graduated Senior Highschool in UPang,I pick a Bachelor of Science in Information Technology or BSIT in short as my course. 
                        I use my past knowledge in senior Highschool year but Im still struggling it gets more complicated codes are  
                        But im motivated and have future to mold in 2nd yr beginning of 2nd sem I took Web Development as my major track
                        </p>
                      </div>
                    </div>
                  </div>
              </AnimatePresence>
            </div>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
