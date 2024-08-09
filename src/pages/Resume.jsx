import PageTitle from "../components/PageTitle";
import ResumeSkillList from "../components/ResumeSkillList";

// The resume page
function Resume() {
  const frontEndSkills = ["React", "Redux", "JavaScript", "CSS", "HTML"];
  const backEndSkills = ["Node.js", "Express.js", "PostgreSQL", "MongoDB"];

  return (
    <div>
      <PageTitle title="Resume" />

      <ResumeSkillList title="Front end skills" skills={frontEndSkills} />

      <ResumeSkillList title="Back end skills" skills={backEndSkills} />
    </div>
  );
}

export default Resume;
