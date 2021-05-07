import React from 'react';
import { SearchAnimal } from './SearchAnimal';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders SearchAnimal page without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <SearchAnimal />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});