/* eslint-disable react/prop-types */
import ResumeSkillListItem from "./ResumeSkillListItem";

// The resume skill list component
function ResumeSkillList({ title, skills }) {
  return (
    <div>
      <h3>{title}</h3>

      <ul>
        {skills.map((skill) => (
          <ResumeSkillListItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default ResumeSkillList;
