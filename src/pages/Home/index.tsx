import React from "react";
import { useHistory, Link } from "react-router-dom";
import { AButton } from "movo_ui";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <ul>
      <li>
        <Link to="/todos">Todo</Link>
      </li>
      <li>
        <AButton onClick={() => history.push("/about")}>About</AButton>
      </li>
    </ul>
  );
};

export default Home;
