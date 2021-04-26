import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from "../styles/colorStyles";

const useStyles = makeStyles(styles);

const Color = ({ id, title, color, rating }) => {
  const classes = useStyles();
  const { rateColor, removeColor } = useColors();
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <div style={{ height: 50, background: color, border: "2px solid rgb(202, 195, 195)" }}></div>
        </ListItemAvatar>
        <ListItemText className={classes.listItem}>
          <Typography component="div" variant="h6" className={classes.inline} color="textPrimary">{title}</Typography>

          <StarRating
            starsSelected={rating}
            onRate={(rating) => rateColor(id, rating)}
          />
        </ListItemText>
        <ListItemSecondaryAction className={classes.listItem}>
          <IconButton edge="end" aria-label="delete" onClick={() => removeColor(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>

  )
};

export default Color;
