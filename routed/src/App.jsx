import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/books"> Books </Link></li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<Book />} />
            
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
