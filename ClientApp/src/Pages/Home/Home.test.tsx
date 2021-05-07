import React from 'react';
import { Home } from './Home';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders Home page without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});