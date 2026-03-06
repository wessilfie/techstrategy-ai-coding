import React, { ReactNode } from 'react';

interface ReplicaUIProps {
    children?: ReactNode; // Where the chat widget will be injected
}

export default function ReplicaUI({ children }: ReplicaUIProps) {
    return (
        <div className="replica-wrapper">
            <header className="cbs-header">
                <div className="cbs-top-nav">
                    <div className="cbs-logo">
                        <span>Columbia Business School</span>
                    </div>
                    <nav className="cbs-global-nav">
                        <a href="#">Degree Programs</a>
                        <a href="#">Admissions</a>
                        <a href="#">Tuition & Financial Aid</a>
                        <a href="#">Campus Life</a>
                        <a href="#">Career Management</a>
                        <button className="cbs-icon-btn search-btn" aria-label="Search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                        <button className="cbs-icon-btn menu-btn" aria-label="Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </nav>
                </div>
                <div className="cbs-sub-nav">
                    <nav className="emba-nav">
                        <a href="#">Academics</a>
                        <a href="#">Options & Locations</a>
                        <a href="#">Admissions</a>
                        <a href="#">Tuition & Financial Aid</a>
                        <a href="#">Student Life</a>
                        <a href="#">Career Support</a>
                        <a href="#" className="cbs-apply-link">Apply</a>
                    </nav>
                </div>
            </header>

            <main className="cbs-main">
                <section className="cbs-hero">
                    <div className="cbs-hero-content">
                        <h1 className="cbs-hero-heading">EMBA</h1>
                        <p className="cbs-hero-subheading">We&apos;re more than just business at Columbia Business School</p>
                    </div>
                </section>

                <section className="cbs-advantage-section">
                    <h2 className="cbs-advantage-title">The Columbia Advantage</h2>

                    <div className="cbs-advantage-grid">
                        {/* Column 1 */}
                        <div className="cbs-advantage-card">
                            <h3 className="cbs-advantage-card-title">Faculty and Academics</h3>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                                alt="Faculty speaking"
                                className="cbs-advantage-image"
                            />
                            <p className="cbs-advantage-text">Executive MBA students earn the same degree as full-time students, benefiting from the same high-level coursework with many of the same professors. Choose from several program options to balance your career, studies, and life schedule.</p>
                            <p className="cbs-advantage-text">All courses are taught by the School&apos;s 150 full-time faculty, thought leaders whose research is transforming the way business is conducted across the world, and by more than 100+ adjunct faculty, practitioners who come directly from the world of business to teach.</p>
                        </div>

                        {/* Column 2 */}
                        <div className="cbs-advantage-card">
                            <h3 className="cbs-advantage-card-title">Where Theory Meets Practice</h3>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
                                alt="Buffett and Gates speaking"
                                className="cbs-advantage-image"
                            />
                            <p className="cbs-advantage-text">We prepare students for career success by connecting their real-world experience from the trading floors, board rooms, and retail stores with our classroom education.</p>
                            <p className="cbs-advantage-text">What&apos;s learned on Friday can be applied on Monday, and Monday&apos;s results can inform Friday&apos;s discussion. This is how leading-edge theory meets real-world practice. Moreover, we understand how and when the business world is shifting, and we regularly introduce new programs that prepare our students for today&apos;s rapidly changing environment.</p>
                        </div>

                        {/* Column 3 */}
                        <div className="cbs-advantage-card">
                            <h3 className="cbs-advantage-card-title">Access</h3>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                alt="Columbia Manhattanville Campus"
                                className="cbs-advantage-image"
                            />
                            <p className="cbs-advantage-text">Located at the very center of business, we offer unparalleled access to leaders across industries, drawing top execs from Fortune 300 companies to tech startups.</p>
                            <p className="cbs-advantage-text">With our guest lecturers, Executives in Residence program, and a multitude of speakers and conferences, we bring critical insights to campus on a daily basis. In fact, more business leaders visit our campus than any other top business school. Plus, with a global alumni network of 48,000+, you&apos;re never far from a Columbia Business School connection.</p>
                        </div>

                        {/* Column 4 */}
                        <div className="cbs-advantage-card">
                            <h3 className="cbs-advantage-card-title">Community</h3>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                                alt="CBS Community"
                                className="cbs-advantage-image"
                            />
                            <p className="cbs-advantage-text">Take one look around our campus and you will see the world reflected in our culture and the content of our work. Students come to Columbia Business School from 90 countries and bring with them every kind of business perspective. You&apos;ll be studying closely with a diverse group of thinkers representing a wide array of industries and interests.</p>
                            <p className="cbs-advantage-text">Whether you arrive from across the globe or on a crosstown bus, your student experience will be defined by much more than your time in the classroom.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="cbs-footer">
                <div className="cbs-footer-top">
                    <p>Columbia Business School</p>
                    <div className="cbs-footer-links">
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
                <div className="cbs-footer-bottom">
                    <p>© {new Date().getFullYear()} Columbia University. All Rights Reserved.</p>
                </div>
            </footer>

            {children}
        </div>
    );
}
