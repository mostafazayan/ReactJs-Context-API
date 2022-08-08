import './App.css';
import Navbar from './components/navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr />
      <BookList></BookList>
    </div>
  );
}

export default App;
