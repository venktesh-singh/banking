import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddAccount } from './components/AddAccount';
import { EditAccount } from './components/EditAccount';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add" element={<AddAccount/>} exact />
          <Route path="/edit/:id" element={<EditAccount/>} exact />  
        </Routes>
      </div>
    </GlobalProvider>
  );
}
  
export default App;