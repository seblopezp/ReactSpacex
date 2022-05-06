import React from "react";
import Alert from "@mui/material/Alert";
const Loading = (props) => {
  console.log(props);

  return (
    <Alert severity="info">
      Loading data!
    </Alert>
  );
};

export default Loading;
