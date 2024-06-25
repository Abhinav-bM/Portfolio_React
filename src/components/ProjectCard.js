import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-white"
        
      >
        <div className="proj-imgbx object-fit-cover">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
