import {Home, Landing, NavBar, Detail, Form} from "./views/indexViews"
import {Routes, Route, useLocation} from "react-router-dom";

function App() {
   
  const {pathname} = useLocation()

  return (
    <div className="App">
      {pathname !=="/" && <NavBar/>}
      <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
      <Route path="/activity" element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
