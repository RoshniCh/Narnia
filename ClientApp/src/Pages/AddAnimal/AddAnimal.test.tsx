import React from 'react';
import { AddAnimal } from './AddAnimal';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders Add Animal without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <AddAnimal />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});