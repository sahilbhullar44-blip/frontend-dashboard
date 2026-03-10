import { atom } from 'jotai';

export type CardId = 'lights' | 'water' | 'carbon' | 'energy' | 'footfall';

// Initial state with all cards active
export const activeCardsAtom = atom<CardId[]>([
    'lights',
    'water',
    'carbon',
    'energy',
    'footfall'
]);

export const toggleCardAtom = atom(
    null,
    (get, set, id: CardId) => {
        const cards = get(activeCardsAtom);
        if (cards.includes(id)) {
            set(activeCardsAtom, cards.filter(c => c !== id));
        } else {
            // Keep the original order
            const order: CardId[] = ['lights', 'water', 'carbon', 'energy', 'footfall'];
            const newCards = [...cards, id];
            set(activeCardsAtom, newCards.sort((a, b) => order.indexOf(a) - order.indexOf(b)));
        }
    }
);
