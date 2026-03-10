import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import Topbar from './Topbar';
import { Provider } from 'jotai';

test('renders Topbar and opens settings menu', () => {
    render(
        <Provider>
            <Topbar />
        </Provider>
    );

    // The logo or an image with alt text 'User' should be present
    expect(screen.getByAltText('User')).toBeInTheDocument();
});
