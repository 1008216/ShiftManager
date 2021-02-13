import React from "react";
import { app } from "../base";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <button onClick={()=> app.auth().signOut()}>ログアウト</button>

      <div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="月間シフト" />
          </ListItem>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="管理者予定登録" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="個人予定登録" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="ユーザー管理画面" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list">
            <ListItemText primary="パスワード登録・変更" />
          </ListItemLink>
        </List>
      </div>
    </div>
  );
}

export default Home;