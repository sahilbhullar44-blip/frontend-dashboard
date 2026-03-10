import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { FootfallCard } from './FootfallCard';

vi.mock('echarts-for-react', () => ({
    default: () => <div data-testid="mock-echarts"></div>
}));

test('renders FootfallCard', () => {
    render(<FootfallCard />);

    expect(screen.getByText('Footfall')).toBeInTheDocument();
    expect(screen.getByText('Last 7 Day')).toBeInTheDocument();
});
