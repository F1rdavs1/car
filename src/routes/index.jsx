import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddCars, Cars } from "../pages";

function index() {
  return (
    <Routes>
      <Route path="/" element={<Cars />} />
      <Route path="/add" element={<AddCars />} />
    </Routes>
  );
}

export default index;
