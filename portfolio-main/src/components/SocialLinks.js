import { FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/ChristianVValerio">
        <FaGithub />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;