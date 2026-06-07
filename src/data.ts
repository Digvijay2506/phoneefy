export interface Phone {
  id: string;
  name: string;
  brand: string;
  model: string;
  storage: string;
  ram: string;
  color: string;
  condition: string;
  price: number;
  originalPrice: number;
  imeiVerified: boolean;
  batteryHealth?: number;
  accessories: string[];
  shopId: string;
  image: string;
  listedDaysAgo: number;
}

export interface Shop {
  id: string;
  name: string;
  address: string;
  distance: string;
  ownerName: string;
  phone: string;
  rating: number;
  listingCount: number;
  phoneIds: string[];
}

export const brands = [
  { name: 'Samsung', letter: 'S', color: '#1428A0' },
  { name: 'Apple', letter: 'A', color: '#1C1C1E' },
  { name: 'Vivo', letter: 'V', color: '#415FFF' },
  { name: 'Oppo', letter: 'O', color: '#1D4ED8' },
  { name: 'Realme', letter: 'R', color: '#F97316' },
  { name: 'Xiaomi', letter: 'X', color: '#FF6900' },
  { name: 'OnePlus', letter: '1', color: '#F5010C' },
  { name: 'Motorola', letter: 'M', color: '#004B87' },
];

export const phones: Phone[] = [
  {
    id: 'p1',
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    model: 'Galaxy S21',
    storage: '128GB',
    ram: '8GB',
    color: 'Phantom Gray',
    condition: 'Excellent',
    price: 18999,
    originalPrice: 69999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Case'],
    shopId: 's1',
    image: '/phones/samsung-s21.jpg',
    listedDaysAgo: 2,
  },
  {
    id: 'p2',
    name: 'iPhone 12',
    brand: 'Apple',
    model: 'iPhone 12',
    storage: '128GB',
    ram: '4GB',
    color: 'Black',
    condition: 'Excellent',
    price: 24999,
    originalPrice: 79900,
    imeiVerified: true,
    batteryHealth: 89,
    accessories: ['Charger', 'Cable', 'Box'],
    shopId: 's2',
    image: '/phones/iphone-12.jpg',
    listedDaysAgo: 1,
  },
  {
    id: 'p3',
    name: 'iPhone 13',
    brand: 'Apple',
    model: 'iPhone 13',
    storage: '256GB',
    ram: '4GB',
    color: 'Midnight',
    condition: 'Like New',
    price: 34999,
    originalPrice: 89900,
    imeiVerified: true,
    batteryHealth: 94,
    accessories: ['Charger', 'Cable', 'Box', 'Case'],
    shopId: 's2',
    image: '/phones/iphone-13.jpg',
    listedDaysAgo: 3,
  },
  {
    id: 'p4',
    name: 'Vivo V25',
    brand: 'Vivo',
    model: 'V25',
    storage: '256GB',
    ram: '12GB',
    color: 'Blue',
    condition: 'Good',
    price: 16999,
    originalPrice: 31999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable'],
    shopId: 's3',
    image: '/phones/vivo-v25.jpg',
    listedDaysAgo: 5,
  },
  {
    id: 'p5',
    name: 'Oppo Reno8',
    brand: 'Oppo',
    model: 'Reno8',
    storage: '256GB',
    ram: '8GB',
    color: 'Gold',
    condition: 'Excellent',
    price: 19999,
    originalPrice: 29999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Case'],
    shopId: 's4',
    image: '/phones/oppo-reno8.jpg',
    listedDaysAgo: 1,
  },
  {
    id: 'p6',
    name: 'Realme GT',
    brand: 'Realme',
    model: 'GT',
    storage: '256GB',
    ram: '12GB',
    color: 'Racing Yellow',
    condition: 'Excellent',
    price: 17999,
    originalPrice: 37999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Box'],
    shopId: 's5',
    image: '/phones/realme-gt.jpg',
    listedDaysAgo: 4,
  },
  {
    id: 'p7',
    name: 'Xiaomi 12',
    brand: 'Xiaomi',
    model: '12',
    storage: '256GB',
    ram: '12GB',
    color: 'Purple',
    condition: 'Good',
    price: 22999,
    originalPrice: 49999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable'],
    shopId: 's6',
    image: '/phones/xiaomi-12.jpg',
    listedDaysAgo: 6,
  },
  {
    id: 'p8',
    name: 'OnePlus 10 Pro',
    brand: 'OnePlus',
    model: '10 Pro',
    storage: '256GB',
    ram: '12GB',
    color: 'Emerald Green',
    condition: 'Excellent',
    price: 29999,
    originalPrice: 66999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Box', 'Case'],
    shopId: 's7',
    image: '/phones/oneplus-10.jpg',
    listedDaysAgo: 2,
  },
  {
    id: 'p9',
    name: 'Motorola Edge 30',
    brand: 'Motorola',
    model: 'Edge 30',
    storage: '128GB',
    ram: '8GB',
    color: 'Blue',
    condition: 'Good',
    price: 14999,
    originalPrice: 29999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable'],
    shopId: 's8',
    image: '/phones/moto-edge.jpg',
    listedDaysAgo: 7,
  },
  {
    id: 'p10',
    name: 'Samsung Galaxy A53',
    brand: 'Samsung',
    model: 'Galaxy A53',
    storage: '128GB',
    ram: '6GB',
    color: 'Black',
    condition: 'Good',
    price: 12999,
    originalPrice: 38499,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Case'],
    shopId: 's1',
    image: '/phones/samsung-a53.jpg',
    listedDaysAgo: 3,
  },
  {
    id: 'p11',
    name: 'iPhone 11',
    brand: 'Apple',
    model: 'iPhone 11',
    storage: '64GB',
    ram: '4GB',
    color: 'White',
    condition: 'Good',
    price: 16999,
    originalPrice: 54900,
    imeiVerified: true,
    batteryHealth: 82,
    accessories: ['Charger', 'Cable'],
    shopId: 's2',
    image: '/phones/iphone-11.jpg',
    listedDaysAgo: 8,
  },
  {
    id: 'p12',
    name: 'Vivo X80',
    brand: 'Vivo',
    model: 'X80',
    storage: '256GB',
    ram: '12GB',
    color: 'Orange',
    condition: 'Like New',
    price: 38999,
    originalPrice: 59999,
    imeiVerified: true,
    accessories: ['Charger', 'Cable', 'Box', 'Case'],
    shopId: 's3',
    image: '/phones/vivo-x80.jpg',
    listedDaysAgo: 1,
  },
];

