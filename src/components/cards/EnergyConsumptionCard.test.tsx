import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { EnergyConsumptionCard } from './EnergyConsumptionCard';

vi.mock('echarts-for-react', () => ({
    default: () => <div data-testid="mock-echarts"></div>
}));

test('renders EnergyConsumptionCard', () => {
    render(<EnergyConsumptionCard />);

    expect(screen.getByText('Energy Consumption')).toBeInTheDocument();
    expect(screen.getByText('Last 7 Day')).toBeInTheDocument();
});
