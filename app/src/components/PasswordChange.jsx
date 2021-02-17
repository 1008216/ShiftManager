import React from "react";
import { app } from "../base";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function PasswordChange(props) {
  const classes = useStyles();
  return (
    <div>
     

      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=> app.auth().signOut()} variant="contained" color="primary">ログアウト</Button>
        </Toolbar>
      </AppBar>
    <p>PasswordChange</p>
     
    </div>
  );
}

export default PasswordChange;