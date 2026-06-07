import { ArrowLeft, Phone as PhoneIcon, MessageCircle, Store } from 'lucide-react';
import type { Shop, Phone } from '../data';
import { getPhonesByShop } from '../data';
import PhoneCard from '../components/PhoneCard';
import StarRating from '../components/StarRating';
import SkeletonCard from '../components/SkeletonCard';
import { useState, useEffect } from 'react';

interface ShopProfileScreenProps {
  shop: Shop;
  onBack: () => void;
  onPhoneTap: (phone: Phone) => void;
}

export default function ShopProfileScreen({ shop, onBack, onPhoneTap }: ShopProfileScreenProps) {
  const [loading, setLoading] = useState(true);
  const shopPhones = getPhonesByShop(shop.id);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full pb-24 bg-[#F5F7FA] screen-enter">
      {/* Blue Gradient Header */}
      <div
        className="px-4 pt-4 pb-6"
        style={{
          background: 'linear-gradient(135deg, #1A73E8 0%, #0D47A1 100%)',
        }}
      >
        <button onClick={onBack} className="nav-tap p-1">
          <ArrowLeft size={22} color="white" />
        </button>

        <div className="mt-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Store size={32} color="white" />
          </div>
          <div>
            <h1 className="text-[22px] font-bold text-white">{shop.name}</h1>
            <p className="text-[13px] text-white/80 truncate">{shop.address}</p>
            <p className="text-xs text-white/60 mt-0.5">{shop.distance}</p>
          </div>
        </div>

        <div className="mt-3 inline-flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-lg">
          <StarRating rating={shop.rating} size={14} />
        </div>

        <div className="mt-3">
          <p className="text-sm text-white/80">Owner: {shop.ownerName}</p>
          <p className="text-sm text-white/80">{shop.phone}</p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-5">
          <a
            href={`tel:${shop.phone}`}
            className="btn-tap flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#1A73E8] text-sm font-semibold"
          >
            <PhoneIcon size={16} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${shop.phone.replace(/\s/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tap flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
            style={{ background: 'rgba(37,211,102,0.9)', color: 'white' }}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Listings Section */}
      <div className="px-4 mt-5">
        <h2 className="text-xl font-bold text-[#1A1D1F] mb-3">
          Listings by this shop
          <span className="text-sm font-normal text-[#6B7280] ml-2">({shop.listingCount})</span>
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            shopPhones.map((phone) => (
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
    </div>
  );
}