export const shops: Shop[] = [
  {
    id: 's1',
    name: 'Galaxy Phone Store',
    address: 'Shop No. 23, FC Road, Pune',
    distance: '1.2 km',
    ownerName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    rating: 4.7,
    listingCount: 2,
    phoneIds: ['p1', 'p10'],
  },
  {
    id: 's2',
    name: 'D.J. Mobiles',
    address: 'Shop No. 45, JM Road, Pune',
    distance: '0.8 km',
    ownerName: 'Deepak Jain',
    phone: '+91 98765 43211',
    rating: 4.9,
    listingCount: 3,
    phoneIds: ['p2', 'p3', 'p11'],
  },
  {
    id: 's3',
    name: 'Vivo World',
    address: 'Shop No. 12, MG Road, Pune',
    distance: '2.1 km',
    ownerName: 'Priya Patel',
    phone: '+91 98765 43212',
    rating: 4.5,
    listingCount: 2,
    phoneIds: ['p4', 'p12'],
  },
  {
    id: 's4',
    name: 'Oppo Point',
    address: 'Shop No. 8, SB Road, Pune',
    distance: '3.0 km',
    ownerName: 'Sanjay Kumar',
    phone: '+91 98765 43213',
    rating: 4.3,
    listingCount: 1,
    phoneIds: ['p5'],
  },
  {
    id: 's5',
    name: 'Realme Hub',
    address: 'Shop No. 34, Karve Road, Pune',
    distance: '1.8 km',
    ownerName: 'Amit Singh',
    phone: '+91 98765 43214',
    rating: 4.6,
    listingCount: 1,
    phoneIds: ['p6'],
  },
  {
    id: 's6',
    name: 'Mi Store Pune',
    address: 'Shop No. 56, University Road, Pune',
    distance: '2.5 km',
    ownerName: 'Neha Gupta',
    phone: '+91 98765 43215',
    rating: 4.4,
    listingCount: 1,
    phoneIds: ['p7'],
  },
  {
    id: 's7',
    name: 'OnePlus Zone',
    address: 'Shop No. 19, Aundh Road, Pune',
    distance: '4.2 km',
    ownerName: 'Vikram Rao',
    phone: '+91 98765 43216',
    rating: 4.8,
    listingCount: 1,
    phoneIds: ['p8'],
  },
  {
    id: 's8',
    name: 'Moto Corner',
    address: 'Shop No. 67, Pashan Road, Pune',
    distance: '3.5 km',
    ownerName: 'Anil Deshmukh',
    phone: '+91 98765 43217',
    rating: 4.2,
    listingCount: 1,
    phoneIds: ['p9'],
  },
];

export const banners = [
  {
    id: 'b1',
    shopName: 'GALAXY PHONE STORE',
    headline: 'Weekend Sale — Up to 15% Off',
    subheadline: 'On all Samsung phones this week',
    image: '/banners/banner-galaxy.jpg',
  },
  {
    id: 'b2',
    shopName: 'D.J. MOBILES',
    headline: 'iPhone Festival',
    subheadline: 'Best prices on iPhone 12 & 13',
    image: '/banners/banner-dj.jpg',
  },
];

export function getShopById(id: string): Shop | undefined {
  return shops.find(s => s.id === id);
}

export function getPhonesByShop(shopId: string): Phone[] {
  return phones.filter(p => p.shopId === shopId);
}

export function getPhoneById(id: string): Phone | undefined {
  return phones.find(p => p.id === id);
}

export function searchPhones(query: string, filter: string): { phones: Phone[]; shops: Shop[] } {
  const q = query.toLowerCase().trim();
  let results = [...phones];
  const matchedShops: Shop[] = [];

  if (q) {
    // Check if query matches a shop name
    const shopMatch = shops.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.address.toLowerCase().includes(q)
    );
    if (shopMatch.length > 0) {
      matchedShops.push(...shopMatch);
    }

    // Filter phones
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      getShopById(p.shopId)?.name.toLowerCase().includes(q)
    );
  }

  // Apply price/IMEI filters
  switch (filter) {
    case 'under10k':
      results = results.filter(p => p.price < 10000);
      break;
    case '10k20k':
      results = results.filter(p => p.price >= 10000 && p.price <= 20000);
      break;
    case 'over20k':
      results = results.filter(p => p.price > 20000);
      break;
    case 'imeiVerified':
      results = results.filter(p => p.imeiVerified);
      break;
  }

  return { phones: results, shops: matchedShops };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateEMI(price: number, months: number): number {
  return Math.ceil(price / months);
}
