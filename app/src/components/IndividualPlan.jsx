import React, { useEffect } from "react";
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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebase from "firebase/app";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  logoutIndividual: {
    margin: "0 0 0 auto"
  },
  input: {
    marginLeft: "5px",
    marginRight: "5px"
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function IndividualPlan(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [registrationOpen, setRegistrationOpen] = React.useState(false);
  const [learningGoalsOpen, setLearningGoalsOpen] = React.useState(false);
  const [GoalsRegistrationOpen, setGoalsRegistrationOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    // 最初の一回だけ処理が実行される。 
    app
    .firestore()
    .collection("tasks")
    .onSnapshot(querySnapshot => {
    setTasks(
    querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
    id: doc.id,
    name: data.name,
    requiredTime: data.requiredTime,
    startDateTime: data.startDateTime.toDate().toLocaleString("ja-JP")
    };}));});},[]);

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
          <ListItemLink href="#simple-list" button onClick={()=>setLearningGoalsOpen(true)}>
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
        <div style={{ height: 350, width: '100%' }}>
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
        
        rows={
          tasks
        }
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
        <TextField id="standard-basic" label="業務名称" className={classes.input}/>
        <FormControl className={classes.input} style={{width: "100px"}} >
        <InputLabel id="demo-simple-select-label">所要時間</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="datetime-local"
        label="開始日時"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      /> 
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setOpen(false)}>
            確定保存
          </Button>
          <Button autoFocus color="primary" onClick={()=>setRegistrationOpen(false)}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>










      <Dialog 
      fullWidth={true}
      aria-labelledby="customized-dialog-title" open={learningGoalsOpen}>
        <DialogTitle>
          学習目標一覧
        </DialogTitle>
        <DialogContent dividers>
        <div style={{ height: 350, width: '100%' }}>
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
        
        rows={
          tasks
        }
      />
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setGoalsRegistrationOpen(true)}>
            新規追加
          </Button>
          <Button autoFocus color="primary" onClick={()=>setLearningGoalsOpen(false)}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>

      

      <Dialog 
      fullWidth={true}
      aria-labelledby="customized-dialog-title" open={GoalsRegistrationOpen}>
        <DialogTitle>
          学習目標登録画面
        </DialogTitle>
        <DialogContent dividers>
        <TextField id="standard-basic" label="学習項目名称" className={classes.input}/>
        <FormControl className={classes.input} style={{width: "100px"}} >
        <InputLabel id="demo-simple-select-label">所要時間</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="datetime-local"
        label="開始日時"
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.input}
      /> 
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus color="primary" onClick={()=>setOpen(false)}>
            確定保存
          </Button>
          <Button autoFocus color="primary" onClick={()=>setGoalsRegistrationOpen(false)}>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}

export default IndividualPlan;