import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

function LocalInfo({ today: { city, country, date } }) {
  return (
    <CardMedia
      style={{ textAlign: "center", marginTop: "7%", marginBottom: "7%" }}
    >
      <Typography variant="h3" gutterBottom>
        {city}, {country}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {date}
      </Typography>
    </CardMedia>
  );
}

export default LocalInfo;
