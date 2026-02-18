import ErrorMsg from "./components/ErrorMsg";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Banana", "Papaya", "Orange", "Apple", "Guvava", "Grapes", "Cheeku"];
  return (
    <div>
      <h1>Fruits I love</h1>
      <ErrorMsg list={foodItems}></ErrorMsg>
      <Display list={foodItems}></Display>
    </div>
  );
}

export default App;
