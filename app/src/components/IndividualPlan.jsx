import React from "react";
import { app } from "../base";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  logoutIndividual: {
    margin: "0 0 0 auto"
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function IndividualPlan(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <h1>個人予定登録</h1>
          <Button onClick={()=> app.auth().signOut()} variant="contained" color="primary" className={classes.logoutIndividual}>ログアウト</Button>
        </Toolbar>
      </AppBar>
    
    <div className={classes.root}>
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button onClick={()=>console.log("1")}>
            <ListItemText primary="休暇希望入力画面" />
          </ListItem>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>console.log("2")}>
            <ListItemText primary="勤務可能時間設定画面" />
          </ListItemLink>
          <Divider />
          <ListItemLink href="#simple-list" button onClick={()=>console.log("3")}>
            <ListItemText primary="学習目標入力画面" />
          </ListItemLink>
          <Divider />
          <ListItemLink  button onClick={()=>setOpen(true)}>
            <ListItemText primary="担当業務" />
          </ListItemLink>
        </List>
      </div>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
         aaa
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setOpen(false)}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default IndividualPlan;