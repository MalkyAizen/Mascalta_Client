import logo from './logo.svg';
import './App.css';
import { UserForm } from './components/userForm';
import { SignIn } from './components/signIn';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './components/routing/routing';


function App() {
  return (
    <>
          <BrowserRouter>
<Routing></Routing>
</BrowserRouter>
    </>
   );
}

export default App;
