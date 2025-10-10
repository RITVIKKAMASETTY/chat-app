import React, { type JSX } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedRoutes(
  { children, user, redirect = "/login" }: { children: JSX.Element | null; user: boolean; redirect?: string }
) {
    if(!user){return <Navigate to={redirect} />}

  return (children ? children : <Outlet/>);
}
