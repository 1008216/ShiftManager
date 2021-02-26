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
import { DataGrid } from '@material-ui/data-grid';

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
  const [registrationOpen, setRegistrationOpen] = React.useState(false);

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

      <Dialog 
      fullWidth={true}
      aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle>
          業務一覧
        </DialogTitle>
        <DialogContent dividers>
        <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'name',
            headerName: "業務名称",
            width: 200},
          { field: 'requiredTime',
            headerName: "所要時間",
            width: 120},
         { field: 'startDateTime',
            headerName: "開始日時",
            width: 200 }]}
        
        rows={[
          { id: 1,  name: "XXXX",
          requiredTime: "5",
          startDateTime: "2020年03月01日 20:00" },
          { id: 2, name: 'Material-UI',
          requiredTime: "10",
          startDateTime: "2020年03月01日 20:00"
          },]}
      />
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setRegistrationOpen(true)}>
            新規追加
          </Button>
          <Button autoFocus color="primary" onClick={()=>setOpen(false)}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>

      

      <Dialog 
      fullWidth={true}
      aria-labelledby="customized-dialog-title" open={registrationOpen}>
        <DialogTitle>
          業務登録画面
        </DialogTitle>
        <DialogContent dividers>
        <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
          { field: 'name',
            headerName: "業務名称",
            width: 200},
          { field: 'requiredTime',
            headerName: "所要時間",
            width: 120},
         { field: 'startDateTime',
            headerName: "開始日時",
            width: 200 }]}
        
        rows={[
          { id: 1,  name: "XXXX",
          requiredTime: "5",
          startDateTime: "2020年03月01日 20:00" },
          { id: 2, name: 'Material-UI',
          requiredTime: "10",
          startDateTime: "2020年03月01日 20:00"
          },]}
      />
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setOpen(false)}>
            新規追加
          </Button>
          <Button autoFocus color="primary" onClick={()=>setRegistrationOpen(false)}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>




    </div>
  );
}

export default IndividualPlan;