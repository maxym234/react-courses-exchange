import React from "react";
import s from "./main.module.sass";
class MainPage extends React.Component {
  render() {
    const { Link } = this.props;
    return (
      <div className={s.MainPage}>
        Text<Link to="/jobs">Go to Jobs</Link>
      </div>
    );
  }
}

export default MainPage;
{
  /*ctrl + ?== coment
  class MainPage extends React.Component {

    myMethod = () => {
        const myprops = this.props; // { age: 18 }
    }

    render() {
        const myprops = this.props; // { age: 18 }

        return <div className="Main">
            <Header />
            Text ...
        </div>
    }

} */
}
