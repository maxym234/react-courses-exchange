import React from "react";
//Component
import InfoList from "../../UI/InfoList";
import Social from "../../UI/Social";
import s from "./footer.module.sass";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className={s.Footer}>
        <div className={s.Info}>
          <InfoList
            listOne={["About Us", "Blog", "Feedback"]}
            listTwo={["Community", "Trust & Safety", "Help & Support"]}
            listThree={[
              "Term of Service",
              "Privacy Policy",
              "Accessibility",
              "Decktop App"
            ]}
            listFour={[
              "Cookie Policy",
              "Enterprise Solutions",
              "Hiring Headquarters",
              "Mobile"
            ]}
          />
        </div>
        <div className={s.Social}>
          <Social />
        </div>
      </footer>
    );
  }
}

export default Footer;
