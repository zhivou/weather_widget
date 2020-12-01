import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello I am Ruby on Rails Gem. Everything looks good.
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />, document.getElementById('welcome-container'))
});
