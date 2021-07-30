import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import Forms from './components/Forms';
import Todos from './components/Todos';
import Requisition from './components/Requisition';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/forms" component={Forms} />
      <Route path="/todos" component={Todos} />
      <Route path="/requisition" component={Requisition} />
    </Switch>
  )
}

export default App;
