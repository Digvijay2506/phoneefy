import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, X, SearchX } from 'lucide-react';
import type { Phone, Shop } from '../data';
import { searchPhones, brands } from '../data';
import PhoneCard from '../components/PhoneCard';
import StarRating from '../components/StarRating';
import SkeletonCard from '../components/SkeletonCard';

interface SearchScreenProps {
  initialQuery?: string;
  initialFilter?: string;
  onPhoneTap: (phone: Phone) => void;
  onShopTap: (shop: Shop) => void;
  onBack: () => void;
}

const filterOptions = [
  { key: 'all', label: 'All' },
  { key: 'under10k', label: 'Under \u20b910K' },
  { key: '10k20k', label: '\u20b910K\u2013\u20b920K' },
  { key: 'over20k', label: '\u20b920K+' },
  { key: 'imeiVerified', label: 'IMEI Verified' },
];

export default function SearchScreen({
  initialQuery = '',
  initialFilter = 'all',
  onPhoneTap,
  onShopTap,
  onBack,
}: SearchScreenProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [results, setResults] = useState<Phone[]>([]);
  const [matchedShops, setMatchedShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      inputRef.current?.focus();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const { phones: phoneResults, shops: shopResults } = searchPhones(query, activeFilter);
    setResults(phoneResults);
    setMatchedShops(shopResults);
  }, [query, activeFilter]);

  const showBrandChips = !query && activeFilter === 'all';

  return (
    <div className="min-h-full pb-20 bg-[#F5F7FA] screen-enter">
      {/* Search Header */}
      <div className="bg-white px-4 py-3 shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="nav-tap p-1">
            <ArrowLeft size={22} color="#1A1D1F" />
          </button>
          <div className="flex-1 bg-[#F5F7FA] rounded-xl px-4 py-3 flex items-center gap-2.5 border border-[#E5E7EB] focus-within:border-[#1A73E8] focus-within:shadow-[0_0_0_3px_rgba(26,115,232,0.1)] transition-all duration-200">
            <Search size={18} color="#9CA3AF" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search phones, brands, shops..."
              className="flex-1 bg-transparent text-sm text-[#1A1D1F] outline-none placeholder:text-[#9CA3AF]"
            />
            {query && (
              <button onClick={() => setQuery('')} className="nav-tap">
                <X size={16} color="#9CA3AF" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 px-4 mt-3 overflow-x-auto no-scrollbar snap-x">
        {filterOptions.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className="chip-tap snap-start flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 select-none"
            style={{
              background: activeFilter === filter.key ? '#1A73E8' : 'white',
              color: activeFilter === filter.key ? 'white' : '#6B7280',
              border: activeFilter === filter.key ? '1px solid #1A73E8' : '1px solid #E5E7EB',
              boxShadow: activeFilter === filter.key ? '0 4px 12px rgba(26,115,232,0.3)' : 'none',
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Results Area */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        {loading ? (
          <>
            <SkeletonCard type="list" />
            <SkeletonCard type="list" />
            <SkeletonCard type="list" />
          </>
        ) : (
          <>
            {/* Matched Shops */}
            {matchedShops.length > 0 && (
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-[#1A1D1F]">Shops</h3>
                {matchedShops.map((shop) => (
                  <div
                    key={shop.id}
                    onClick={() => onShopTap(shop)}
                    className="card-tap bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3.5 cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(26,115,232,0.08)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[#1A1D1F] truncate">{shop.name}</h4>
                      <p className="text-xs text-[#6B7280] truncate">{shop.address}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <StarRating rating={shop.rating} size={12} />
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
                ))}
              </div>
            )}

            {/* Phone Results */}
            {results.length > 0 ? (
              <div className="flex flex-col gap-3">
                {matchedShops.length > 0 && (
                  <h3 className="text-sm font-semibold text-[#1A1D1F]">Phones</h3>
                )}
                {results.map((phone) => (
                  <PhoneCard
                    key={phone.id}
                    phone={phone}
                    onTap={onPhoneTap}
                    layout="list"
                  />
                ))}
              </div>
            ) : (
              !matchedShops.length && (
                <div className="flex flex-col items-center justify-center pt-16">
                  <SearchX size={48} color="#9CA3AF" />
                  <p className="text-sm text-[#6B7280] mt-4">No Results Found</p>
                  <p className="text-xs text-[#9CA3AF] mt-1">Try different keywords or filters</p>
                </div>
              )
            )}

            {/* Brand Quick Chips */}
            {showBrandChips && (
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-sm font-semibold text-[#1A1D1F]">Browse by Brand</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => setQuery(brand.name)}
                      className="chip-tap flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E5E7EB] text-sm font-medium text-[#1A1D1F] shadow-sm"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: brand.color + '14',
                          color: brand.color,
                        }}
                      >
                        {brand.letter}
                      </div>
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
