import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="router">
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
