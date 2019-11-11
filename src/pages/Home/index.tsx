import React from "react";
import { useHistory, Link } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <ul>
      <li>
        <Link to="/todos">Todo</Link>
      </li>
      <li>
        <button onClick={() => history.push("/about")}>About</button>
      </li>
    </ul>
  );
};

export default Home;
