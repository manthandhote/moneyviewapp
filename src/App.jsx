import React, { useState } from 'react';
import {
    Menu,
    Zap,
    Home,
    History,
    User,
    Settings,
    CreditCard,
    Home as HomeIcon,
    Car,
    GraduationCap,
    Coins,
    Wallet,
    Battery,
    Wifi,
    Signal
} from 'lucide-react';

const App = () => {
    const [reminderDays, setReminderDays] = useState(7);
    const [showAllInstallments, setShowAllInstallments] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    const installments = [
        { date: '08 Jan 2026', amount: 2570, status: 'Overdue', penalty: 200 },
        { date: '08 Feb 2026', amount: 2370, status: 'Pending', penalty: 0 },
        { date: '08 Mar 2026', amount: 2370, status: 'Upcoming', penalty: 0 },
        { date: '08 Apr 2026', amount: 2370, status: 'Upcoming', penalty: 0 },
        { date: '08 May 2026', amount: 2370, status: 'Upcoming', penalty: 0 },
        { date: '08 Jun 2026', amount: 2370, status: 'Upcoming', penalty: 0 },
    ];

    const HomeView = () => (
        <>
            {/* Section 1 - Personal Loan Card */}
            <section className="animate-in">
                <div className="card personal-loan-card transition-card">
                    <div className="loan-header">
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '4px' }}>Personal Loan</h2>
                            <span className="badge-overdue">2 Installments Pending</span>
                        </div>
                        <button className="pay-btn">
                            <Zap size={18} fill="currentColor" />
                            Pay Now
                        </button>
                    </div>

                    <div className="loan-stats">
                        <div className="stat-block">
                            <span className="label">Loan Amount</span>
                            <span className="value">₹13,000</span>
                        </div>
                        <div className="stat-block">
                            <span className="label">Total Payable</span>
                            <span className="value">₹14,420</span>
                        </div>
                    </div>

                    <div className="usage-indicator">
                        <div className="usage-bar-container">
                            <div className="usage-bar" style={{ width: '100%' }}></div>
                        </div>
                        <p className="usage-label">100% Disbursed</p>
                    </div>
                </div>
            </section>

            {/* Section 2 - Outstanding Payment */}
            <section className="animate-in" style={{ animationDelay: '0.1s' }}>
                <h2 className="section-title">Outstanding Payment</h2>
                <div className="card bill-card" style={{ borderColor: '#EB4D4B', borderWidth: '1px', borderStyle: 'solid' }}>
                    <div className="bill-info">
                        <div className="bill-stat">
                            <span className="label" style={{ color: '#EB4D4B' }}>Total Overdue (Jan + Feb)</span>
                            <p className="value" style={{ fontSize: '20px' }}>₹4,940</p>
                        </div>
                        <div className="bill-stat">
                            <span className="label">Next Installment: 08 Feb</span>
                            <p className="value">₹2,370</p>
                        </div>
                        <a href="#" className="view-statement">View Statement</a>
                    </div>

                    <div className="countdown-container">
                        <div className="circular-progress" style={{ borderTopColor: '#EB4D4B' }}></div>
                        <span className="countdown-text" style={{ color: '#EB4D4B' }}>5 Days</span>
                        <span className="countdown-subtext">Until Feb 8</span>
                    </div>
                </div>
            </section>

            {/* Section 3 - Apply For Loan Grid Replacement for Home */}
            <section className="animate-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="section-title">Instant Services</h2>
                <div className="loan-grid">
                    <LoanItem icon={<CreditCard size={24} />} label="Top Up" />
                    <LoanItem icon={<GraduationCap size={24} />} label="Insure" />
                    <LoanItem icon={<Wallet size={24} />} label="Redeem" />
                </div>
            </section>
        </>
    );

    const ScheduleView = () => (
        <section className="animate-in">
            <h2 className="section-title">Comprehensive Schedule</h2>
            <div className="installment-list">
                {installments.map((inst, index) => (
                    <div key={index} className="installment-item animate-in" style={{ animationDelay: `${index * 0.05}s` }}>
                        <div className="inst-date-info">
                            <span className="inst-date">{inst.date}</span>
                            <span className={`inst-status status-${inst.status.toLowerCase()}`}>
                                {inst.status}
                            </span>
                        </div>
                        <div className="inst-amount-info">
                            <span className="inst-amount">₹{inst.amount}</span>
                            {inst.penalty > 0 && <span className="inst-penalty">incl. ₹{inst.penalty} penalty</span>}
                        </div>
                    </div>
                ))}
            </div>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '12px', marginTop: '24px' }}>
                Interest rate applied: 14% p.a.
            </p>
        </section>
    );

    const ProfileView = () => (
        <section className="animate-in">
            <h2 className="section-title">My Profile</h2>
            <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="icon-circle" style={{ width: '64px', height: '64px', fontSize: '24px' }}>
                    <User size={32} />
                </div>
                <div>
                    <h3 style={{ fontSize: '18px' }}>Rahul Sharma</h3>
                    <p className="label">+91 98765 43210</p>
                </div>
            </div>
            <div className="installment-list" style={{ marginTop: '24px' }}>
                <div className="installment-item"><span className="inst-date">Personal Details</span><Zap size={16} /></div>
                <div className="installment-item"><span className="inst-date">KYC Documents</span><Zap size={16} /></div>
                <div className="installment-item"><span className="inst-date">Bank Accounts</span><Zap size={16} /></div>
            </div>
        </section>
    );

    const SettingsView = () => (
        <section className="animate-in">
            <h2 className="section-title">Settings</h2>
            <div className="installment-list">
                <div className="installment-item"><span className="inst-date">App Notifications</span><Settings size={16} /></div>
                <div className="installment-item"><span className="inst-date">Security & MPIN</span><Settings size={16} /></div>
                <div className="installment-item"><span className="inst-date">Language</span><Settings size={16} /></div>
                <div className="installment-item" style={{ color: '#EB4D4B' }}><span className="inst-date">Logout</span><Zap size={16} /></div>
            </div>
        </section>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'Home': return <HomeView />;
            case 'Schedule': return <ScheduleView />;
            case 'Profile': return <ProfileView />;
            case 'Settings': return <SettingsView />;
            default: return <HomeView />;
        }
    };

    return (
        <div className="mobile-container">
            {/* Header */}
            <header className="header" style={{ paddingTop: '24px' }}>
                <Menu className="menu-icon" size={24} />
                <h1>{activeTab === 'Home' ? 'Quick Loan' : activeTab}</h1>
            </header>

            {renderContent()}

            {/* Bottom Navigation Bar */}
            <nav className="bottom-nav">
                <NavItem icon={<Home size={24} />} label="Home" active={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
                <NavItem icon={<History size={24} />} label="Schedule" active={activeTab === 'Schedule'} onClick={() => setActiveTab('Schedule')} />
                <NavItem icon={<User size={24} />} label="Profile" active={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')} />
                <NavItem icon={<Settings size={23} />} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
            </nav>
        </div>
    );
};

const LoanItem = ({ icon, label }) => (
    <div className="loan-item">
        <div className="icon-circle">
            {icon}
        </div>
        <span className="loan-label">{label}</span>
    </div>
);

const NavItem = ({ icon, label, active, onClick }) => (
    <div className={`nav-item ${active ? 'active' : ''}`} onClick={onClick}>
        {icon}
        <span>{label}</span>
    </div>
);

export default App;
