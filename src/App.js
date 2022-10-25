// import "./categories.scss";
// import Category from "./Components/Category/Category";
import Categories from "./Components/Category/Categories";
import {Routes,Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import NoMatchComponent from "./Components/NoMatchComponent/NoMatchComponent";
import Hats from "./Products/Hats";
import Jackets from "./Products/Jackets";
function App() {
  

  return (
    <div className="App">
     
      <Routes>
      
      <Route path="/" element={ <Navigation />} >
      <Route path="/categories" element={ <Categories />} />
  
      
      <Route path="/categories/hats" element={ <Hats />} />
      <Route path="/categories/jackets" element={ <Jackets />} />
      </Route>
      
      <Route path="*" element={ <NoMatchComponent />} />
      <Route path="/test" element={ <Sample />} />
      </Routes>

      </div>
    
  );
}
const Sample= ()=>{
  return(
    <div>
      <h1>Sample</h1>
    </div>
  )
}

export default App;
