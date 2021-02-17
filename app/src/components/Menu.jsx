import React from "react";
import { app } from "../base";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

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

function Menu(props) {
  const classes = useStyles();
  const history = useHistory()
  return (
    <div>
     

      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=> app.auth().signOut()} variant="contained" color="primary">ログアウト</Button>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button onClick={()=> {history.push("/monthlyshift")}}>
            <ListItemText primary="月間シフト" />
          </ListItem>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>{history.push("/managementplan")}}>
            <ListItemText primary="管理者予定登録" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>{history.push("/individualplan")}}>
            <ListItemText primary="個人予定登録" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>{history.push("/usermanagement")}}>
            <ListItemText primary="ユーザー管理画面" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>{history.push("/passwordchange")}}>
            <ListItemText primary="パスワード登録・変更" />
          </ListItemLink>
        </List>
      </div>
    </div>
  );
}

export default Menu;