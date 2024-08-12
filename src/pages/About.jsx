import PageTitle from "../components/PageTitle";
import ProfilePicture from "../assets/profilePicture.jpeg";

// The about page
function About() {
  return (
    <div className="about-page-container">
      <PageTitle title="About" />

      <img
        src={ProfilePicture}
        alt="A profile picture of Eduardo Sebastian Vela Alanis"
      />

      <p>
        I am a front end web developer that is fresh out of a full stack web
        development bootcamp. I know how to use React, and I have learned about
        other technologies that make up its ecosystem, such as Redux, React
        Router, React Query and Styled Components. I also know the core web
        programming languages of HTML, CSS and JavaScript pretty well. I may not
        know everything about these technologies, but I am eager to learn more
        about them. Also I have worked on various team projects, during the
        bootcamp, so I know how it is to work on a git repository with multiple
        contributors and branches.
      </p>
    </div>
  );
}

export default About;
