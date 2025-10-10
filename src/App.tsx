import React,{lazy} from 'react'
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoutes from './components/auth/ProtectedRoutes';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat= lazy(() => import("./pages/Chat"));
const Group= lazy(() => import("./pages/Group"));
export default function App() {
  let user:boolean=true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<ProtectedRoutes user={!user} redirect="/"><Login/></ProtectedRoutes>} />
        <Route  element={<ProtectedRoutes user={user}/>}>
        <Route path="/" element={<ProtectedRoutes user={user}><Home/></ProtectedRoutes>} />
        <Route path="/chat/:chatId" element={<Chat/>} />
        <Route path="/group" element={<Group/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
