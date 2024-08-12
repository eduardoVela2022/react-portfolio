import PageTitle from "../components/PageTitle";
import ResumeSkillList from "../components/ResumeSkillList";
import CV_PATH from "../assets/CV.pdf";

// The resume page
function Resume() {
  const frontEndSkills = ["React", "Redux", "JavaScript", "CSS", "HTML"];
  const backEndSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
  ];

  return (
    <div className="content-container">
      <PageTitle title="Resume" />

      <a
        className="resume-download-link"
        href={CV_PATH}
        download="ESVA-CV-EN-2.pdf"
      >
        Download CV
      </a>

      <ResumeSkillList title="Front end skills" skills={frontEndSkills} />

      <ResumeSkillList title="Back end skills" skills={backEndSkills} />
    </div>
  );
}

export default Resume;
