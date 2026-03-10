import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { LightsCard } from './LightsCard';

// Mock Echarts to avoid rendering complexities in jsdom
vi.mock('echarts-for-react', () => ({
    default: () => <div data-testid="mock-echarts"></div>
}));

test('renders LightsCard and its major elements', () => {
    render(<LightsCard />);

    // Check for the title
    expect(screen.getByText('Lights')).toBeInTheDocument();

    // Check for the dynamic color temperature text
    expect(screen.getByText(/4300k/i)).toBeInTheDocument();
});
