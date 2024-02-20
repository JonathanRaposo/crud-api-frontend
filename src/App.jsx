
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx"
import HomePage from "./pages/HomePage.jsx";
import Users from './pages/Users.jsx';
import AddUser from './pages/AddUser.jsx';
import User from './pages/User.jsx';
import UpdateUser from './pages/UpdateUser.jsx';
import Error from './pages/Error.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/:id/update" element={<UpdateUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
