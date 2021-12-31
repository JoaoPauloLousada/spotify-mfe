import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../views/Home";
import ErrorBoundary from "./Error";
const Login = lazy(() => import("../views/Login"));

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