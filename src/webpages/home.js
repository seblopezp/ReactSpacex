import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setLaunches(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>
            {/* <Link to={`launch/${launch.id}`} >{launch.name}</Link> */}
            <Link to={`launch/${launch.id}`} state={launch.id}>
              {launch.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};
export default Home;
