import React from "react";
//helpers
import config from "../../Config";
//Component
import Image from "../../UI/Image";
import Search from "../../UI/Search";
import Menu from "../../UI/Menu";
import Budge from "../../UI/Badge";
import s from "./header.module.sass";
import DropdownButton from "../../UI/DropdownButton";
import DropdownPanel from "../../UI/DropdownPanel";

const avatar = (fname, lname) =>
  config.avatarLink.replace("%fname", fname).replace("%lname", lname);
const menuList = ["jobs", "freelansers", "reports"];

class Header extends React.Component {
  state = {
    showPanel: false
  };

  componentDidMount() {
    window.addEventListener("click", event => {
      if (event.target.id !== "noclick") {
        this.setState({ showPanel: false });
      }
    });
  }

  toggleShowPanel = type => () => {
    if (this.state.showPanel === type) {
      this.setState({ showPanel: false });
    } else {
      this.setState({ showPanel: type });
    }
  };

  createMenuLinks = () => {
    const { Link } = this.props;
    return menuList.map(menuItem => {
      return <Link to={"/" + menuItem}>{menuItem}</Link>;
    });
  };
  render() {
    const { Link } = this.props;
    return (
      <header className={s.Header}>
        <div className={s.leftMenu}>
          <Link to="/">
            <Image />
          </Link>
          <Search onToggle={this.toggleShowPanel} />
          <Menu list={this.createMenuLinks()} />
          <DropdownPanel
            style={{ left: "130px", width: "200px" }}
            show={this.state.showPanel}
            links={["123Jobs", "123Freelansers", "123FreelansersReports"]}
            type="search"
          />
        </div>
        <div className={s.rightMenu}>
          <Budge count={10} onToggle={this.toggleShowPanel} />
          <Image
            src={avatar("Max", "Cher")}
            style={{ width: "40px", borderRadius: "50%" }}
          />
          <DropdownButton username="Vasya" onToggle={this.toggleShowPanel} />
          <DropdownPanel
            show={this.state.showPanel}
            links={["Jobs", "Freelansers", "Reports"]}
            type="usermenu"
          />
          <DropdownPanel
            style={{ right: "120px" }}
            show={this.state.showPanel}
            links={["123Jobs", "123Freelansers", "123FreelansersReports"]}
            type="notification"
          />
        </div>
      </header>
    );
  }
}

export default Header;
