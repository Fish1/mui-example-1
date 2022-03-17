import { Button, ButtonGroup, TextField, Typography } from "@mui/material";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";

const style = {
  "button": {
    fontSize: 60,
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "orange"
    }
  },
  "title": {
    textDecoration: "underline",
    marginBottom: 4
  },
  "field": {
    marginTop: 3,
    marginBottom: 3,
    display: "block"
  }
}

function CreatePage() {

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTitleError(title.trim() === "");
    setDetailsError(details.trim() === "");
    if(title.trim() !== "" && details.trim() !== "") {
      alert(title + " " + details);
    }
  }

  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        sx={style.title}
      >
        Create a New Note: {title}
      </Typography>
      <br></br>
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          sx={style.field}
          label="Note Title" 
          variant="outlined"
          color="secondary"
          error={titleError}
          fullWidth
          required
        />
        <TextField
          onChange={(event) => {
            setDetails(event.target.value)
          }}
          sx={style.field}
          label="Note Detail"
          variant="outlined"
          color="secondary"
          error={detailsError}
          rows={4}
          multiline
          fullWidth
          required
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
      <AcUnitIcon color="secondary"/>
      <AcUnitIcon fontSize="large"/>
      <AcUnitIcon fontSize="small"/>
      <AcUnitIcon color="error"/>
      <AcUnitIcon fontSize="large" color="disabled"/>
      <AcUnitIcon fontSize="small" color="action"/>
      <ButtonGroup color="secondary" variant="contained">
        <Button startIcon={<DeleteIcon/>}>Go Back</Button>
        <Button sx={style.button}>Random</Button>
      </ButtonGroup>
    </div>
  )
}

export default CreatePage;