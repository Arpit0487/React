import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Banana", "Papaya", "Orange", "Apple", "Guvava", "Grapes", "Cheeku"];
  return (
    <div>
      <h1>Fruits I love</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
