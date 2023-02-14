import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ListStudent from './pages/students/ListStudent';
import CreateStudent from './pages/students/CreateStudent';
import EditStudent from './pages/students/EditStudent';
import DeleteStudent from './pages/students/DeleteStudent';

function App() {
  return (
    <center>
        <Routes>
          <Route path={'/'} element={<Home/>}>
              <Route path={'/'} element={<ListStudent/>}></Route>
              <Route path={'/create-student'} element={<CreateStudent/>}></Route>
              <Route path={'/edit-student/:id'} element={<EditStudent/>}></Route>
              <Route path={'/delete-student/:id'} element={<DeleteStudent/>}></Route>
          </Route>
          <Route path={'/admin'} element={<Admin/>}/>
        </Routes>
    </center>
  );
}

export default App;
