import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>MyFunded Futures</h5>
              </div>
              <h3>08/2025 - Present</h3>
            </div>
            <p>
              Collaborated with business teams to assess PRDs and perform acceptance testing. Built and integrated APIs and automation scripts to improve platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Software Developer</h4>
                <h5>Fiverr Inc</h5>
              </div>
              <h3>02/2024 - Present</h3>
            </div>
            <p>
              Engineered end-to-end MVPs and scalable web solutions using Django, PostgreSQL, and React. Managed full development lifecycle for diverse global clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech, Computer Science</h4>
                <h5>Rajasthan Technical University</h5>
              </div>
              <h3>07/2023 - Present</h3>
            </div>
            <p>
              Coursework includes Artificial Intelligence, Object Oriented Programming, Data Structures & Algorithms, and DBMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
