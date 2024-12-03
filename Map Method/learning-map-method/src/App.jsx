import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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

  return (
    <>
      <h1>My Favourite Food</h1>
      <ul className="list-group">
        {foodItems.map((Items) => (
          <li key={Items} className="list-group-item">
            {Items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
