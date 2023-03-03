
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark/src/bootstrap-dark.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/createuser" element={<SignUp></SignUp>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>

  );
}

export default App;
