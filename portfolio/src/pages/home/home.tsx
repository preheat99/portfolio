import CustomButton from "../../shared/custom-button/custom-button";
import "./home.scss";

const Home = () => {
  const handleResumeClick = (event: React.MouseEvent) => {
    console.log(event);
  };
  return (
    <div className="home">
      <div className="home-introduction">
        <h1>Hi, I am Prabhat</h1>
        <h1></h1>
      </div>
      <div className="home-description">
        <p>I am Frontend/Full-Stack Developer.</p>
        <p>I am currently working at ZS Associates as Senior Engineer.</p>
      </div>
      <div className="home-socials">
        <span>Icon 1</span>
        <span>Icon 2</span>
        <span>Icon 3</span>
        <span>Icon 4</span>
      </div>
      <div className="home-resume">
        <CustomButton content="Resume" buttonClickHandler={handleResumeClick} />
      </div>
    </div>
  );
};

export default Home;
