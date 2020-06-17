import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./common/components/NotFound";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
