import {BrowserRouter,Routes,Route} from 'react-router-dom' 

import Test from "./Test";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/test" exact element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
