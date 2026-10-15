export type TransactionType = 'buy' | 'rent' | 'development' | 'commercial' | 'investment';

export type PropertyCategory = 
  | 'Villa'
  | 'House'
  | 'Apartment'
  | 'Penthouse'
  | 'Eco-Villa'
  | 'Mountain Lodge'
  | 'Beach House'
  | 'Commercial'
  | 'Development';

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  city: string;
  country: string;
  price: number;
  formattedPrice: string;
  pricePrefix?: string;
  priceSuffix?: string;
  transactionType: TransactionType;
  propertyType: PropertyCategory;
  area: number; // in m²
  bedrooms: number;
  bathrooms: number;
  floors?: number;
  yearBuilt?: number;
  description: string;
  shortDescription: string;
  features: string[];
  amenities: string[];
  mainImage: string;
  images: string[];
  floorPlanImage?: string;
  agentId: string;
  listingStatus: 'active' | 'under-offer' | 'new-development' | 'featured';
  isFeatured?: boolean;
  isNew?: boolean;
  investmentMetrics?: {
    minInvestment: number;
    projectedReturn: string;
    irr: string;
    targetNetReturn: string;
    holdingPeriod: string;
    distributionFrequency: string;
  };
  rentalTerms?: {
    minLeaseMonths?: number;
    securityDeposit?: string;
    furnished?: boolean;
    availableFrom?: string;
  };
  commercialSpecs?: {
    buildingClass?: 'Class A+' | 'Class A' | 'Prime';
    parkingSpaces?: number;
    zoning?: string;
    occupancyRate?: string;
  };
  developmentSpecs?: {
    unitsTotal?: number;
    unitsAvailable?: number;
    completionDate?: string;
    developerName?: string;
  };
  createdAt: string;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  phone: string;
  email: string;
  bio: string;
  experienceYears: number;
  specialization: string[];
  languages: string[];
  serviceAreas: string[];
  verifiedTransactions: number;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
  steps: string[];
  benefits: string[];
  ctaText: string;
}

export interface InvestmentOpportunity {
  id: string;
  slug: string;
  title: string;
  location: string;
  country: string;
  area: number;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  image: string;
  minInvestment: number;
  targetIrr: string;
  projectedReturn: string;
  holdingPeriod: string;
  structure: string;
  riskRating: 'Low-Medium' | 'Medium' | 'Medium-Growth';
  status: 'Open for Allocation' | 'Closing Soon' | 'Fully Funded';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readingTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  location: string;
  rating: number;
  propertyAcquired: string;
  year: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyTitle?: string;
  inquiryType: 'viewing' | 'consultation' | 'brochure' | 'listing' | 'general';
  preferredContact?: 'email' | 'phone' | 'whatsapp';
  acceptedTerms: boolean;
}
