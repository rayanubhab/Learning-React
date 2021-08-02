import logo from './logo.svg';
import './App.css';
import  Button  from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import  ButtonGroup from '@material-ui/core/ButtonGroup';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ButtonGroup>
//first button
<Button color="primary" size="large" startIcon={<DeleteIcon/>} variant="contained" style={{fontSize:20}}>Discard</Button>

//second button
        <Button onClick={()=>alert('Hello')} 
        startIcon={<SaveIcon/>}//Places the icon at the front of the button
        endIcon={<SaveIcon/>} //Places the icon at the end of the button
        variant="contained" 
        style={{
         fontSize:20
        }
        }
        size="large"
        color="secondary">
          Hello World
          </Button>


          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>

    
  );
}

export default App;
