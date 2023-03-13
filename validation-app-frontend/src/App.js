import Form from './components/form/Form'
import Dashbord from './components/dashbord/Dashbord';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";



function App() {
   return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/"
        element={ <Form/>}
         />
        <Route path="/dashbord"
         element= {
          // allData.length!==0 ? <Dashbord /> : <Form />
          <Dashbord/> }
        />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
