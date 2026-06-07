import { ArrowLeft, Construction } from 'lucide-react';

interface PlaceholderScreenProps {
  title: string;
  onBack: () => void;
}

export default function PlaceholderScreen({ title, onBack }: PlaceholderScreenProps) {
  return (
    <div className="min-h-full pb-20 bg-[#F5F7FA] screen-enter">
      <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="nav-tap p-1">
          <ArrowLeft size={22} color="#1A1D1F" />
        </button>
        <h1 className="text-base font-semibold text-[#1A1D1F]">{title}</h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-24 px-4">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: 'rgba(26,115,232,0.08)' }}
        >
          <Construction size={36} color="#1A73E8" />
        </div>
        <h2 className="text-lg font-semibold text-[#1A1D1F]">Coming Soon</h2>
        <p className="text-sm text-[#6B7280] mt-2 text-center">
          This feature is under development. Check back later!
        </p>
      </div>
    </div>
  );
}
