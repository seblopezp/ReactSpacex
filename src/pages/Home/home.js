import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { constants } from "../utils/constants";
import Loading from "../components/loading/loading";
import LaunchCard from "../components/launchCard/launchCard";
const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);
  const { SPACEX_API_URL } = constants;
  useEffect(() => {
    fetch(`${SPACEX_API_URL}/launches`)
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

  const LaunchesGrid = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <>
          <Grid container spacing={2}>
            {launches.map((launch) => (
              <Grid item xs={6} sm={4} md={4} key={launch.id}>
                <LaunchCard launch={launch} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
  };

  return <LaunchesGrid />;
};
export default Home;
