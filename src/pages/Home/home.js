import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { constants } from "../utils/constants";
import { CardMedia } from "@mui/material";
import Loading from "../components/loading/loading";
import SearchBar from "../components/searchBar/searchBar";
import defaultImage from "../../img/noimage.png";

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

  const dateTransform = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const fullDate = `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
    return fullDate;
  };

  const launchStatus = (status) => {
    const statuslabel = status ? "Success" : "Failed";
    return statuslabel;
  };

  const LaunchesGrid = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <>
          <SearchBar />
          <Grid container spacing={2}>
            {launches.map((launch) => (
              <Grid item xs={6} sm={4} md={4} key={launch.id}>
                <Card sx={{ maxWidth: 550 }}>
                  <CardHeader
                    action={
                      <Chip
                        label={launchStatus(launch.success)}
                        color={launch.success ? "success" : "error"}
                      />
                    }
                    title={launch.name}
                    subheader={dateTransform(launch.date_unix)}
                  />
                  <CardMedia
                    sx={{ mx: "auto", width: 150, maxHeight: 150 }}
                    component="img"
                    image={launch.links.patch.small || defaultImage}
                    alt={launch.name}
                  />
                  <CardActions disableSpacing>
                    <Button size="small" color="primary">
                      <Link to={`launch/${launch.id}`} state={launch.id}>
                        Read more
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
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
