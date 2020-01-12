import * as React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { fetchJedi } from './redux/jedi/actions';
import {Jedi} from "./redux/jedi/types";

interface IAppProps {
  jedi: Array<Jedi>;
  dispatch: any;
}

function mapStateToProps(state:any) {
  return {
    jedi: state.jedi,
  };
}

class App extends React.Component<IAppProps, {}> {
  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this.props.dispatch(fetchJedi());
  }

  render() {
    const { jedi } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {jedi.length && jedi.map((jedi:Jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(App);
