import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: 'center',
  },
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <div id="home">
      <Typography variant="h3" className={classes.center}>
        Welcome to Admiralfeb's Website
      </Typography>
    </div>
  );
};
