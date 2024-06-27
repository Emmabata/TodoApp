  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  import Home from './pages/Home';
  import Todo from './pages/Todo';


function App() {
  return (
    <div className='bg-darkBlue min-h-screen'>
      <Router>
        <nav className='bg-darkBlue flex justify-between items-center text-white p-4'>
          <div className='px-5'>
            <h2>TECHNEW</h2>
          </div>
          <div className='flex space-x-5 flex-grow justify-center'>
            <Link className="px-4" to="/">Home</Link>
            <Link className='px-5' to="/todo">Bootcamp</Link>
          </div>
          <div className='px-5'></div> {/* This empty div maintains spacing */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
