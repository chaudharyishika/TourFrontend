import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import ActivityDisplay from "./components/ActivityDisplay/ActivityDisplay";
import ExploreDestination from "./components/ExploreDestination/ExploreDestination";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashbaord/Dashboard";
import Form from "./pages/Dashbaord/Form";
import TotalUsers from "./pages/Dashbaord/User";
import DestinationDetail from "./components/DestinationDetail/DestinationDetail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivityDisplay />} />
        <Route path="/destination" element={<ExploreDestination />} />
        <Route path="/package/:id" element={<DestinationDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />

        {/* Admin Private Routes */}
        <Route element={<PrivateRoute role="admin" />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/form" element={<Form />} />
          <Route path="/admin/totalusers" element={<TotalUsers />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;














