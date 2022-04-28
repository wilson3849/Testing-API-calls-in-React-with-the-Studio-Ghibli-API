import {setupServer} from 'msw/node'

import React from 'react';
import {waitFor, render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';


const webService = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json([{title: 'Grave Fireflies',description:'The orphan Sheeta...',image:'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg'}]))

  }),
)

beforeAll(() => webService.listen())
afterEach(() => webService.resetHandlers())
afterAll(() => webService.close())

test('validate page loading success.', () => {
  render(<App />);
  const ScreenTitle = screen.getByText(/Ghibli Studio Films/i);
  expect(ScreenTitle).toBeInTheDocument();
});

test('Checks Mock API has interjected', async () => {
  render(<App />);

  await screen.findByTestId('GraveFireflies')

  const MovieElement = screen.getByTestId('GraveFireflies');
  expect(MovieElement).toBeInTheDocument();
});
