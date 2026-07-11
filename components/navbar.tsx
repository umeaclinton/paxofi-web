import link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-flex items-center justify-between py-6 px-12 boarder-b boarder-gray-200/50">
            {/* Brand Logo */}
            <div className="flex items-center gap-12">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">Paxofi</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex intems-center gap-8 text-sm font-medium text-gray-600">
                <link href="/products" className="hover:text-black transition-colors">Products</link>
                <link href="/products" className="hover:text-black transition-colors">About Us</link>
                <link href="/products" className="hover:text-black transition-colors">Our Store</link>
                <link href="/products" className="hover:text-black transition-colors">Delivery</link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6 text-gray-700">
                <Search className='w-5 h-5 cusor-pointer hover:text-black transition-colors' />
                <User className='w-5 h-5 cusor-pointer hover:text-black transition-colors' />
                <ShoppingCart className='w-5 h-5 cusor-pointer hover:text-black transition-colors' />
            </div>
        </nav>
    );
}