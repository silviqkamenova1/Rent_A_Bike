import { render,screen } from '@testing-library/react';

import ReactDOM from 'react-dom/client';

import { CatalogItem } from "./CatalogItem"


describe('Catalog Item Component', () => {
    test('Show frame', () => {
        const frame = 'Test Frame'

        // //prepearing DOM in he memory
        // const container = document.createElement('div');
        // document.body.append(container);
        // //create root and render CatalogItem in this DOM
        // const root = ReactDOM.createRoot(container);
        render(<CatalogItem frame={frame}/>);

        // //checking if the data is recorded in this DOM
        // const actualTitle = document.getElementById('frame').textContent;
        // expect(actualTitle).toBe(frame);

        expect(screen.queryByText(frame)).toBeInTheDocument()
    })
})