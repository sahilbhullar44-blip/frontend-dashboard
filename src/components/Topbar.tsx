"use client";

import { useSetAtom, useAtomValue } from "jotai";
import { activeCardsAtom, toggleCardAtom, type CardId } from "@/store/dashboardStore";
import { Settings } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
    const activeCards = useAtomValue(activeCardsAtom);
    const toggleCard = useSetAtom(toggleCardAtom);
    const [showMenu, setShowMenu] = useState(false);

    const availableCards: { id: CardId, label: string }[] = [
        { id: 'lights', label: 'Lights' },
        { id: 'water', label: 'Water' },
        { id: 'carbon', label: 'Carbon Base' },
        { id: 'energy', label: 'Energy' },
        { id: 'footfall', label: 'Footfall' },
    ];

    return (
        <div className="w-full flex justify-between items-center h-[50px] mb-6">
            {/* Logo */}
            <div className="flex items-center gap-2 relative">
                <img src="/images/ds-logo.svg" alt="DigiSpace Logo" className="h-[26px]" />
            </div>

            {/* Controls & Avatar */}
            <div className="flex flex-row items-center gap-4">
                {/* Control Dropdown */}
                <div className="relative">
                    <button onClick={() => setShowMenu(!showMenu)} className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 transition backdrop-blur-md shadow-lg">
                        <Settings size={18} className="text-white/70" />
                    </button>
                    {showMenu && (
                        <div className="absolute right-0 top-12 w-48 bg-[#0a0f0f]/95 border border-[var(--color-card-border)] rounded-[16px] shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-3 z-50">
                            <h4 className="text-white/80 text-[11px] font-bold mb-2 px-2 uppercase tracking-widest">Dashboard Cards</h4>
                            <div className="flex flex-col gap-1">
                                {availableCards.map(card => (
                                    <label key={card.id} className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer transition">
                                        <input
                                            type="checkbox"
                                            checked={activeCards.includes(card.id)}
                                            onChange={() => toggleCard(card.id)}
                                            className="w-3.5 h-3.5 accent-[var(--color-accent-cyan)] cursor-pointer"
                                        />
                                        <span className="text-white/90 text-[13px] font-medium tracking-wide">{card.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-[2px] border-[var(--color-accent-cyan)] p-[3px] bg-white/5 backdrop-blur-sm mr-2">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img
                            src="https://i.pravatar.cc/150?img=11"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
