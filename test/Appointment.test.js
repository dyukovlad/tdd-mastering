// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client'
import { act } from "react-dom/test-utils";
import {Appointment} from '../src/Appointment'

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let root = null

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  root = createRoot(container);
});

afterEach(() => {
    // подчищаем после завершения
    container.remove();
    container = null;
    root.unmount();
    root = null
  });

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        act(() => {
            root.render(<Appointment customer={customer} />);
        })
        
        expect(container.textContent).toMatch('Ashley');
});

});
