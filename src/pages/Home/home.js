import React from "react";
import { Grid } from "@mui/material";
import { constants } from "../utils/constants";
import Loading from "../components/loading/loading";
import LaunchCard from "../components/launchCard/launchCard";
import { useFetch } from "../hooks/useFetch";
const Home = () => {
  const { SPACEX_API_URL } = constants;
  const { loading, data } = useFetch(`${SPACEX_API_URL}/launches`);
 
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          {data.map((launch) => (
            <Grid item xs={6} sm={4} md={4} key={launch.id}>
              <LaunchCard launch={launch} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
