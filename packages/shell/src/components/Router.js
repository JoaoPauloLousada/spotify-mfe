import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Error";
import Home from '../views/Home';
import Search from '../views/Search';
import Root from '../views/Root';
const Login = lazy(() => import("../views/Login"));

export default function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<>Loading Component..</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="" element={<Home />} />
              <Route path="search" element={<Search />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  )
}