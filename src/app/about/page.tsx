export default function About() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 48px',
            gap: '20px',
            width: '100vw'
        }}>
            <h1 style={{
                fontSize: '2rem',
                fontWeight: '600'
            }}>About Us</h1>
            <p style={{
                fontSize: '1rem',
                fontWeight: '600',
                textAlign: 'center'
            }}>
                Paxofi is a furniture store that sells high-quality furniture to customers.
                We offer a wide range of furniture for every room in your home, including
                sofas, beds, tables, chairs, and more. Our furniture is made from
                high-quality materials and is designed to last. We offer a wide range of
                colors, styles, and sizes to choose from, so you can find the perfect
                furniture for your home.
            </p>
        </main>
    );
}