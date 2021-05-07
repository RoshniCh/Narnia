import React from 'react';
import { AnimalType } from './AnimalType';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders AnimalType page without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <AnimalType />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});