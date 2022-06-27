// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client'
import { act } from "react-dom/test-utils";
import {Appointment} from '../src/Appointment'

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    container.remove();
    container = null;
  });

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        act(() => {
            const root = createRoot(container);
            root.render(<Appointment customer={customer} />);
        })
        
        expect(container.textContent).toMatch('Ashley');
});

});
