import Header from "../components/Header";
import Activities from "../components/Activities";
import ActivitiesTwo from "../components/ActivitiesTwo";
import CommentsView from "../components/CommentsView";
import Footer from "../components/Footer";
import React from "react";
export const Home = () => {
  return (
    <>
      <Header />
      <Activities
        Texts={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        Title="Your Hub for teamwork"
        Image={require("../images/niceOne.png")}
      />
      <ActivitiesTwo
        TextsTwo={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        TitleTwo="Simple task management"
        ImageTwo={require("../images/niceTwo.png")}
      />
      <Activities
        Texts={
          "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        }
        Title="Your Hub for teamwork"
        Image={require("../images/niceThree.png")}
      />
      <CommentsView />
      <Footer />
    </>
  );
};
export default Home;
