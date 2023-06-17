import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { SearchPage } from './pages/Search';
import { useState } from 'react';
import { allBooks } from './Data';

function App() {
  const [ allBooksData, setAllBooksData] = useState(allBooks)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage allBooksData={allBooksData} setAllBooksData={setAllBooksData}/>} />
        <Route path='/search' element={<SearchPage allBooksData={allBooksData} setAllBooksData={setAllBooksData}/>} />
      </Routes>
    </div>
  );
}

export default App;
