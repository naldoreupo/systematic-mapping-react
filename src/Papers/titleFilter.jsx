import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TitleFilterPaper = (props) => {

  const classes = useStyles();
  const handleClick = e => props.searchPaper();
  const changeString = e => props.changeTitle(e.target.value);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="title" onChange={changeString} />
      <Button variant="contained" color="primary" onClick={handleClick} >
        Search papers
      </Button>
    </form>
  );
};

export default TitleFilterPaper;