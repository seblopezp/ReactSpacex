import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import { CardMedia } from "@mui/material";
import { Chip } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import defaultImage from "../../../img/noimage.png";
export const LaunchCard = (launchData) => {
  const { launch } = launchData;
  const launchStatus = (status) => {
    const statuslabel = status ? "Success" : "Failed";
    return statuslabel;
  };
  const dateTransform = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const fullDate = `${date.getUTCDate()}/${
      date.getUTCMonth() + 1
    }/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
    return fullDate;
  };
  return (
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
  );
};

export default LaunchCard;
