import clsx from "clsx";

export default function Sidebar() {
    return (
        <div className="w-[90px] h-full rounded-t-[30px] rounded-br-[30px] rounded-bl-[30px] flex flex-col items-center py-10 bg-[var(--color-sidebar-bg)] border border-[var(--color-card-border)] backdrop-blur-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20">
            {/* Navigation */}
            <nav className="flex flex-col gap-14 w-full mt-32">
                <NavItem iconUrl="/images/nav-icons/home.svg" label="Home" active />
                <NavItem iconUrl="/images/nav-icons/pie.svg" label="Analyse" />
                <NavItem iconUrl="/images/nav-icons/tiles.svg" label="Control" />
            </nav>

        </div>
    );
}

function NavItem({ iconUrl, label, active = false }: { iconUrl: string, label: string, active?: boolean }) {
    return (
        <div className={clsx("flex flex-col items-center gap-2 cursor-pointer transition-colors duration-300 relative", active ? "text-[var(--color-accent-cyan)]" : "text-[var(--color-text-muted)] hover:text-white")}>
            {active && (
                <div className="absolute -left-[1px] top-1/2 -translate-y-[60%] w-[3px] h-8 bg-[var(--color-accent-cyan)] rounded-r-[4px] shadow-[0_0_8px_var(--color-accent-cyan)]"></div>
            )}
            <div
                className="w-[26px] h-[26px] bg-current"
                style={{
                    WebkitMaskImage: `url(${iconUrl})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(${iconUrl})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center'
                }}
            />
            <span className="text-[12px] font-medium tracking-wide mt-1">{label}</span>
        </div>
    );
}
