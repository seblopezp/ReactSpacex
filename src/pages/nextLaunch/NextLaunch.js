
import React from 'react';
import { constants } from "../utils/constants";
import { useFetch } from "../hooks/useFetch";
import { Grid } from "@mui/material";
import Loading from "../components/loading/loading";
import LaunchCard from "../components/launchCard/launchCard";
export const NextLaunch = () => {
  const { SPACEX_API_URL } = constants;
  const { loading, data } = useFetch(`${SPACEX_API_URL}/launches/next`);
  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={4} key={data.id}>
            <LaunchCard launch={data} />
          </Grid>
      </Grid>
    )}
  </>
  )
}
