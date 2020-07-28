import React from "react";
import Form from "./Form";

var registered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={registered} />
    </div>
  );
}

export default App;
