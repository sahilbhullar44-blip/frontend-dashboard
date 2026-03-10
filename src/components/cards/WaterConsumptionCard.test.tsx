import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { WaterConsumptionCard } from './WaterConsumptionCard';

test('renders WaterConsumptionCard', () => {
    render(<WaterConsumptionCard />);

    expect(screen.getByText('Water Consumption')).toBeInTheDocument();
    expect(screen.getByText('Yesterday')).toBeInTheDocument();
    expect(screen.getByText(/8\.42/i)).toBeInTheDocument();
});
