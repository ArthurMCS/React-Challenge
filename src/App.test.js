/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import { React } from 'react';
import { act } from 'react-dom/test-utils';
import App from './App';
import data from './testData';

const mockFetch = () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve(data),
  });
};

describe('Testa se a tabela é preenchida corretamente com os dados', () => {
  beforeAll(mockFetch);

  it('A tabela deve possuir 6 colunas', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(await screen.findAllByRole('columnheader')).toHaveLength(6);
  });

  it('A tabela deve possuir, inicialmente, 7 documentos apenas', async () => {
    await act(async () => {
      render(<App />);
    });
    // a tabela deve deve haver 7 documentos mais o uma linha do header
    expect(await screen.findAllByRole('row')).toHaveLength(8);
  });
});

describe('Testa os inputs', () => {
  beforeAll(mockFetch);

  it('Renderize o campo de texto para o filtro de nomes', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(await screen.findByTestId('name-input')).toBeInTheDocument();
  });

  it.skip('Filtra apartir do nome digitado', async () => {
    await act(async () => {
      render(<App />);
    });

    const inputName = await screen.findByTestId('name-input');
    fireEvent.change(inputName, { target: { value: 'elon tusk' } });
    expect(inputName).toHaveValue('elon tusk');
    expect(await screen.findAllByRole('row')).toHaveLength(7);
  });

  it('Filtra pelo status do documento', async () => {
    render(<App />);

    const inputStatus = await screen.findByTestId('status-input');
    fireEvent.change(inputStatus, { target: { value: 'Draft' } });
    expect(inputStatus).toHaveValue('Draft');

    const btnSubmit = await screen.findByTestId('btn-submit');
    fireEvent.click(btnSubmit);
    expect(await screen.findAllByTestId('table-row')).toHaveLength(2);
  });
});
