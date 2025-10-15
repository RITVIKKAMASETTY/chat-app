// import React,{lazy} from 'react'
// import  {BrowserRouter, Routes, Route} from "react-router-dom";
// import ProtectedRoutes from './components/auth/ProtectedRoutes';

// const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const Chat= lazy(() => import("./pages/Chat"));
// const Group= lazy(() => import("./pages/Group"));
// const NotFound= lazy(() => import("./pages/NotFound"));
// export default function App() {
//   let user:boolean=true;
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<ProtectedRoutes user={!user} redirect="/"><Login/></ProtectedRoutes>} />
//         <Route  element={<ProtectedRoutes user={user}/>}>
//         <Route path="/" element={<ProtectedRoutes user={user}><Home/></ProtectedRoutes>} />
//         <Route path="/chat/:chatId" element={<Chat/>} />
//         <Route path="/group" element={<Group/>} />
//         </Route>
//         <Route path="*" element={<NotFound/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const user: boolean = true;
  
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          {/* Public route - only accessible when NOT logged in */}
          <Route 
            path="/login" 
            element={
              <ProtectedRoutes user={!user} redirect="/">
                <Login />
              </ProtectedRoutes>
            } 
          />
          
          {/* Protected routes - only accessible when logged in */}
          <Route element={<ProtectedRoutes user={user} redirect="/login" />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/group" element={<Group />} />
          </Route>
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}