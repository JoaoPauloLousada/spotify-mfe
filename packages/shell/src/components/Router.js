import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../views/Home";
import ErrorBoundary from "./Error";
const Login = React.lazy(() => import('signin/Login'))

export default function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<>Loading Component..</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  )
}