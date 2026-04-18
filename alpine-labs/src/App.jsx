import { Router, Route } from "@solidjs/router";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
    </Router>
  );
}
