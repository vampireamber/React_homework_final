import React, { useState } from "react";
import { UserInput } from "./inputHook";
import { useColors } from "./ColorProvider";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from "../styles/AddColorFormStyles";

const useStyles = makeStyles(styles);

export default function AddColorForm() {

  const classes = useStyles();

  const [titleProps, resetTitle] = UserInput("");
  const [colorProps, resetColor] = UserInput("");
  const [titleError, setTitleError] = useState(false);
  const [colorError, setColorError] = useState(false);
  const { addColor } = useColors();
  const submit = (e) => {
    
    setTitleError(false)
    setColorError(false)

    if(titleProps.value==""){
      setTitleError(true)
      return 
    }
    if(colorProps.value==""){
      setColorError(true)
      return 
    }
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    
    resetColor("");
    resetTitle("");
  };

  return (
    <Grid container className = {classes.bodyRoot} direction="row" justify="flex-start" alignItems="center">
      <Grid item xs={2} className = {classes.bodyItem}>
        <TextField
          fullWidth
          type="text"
          label="Color Title"
          helperText="Add color title*"
          variant="outlined"
          error={titleError}
          {...titleProps}
        ></TextField>
      </Grid>
      <Grid item xs={2} className = {classes.bodyItem}>
        <TextField
          fullWidth
          label="Choose color"
          variant="outlined"
          helperText="Add new color*"
          {...colorProps}
          type="color"
          error={colorError}
        ></TextField>
      </Grid>
      <Grid item xs={3} className = {classes.bodyItemButton}>
        <Button className={classes.buttonRoot} onClick={submit}>ADD</Button>
      </Grid>
    </Grid>
  );
}
