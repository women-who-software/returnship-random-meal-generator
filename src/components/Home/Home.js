import React from "react";
import Form from "../Form/Form";
import homeImg from "../../assets/brooke-lark2.png";
import homeImg2 from "../../assets/charisse-kenion.png"

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <article className="home__article--form">
          <Form />
        </article>
        <article className="home__article--info">
          <div className="home__article--info-graphic">
            <div className="home__article--info-shape"></div>
            <img
              src={homeImg2}
              className="home__article--info-img"
              alt="A beautiful meal on a plate"
            />
          </div>
          <p className="home__article--info-instructions">
            Select an ingrediant and your dietary restrictions, and Tasty
            Temptations will provide you with a few tasty options for dinner tonight!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
