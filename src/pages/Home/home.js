import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import defaultImage from "../../img/noimage.png";
import { CircularProgress } from "@mui/material";
import { constants } from "../utils/constants";
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
      return <CircularProgress color="primary" />;
    } else {
      return (
        <>
          <h1>Spacex launches</h1>

          <Grid container spacing={2}>
            {launches.map((launch) => (
              <Grid item xs={6} sm={4} md={4} key={launch.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader title={launch.name} />
                  <CardMedia
                    sx={{ mx: "auto", width: 150 }}
                    component="img"
                    image={launch.links.patch.small || defaultImage}
                    alt={launch.name}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {launch.details
                        ? launch.details
                        : "No description provided."}
                    </Typography>
                  </CardContent>
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
