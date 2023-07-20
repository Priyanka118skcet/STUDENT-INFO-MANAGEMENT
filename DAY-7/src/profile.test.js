import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Profile from './profile';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
