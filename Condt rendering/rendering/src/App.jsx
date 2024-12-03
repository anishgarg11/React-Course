import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Shahi Paneer",
    "Matar paneer",
    "Kadhai Paneer",
    "Tandoori Roti",
    "Golgape",
    "Raj Kachori",
    "Dhokla",
    "Chhole Bhature",
  ];

  let mapMethod = foodItems.map((Items) => (
    <li key={Items} className="list-group-item">
      {Items}
    </li>
  ));
  let Msg = foodItems.length === 0 && <h1>I'm Hungry</h1>;

  return (
    <>
      <h1>My Favourite Food</h1>
      <ul className="list-group">
        {Msg}
        {mapMethod}
      </ul>
    </>
  );
}

export default App;
