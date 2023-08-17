import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/style/resetcss';
import Home from './pages/Home/Home';
import PostPage from './pages/PostPage/PostPage';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import PostCreation from './pages/PostCreation/PostCreation';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/postpage' element={<PostPage/>} />
          <Route path='/adminprofile' element={<AdminProfile/>} />
          <Route path='/postcreation' element={<PostCreation/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
