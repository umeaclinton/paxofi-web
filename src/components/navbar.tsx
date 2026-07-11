import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 48px',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#F8F6F0'
        }}>

            {/* Brand Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                    width: '28px', height: '28px', backgroundColor: 'black',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>+</span>
                </div>
                <span style={{ fontSize: '18px', fontWeight: '600' }}>Paxofi</span>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <Link href="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Products</Link>
                <Link href="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>About Us</Link>
                <Link href="/store" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Our Store</Link>
                <Link href="/delivery" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Delivery</Link>
            </div>

            {/* Right Side Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#374151' }}>
                <Search size={20} style={{ cursor: 'pointer' }} />
                <User size={20} style={{ cursor: 'pointer' }} />
                <ShoppingCart size={20} style={{ cursor: 'pointer' }} />
            </div>

        </nav>
    );
}