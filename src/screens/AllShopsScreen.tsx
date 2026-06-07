import { useState, useEffect } from 'react';
import { Search, Store } from 'lucide-react';
import type { Shop } from '../data';
import { shops } from '../data';
import StarRating from '../components/StarRating';
import SkeletonCard from '../components/SkeletonCard';

interface AllShopsScreenProps {
  onShopTap: (shop: Shop) => void;
}

export default function AllShopsScreen({ onShopTap }: AllShopsScreenProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredShops = query
    ? shops.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.address.toLowerCase().includes(query.toLowerCase())
      )
    : shops;

  return (
    <div className="min-h-full pb-20 bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-[#E5E7EB] sticky top-0 z-40">
        <h1 className="text-xl font-bold text-[#1A1D1F]">Shops Near You</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-4">
        <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 flex items-center gap-2.5 focus-within:border-[#1A73E8] focus-within:shadow-[0_0_0_3px_rgba(26,115,232,0.1)] transition-all duration-200">
          <Search size={18} color="#9CA3AF" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shops by name..."
            className="flex-1 bg-transparent text-sm text-[#1A1D1F] outline-none placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      {/* Shops List */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        {loading ? (
          <>
            <SkeletonCard type="shop" />
            <SkeletonCard type="shop" />
            <SkeletonCard type="shop" />
            <SkeletonCard type="shop" />
          </>
        ) : filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <div
              key={shop.id}
              onClick={() => onShopTap(shop)}
              className="card-tap bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3.5 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,115,232,0.08)' }}
              >
                <Store size={24} color="#1A73E8" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-[#1A1D1F] truncate">{shop.name}</h3>
                <p className="text-xs text-[#6B7280] truncate mt-0.5">{shop.address}</p>
                <div className="flex items-center gap-3 mt-1">
                  <StarRating rating={shop.rating} size={12} />
                  <span className="text-[11px] text-[#6B7280]">{shop.listingCount} phones</span>
                  <span className="text-[11px] text-[#9CA3AF]">{shop.distance}</span>
                </div>
              </div>
              <button
                className="px-3.5 py-2 rounded-xl text-xs font-semibold flex-shrink-0 transition-all duration-200"
                style={{
                  background: 'rgba(26,115,232,0.08)',
                  color: '#1A73E8',
                }}
              >
                View
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-16">
            <Store size={48} color="#9CA3AF" />
            <p className="text-sm text-[#6B7280] mt-4">No shops found</p>
            <p className="text-xs text-[#9CA3AF] mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}
