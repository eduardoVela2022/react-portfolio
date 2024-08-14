import PageTitle from "../components/PageTitle";
import Project from "../components/Project";
import TheJavaScriptBlogImage from "../assets/theJavaScriptBlog.png";
import MyCurrenciesImage from "../assets/myCurrencies.png";
import WebWeatherImage from "../assets/webWeather.png";

// The portfolio page
function Portfolio() {
  return (
    <div className="content-container">
      <PageTitle title="Portfolio" />

      <div className="portfolio-container scroll-container">
        <Project
          name="The JavaScript Blog project"
          link="https://github.com/eduardoVela2022/JS-Blog"
          imageSrc={TheJavaScriptBlogImage}
          imageAlt="The JavaScript Blog project"
        />

        <Project
          name="The My Currencies project"
          link="https://github.com/eduardoVela2022/MyCurrencies"
          imageSrc={MyCurrenciesImage}
          imageAlt="The My Currencies project"
        />

        <Project
          name="The Web Weather project"
          link="https://github.com/eduardoVela2022/Web-Weather"
          imageSrc={WebWeatherImage}
          imageAlt="The Web Weather project"
        />
      </div>
    </div>
  );
}

export default Portfolio;
