export default function AboutPage() {
    return (
        <main style={{ backgroundColor: '#F8F6F0', minHeight: '100vh' }}>

            {/* ── HERO SECTION ── */}
            <section style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '80px 48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <p style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#6b7280',
                    marginBottom: '20px'
                }}>
                    WHO WE ARE
                </p>
                <h1 style={{
                    fontSize: '56px',
                    fontWeight: '700',
                    lineHeight: '1.15',
                    color: '#1A1A1A',
                    maxWidth: '700px',
                    marginBottom: '24px'
                }}>
                    Building Technology That Feels Human
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: '#6b7280',
                    lineHeight: '1.8',
                    maxWidth: '600px',
                    marginBottom: '48px'
                }}>
                    At Paxofi, we believe great technology should disappear into the background —
                    empowering people without getting in the way.
                </p>

                {/* Hero Image */}
                <div style={{
                    width: '100%',
                    height: '480px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backgroundColor: '#e5e7eb'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                        alt="Paxofi team at work"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── STATS SECTION ── */}
            <section style={{
                backgroundColor: '#1A1A1A',
                padding: '64px 48px',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '40px',
                    textAlign: 'center'
                }}>
                    {[
                        { value: '15K+', label: 'Happy Clients' },
                        { value: '8+', label: 'Years of Experience' },
                        { value: '120+', label: 'Products Shipped' },
                        { value: '98%', label: 'Satisfaction Rate' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p style={{ fontSize: '48px', fontWeight: '700', color: '#ffffff', margin: '0' }}>
                                {stat.value}
                            </p>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '8px' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MISSION SECTION ── */}
            <section style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '80px 48px',
                display: 'flex',
                gap: '80px',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '280px' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '24px' }}>
                        Our Mission Is Simple
                    </h2>
                    <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.9', marginBottom: '20px' }}>
                        We exist to build digital products and technology solutions that solve real problems
                        for real people. No fluff, no buzzwords — just thoughtful engineering and
                        beautiful design working together.
                    </p>
                    <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.9' }}>
                        Founded with a commitment to quality and innovation, Paxofi Technology has
                        grown into a trusted partner for businesses that want to move fast without
                        breaking things.
                    </p>
                </div>
                <div style={{ flex: '1', minWidth: '280px', height: '400px', borderRadius: '24px', overflow: 'hidden' }}>
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                        alt="Paxofi team collaborating"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── VALUES SECTION ── */}
            <section style={{
                backgroundColor: '#f3f4f6',
                padding: '80px 48px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#1A1A1A', marginBottom: '16px' }}>
                        What We Stand For
                    </h2>
                    <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '56px' }}>
                        These are the principles that guide every decision we make.
                    </p>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {[
                            { icon: '🎯', title: 'Purpose Driven', desc: 'Every feature we build has a clear reason behind it.' },
                            { icon: '⚡', title: 'Speed & Quality', desc: 'We ship fast but never compromise on craftsmanship.' },
                            { icon: '🤝', title: 'Client First', desc: 'Your success is the only metric that truly matters to us.' },
                            { icon: '🔒', title: 'Trust & Transparency', desc: 'We communicate openly and deliver on every promise.' },
                        ].map((value) => (
                            <div key={value.title} style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                padding: '40px 32px',
                                flex: '1',
                                minWidth: '220px',
                                maxWidth: '260px',
                                textAlign: 'left',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
                            }}>
                                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{value.icon}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A1A', marginBottom: '12px' }}>
                                    {value.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM SECTION ── */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#1A1A1A', marginBottom: '16px' }}>
                    Meet the Team
                </h2>
                <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '56px' }}>
                    The brilliant minds building Paxofi every single day.
                </p>
                <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {[
                        { name: 'Amara Osei', role: 'CEO & Co-Founder', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Kofi Mensah', role: 'CTO & Co-Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
                        { name: 'Zara Williams', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
                        { name: 'David Eze', role: 'Lead Engineer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
                    ].map((member) => (
                        <div key={member.name} style={{ textAlign: 'center', width: '200px' }}>
                            <div style={{
                                width: '160px', height: '160px', borderRadius: '50%',
                                overflow: 'hidden', margin: '0 auto 16px',
                                border: '4px solid #e5e7eb'
                            }}>
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1A1A1A', margin: '0 0 4px' }}>
                                {member.name}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#6b7280', margin: '0' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}