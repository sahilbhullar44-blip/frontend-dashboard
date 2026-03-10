import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Sidebar from './Sidebar';

test('renders Sidebar with links', () => {
    render(<Sidebar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Analyse')).toBeInTheDocument();
    expect(screen.getByText('Control')).toBeInTheDocument();
});
