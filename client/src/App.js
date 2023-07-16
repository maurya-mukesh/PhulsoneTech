import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Layout from "./layout";
import './styles/app.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, idx) => {
          return <Route key={idx} {...route} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;
