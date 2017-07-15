import Logger from '../../modules/logger';

class App extends React.Component {

  render() {

    return(
      <Logger/>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);

export default App;
