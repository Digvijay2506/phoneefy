import { useState, useEffect } from 'react';
import { Bell, MapPin, Search } from 'lucide-react';
import { phones } from '../data';
import type { Phone } from '../data';
import BrandChip from '../components/BrandChip';
import AdSlider from '../components/AdSlider';
import PhoneCard from '../components/PhoneCard';
import SkeletonCard from '../components/SkeletonCard';

interface HomeScreenProps {
  onPhoneTap: (phone: Phone) => void;
  onSearchTap: () => void;
  onBrandTap: (brand: string) => void;
  onViewAllTap: () => void;
}

export default function HomeScreen({ onPhoneTap, onSearchTap, onBrandTap, onViewAllTap }: HomeScreenProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full pb-20">
      {/* Top Bar */}
      <div
        className="px-4 pt-4 pb-4"
        style={{
          background: 'linear-gradient(135deg, #1A73E8 0%, #0D47A1 100%)',
          borderRadius: '0 0 20px 20px',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={16} color="white" />
            <span className="text-sm font-semibold text-white">Pune, Maharashtra</span>
          </div>
          <button className="nav-tap relative p-1">
            <Bell size={22} color="white" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Search Bar */}
        <div
          onClick={onSearchTap}
          className="mt-3 bg-white rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer shadow-sm"
        >
          <Search size={18} color="#9CA3AF" />
          <span className="text-sm text-[#9CA3AF]">Search phones, brands, shops...</span>
        </div>
      </div>

      {/* Brand Chips */}
      <div className="mt-4">
        <BrandChip onTap={onBrandTap} />
      </div>

      {/* Ad Slider */}
      <div className="mt-4">
        <AdSlider />
      </div>

      {/* Phones Near You */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1A1D1F]">Phones Near You</h2>
          <button
            onClick={onViewAllTap}
            className="text-sm font-medium text-[#1A73E8] btn-tap"
          >
            View All
          </button>
        </div>
      </div>

      <div className="mt-3 px-4 grid grid-cols-2 gap-3">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          phones.map((phone) => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              onTap={onPhoneTap}
              layout="grid"
            />
          ))
        )}
      </div>
    </div>
  );
}
