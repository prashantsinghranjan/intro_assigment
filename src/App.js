import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {AppRouter}  from './routers';
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <AppRouter/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
