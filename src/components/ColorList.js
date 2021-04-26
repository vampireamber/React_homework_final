import React, { useMemo, useState } from 'react'
import Color from "./Color";
import { makeStyles } from '@material-ui/core/styles';
import { useColors } from "./ColorProvider";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import styles from "../styles/colorListStyles";

const useStyles = makeStyles(styles);

const ColorList = () => {

  const classes = useStyles();
  const { totalSize, colors, lastColor, lastEditModel } = useColors();

  

  return (
    
    <div>
      <Paper elevation={3} className={classes.paperRoot}>
        <Grid container className={classes.gridItem}>
          Total  : {totalSize} colors
        </Grid>
        <Divider />
        {lastEditModel !== "" &&
          <Grid container className={classes.gridItem}>
            <Grid item xs={5}>[Memory记录] 最新编辑是 : {lastEditModel}了</Grid> <Grid item xs={1} style={{ height: 30, background: lastColor.color, border: "2px solid rgb(202, 195, 195)" }}></Grid>
          </Grid>
        }
        <Divider />
        <List dense className={classes.root}>
          {colors.length === 0 ? (
            <p>No Colors Listed. (Add a Color)</p>
          ) : (
            colors.map((c) => <Color key={c.id} {...c} />)
          )}
        </List>
      </Paper>
    </div>
    
  );
};

export default ColorList;
