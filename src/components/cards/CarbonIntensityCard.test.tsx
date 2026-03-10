import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { CarbonIntensityCard } from './CarbonIntensityCard';

vi.mock('echarts-for-react', () => ({
    default: () => <div data-testid="mock-echarts"></div>
}));

test('renders CarbonIntensityCard', () => {
    render(<CarbonIntensityCard />);

    expect(screen.getByText('Carbon Intensity')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.getByText(/95gm/i)).toBeInTheDocument();
});
