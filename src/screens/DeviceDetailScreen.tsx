import { ArrowLeft, Check, Phone as PhoneIcon, MessageCircle, Store } from 'lucide-react';
import type { Phone, Shop } from '../data';
import { formatPrice, getShopById } from '../data';
import EMICalculator from '../components/EMICalculator';
import StarRating from '../components/StarRating';

interface DeviceDetailScreenProps {
  phone: Phone;
  onBack: () => void;
  onShopTap: (shop: Shop) => void;
}

export default function DeviceDetailScreen({ phone, onBack, onShopTap }: DeviceDetailScreenProps) {
  const shop = getShopById(phone.shopId);

  const specs = [
    { label: 'STORAGE', value: phone.storage },
    { label: 'RAM', value: phone.ram },
    { label: 'CONDITION', value: phone.condition },
    { label: 'COLOR', value: phone.color },
    { label: 'ACCESSORIES', value: phone.accessories.join(', ') },
    { label: 'LISTED', value: `${phone.listedDaysAgo} days ago` },
    ...(phone.batteryHealth
      ? [{ label: 'BATTERY HEALTH', value: `${phone.batteryHealth}%` }]
      : []),
  ];

  return (
    <div className="min-h-full pb-24 bg-[#F5F7FA] screen-enter">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 sticky top-0 z-40 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="nav-tap p-1">
          <ArrowLeft size={22} color="#1A1D1F" />
        </button>
        <h1 className="text-base font-semibold text-[#1A1D1F]">Phone Details</h1>
      </div>

      {/* Image Section */}
      <div className="w-full h-[280px] bg-gradient-to-br from-[#F0F4F8] to-[#E2E8F0] flex items-center justify-center relative overflow-hidden">
        <img
          src={phone.image}
          alt={phone.name}
          className="max-w-[70%] max-h-[90%] object-contain"
          style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.15))' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      {/* Info Section */}
      <div className="bg-white px-4 py-4">
        <h2 className="text-[22px] font-bold text-[#1A1D1F] leading-tight">{phone.name}</h2>
        <p className="text-sm text-[#6B7280] mt-1.5">
          {phone.storage} &bull; {phone.ram} RAM &bull; {phone.color}
        </p>

        <div className="flex items-baseline gap-2.5 mt-3">
          <span className="text-2xl font-bold text-[#1A1D1F]">{formatPrice(phone.price)}</span>
          <span className="text-sm text-[#9CA3AF] line-through">{formatPrice(phone.originalPrice)}</span>
        </div>

        {phone.imeiVerified && (
          <span className="inline-flex items-center gap-1.5 bg-[rgba(26,122,74,0.1)] text-[#1A7A4A] px-4 py-2 rounded-full text-sm font-semibold mt-3">
            <Check size={16} strokeWidth={3} />
            IMEI Verified &bull; Clean &amp; Unblocked
          </span>
        )}

        {/* Specs Grid */}
        <div className="mt-4 bg-[#F5F7FA] rounded-2xl p-4 grid grid-cols-2 gap-4">
          {specs.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-[#9CA3AF] uppercase tracking-wide">
                {spec.label}
              </span>
              <span className="text-sm font-semibold text-[#1A1D1F]">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EMI Calculator */}
      <div className="px-4 mt-3">
        <EMICalculator price={phone.price} />
      </div>

      {/* Listed By Section */}
      {shop && (
        <div className="px-4 mt-3">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="text-sm font-semibold text-[#1A1D1F] mb-3">Listed By</h3>

            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(26,115,232,0.08)' }}
              >
                <Store size={24} color="#1A73E8" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-semibold text-[#1A1D1F] truncate">{shop.name}</h4>
                <p className="text-xs text-[#6B7280] truncate">{shop.address}</p>
                <p className="text-[11px] text-[#9CA3AF]">{shop.distance}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={shop.rating} size={14} />
              <span className="text-xs text-[#6B7280]">&bull;</span>
              <span className="text-xs text-[#6B7280]">{shop.ownerName}</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-4">
              <a
                href={`tel:${shop.phone}`}
                className="btn-tap flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(26,115,232,0.08)',
                  color: '#1A73E8',
                }}
              >
                <PhoneIcon size={16} />
                Call
              </a>
              <a
                href={`https://wa.me/${shop.phone.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tap flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(37,211,102,0.1)',
                  color: '#25D366',
                }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => onShopTap(shop)}
              className="btn-tap w-full mt-2.5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-md"
              style={{
                background: 'linear-gradient(135deg, #1A73E8 0%, #0D47A1 100%)',
                boxShadow: '0 4px 12px rgba(26,115,232,0.3)',
              }}
            >
              View Shop Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
