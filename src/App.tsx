import { useState, useCallback, useRef, useEffect } from 'react';
import type { Phone, Shop } from './data';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DeviceDetailScreen from './screens/DeviceDetailScreen';
import ShopProfileScreen from './screens/ShopProfileScreen';
import AllShopsScreen from './screens/AllShopsScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import BottomNav from './components/BottomNav';

type ScreenName = 'home' | 'search' | 'deviceDetail' | 'shopProfile' | 'allShops' | 'deals' | 'profile';

interface NavigationState {
  screen: ScreenName;
  phone?: Phone;
  shop?: Shop;
  searchQuery?: string;
}

export default function App() {
  const [history, setHistory] = useState<NavigationState[]>([{ screen: 'home' }]);
  const [activeTab, setActiveTab] = useState('home');
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScreen = history[history.length - 1];

  const navigateTo = useCallback((state: NavigationState) => {
    setHistory((prev) => [...prev, state]);
  }, []);

  const goBack = useCallback(() => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  const handleTabChange = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      let screen: ScreenName = 'home';
      switch (tab) {
        case 'home':
          screen = 'home';
          break;
        case 'search':
          screen = 'search';
          break;
        case 'shops':
          screen = 'allShops';
          break;
        case 'deals':
          screen = 'deals';
          break;
        case 'profile':
          screen = 'profile';
          break;
      }
      setHistory([{ screen }]);
    },
    []
  );

  const handlePhoneTap = useCallback(
    (phone: Phone) => {
      navigateTo({ screen: 'deviceDetail', phone });
    },
    [navigateTo]
  );

  const handleShopTap = useCallback(
    (shop: Shop) => {
      navigateTo({ screen: 'shopProfile', shop });
    },
    [navigateTo]
  );

  const handleSearchTap = useCallback(() => {
    navigateTo({ screen: 'search' });
  }, [navigateTo]);

  const handleBrandTap = useCallback(
    (brand: string) => {
      navigateTo({ screen: 'search', searchQuery: brand });
    },
    [navigateTo]
  );

  const handleViewAllTap = useCallback(() => {
    navigateTo({ screen: 'search' });
  }, [navigateTo]);

  // Scroll to top on screen change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [currentScreen.screen]);

  const renderScreen = () => {
    switch (currentScreen.screen) {
      case 'home':
        return (
          <HomeScreen
            onPhoneTap={handlePhoneTap}
            onSearchTap={handleSearchTap}
            onBrandTap={handleBrandTap}
            onViewAllTap={handleViewAllTap}
          />
        );
      case 'search':
        return (
          <SearchScreen
            initialQuery={currentScreen.searchQuery || ''}
            onPhoneTap={handlePhoneTap}
            onShopTap={handleShopTap}
            onBack={goBack}
          />
        );
      case 'deviceDetail':
        if (!currentScreen.phone) return null;
        return (
          <DeviceDetailScreen
            phone={currentScreen.phone}
            onBack={goBack}
            onShopTap={handleShopTap}
          />
        );
      case 'shopProfile':
        if (!currentScreen.shop) return null;
        return (
          <ShopProfileScreen
            shop={currentScreen.shop}
            onBack={goBack}
            onPhoneTap={handlePhoneTap}
          />
        );
      case 'allShops':
        return <AllShopsScreen onShopTap={handleShopTap} />;
      case 'deals':
        return <PlaceholderScreen title="Deals" onBack={() => handleTabChange('home')} />;
      case 'profile':
        return <PlaceholderScreen title="Profile" onBack={() => handleTabChange('home')} />;
      default:
        return null;
    }
  };

  const showNav = ['home', 'allShops', 'deals', 'profile'].includes(currentScreen.screen);

  return (
    <div className="min-h-screen w-full bg-[#E8ECF0] flex justify-center">
      <div
        ref={containerRef}
        className="w-full max-w-[390px] min-h-screen bg-[#F5F7FA] relative overflow-x-hidden"
        style={{
          boxShadow: '0 0 40px rgba(0,0,0,0.15)',
        }}
      >
        {renderScreen()}

        {showNav && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </div>
  );
}
