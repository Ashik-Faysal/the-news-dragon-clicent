import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub , FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import QZone from "../QZone/QZone";
const RightNav = () => {
  return (
    <div>
      <h4>Right Nav</h4>

      <Button className="d-block mb-1" variant="primary">
        <FaGoogle />
        Sign With Google
      </Button>
      <Button variant="secondary">
        {" "}
        <FaGithub />
        Sign With GitHub
      </Button>

      <ListGroup variant="flush">
        <ListGroup.Item><FaFacebook/>FaceBook</ListGroup.Item>
        <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
        <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
          </ListGroup>
          <QZone/>
    </div>
  );
};

export default RightNav;
