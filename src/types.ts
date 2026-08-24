export type PageRoute =
  | '/'
  | '/services/ddos-protection'
  | '/services/ip-transit'
  | '/services/ix-connectivity'
  | '/services/leased-lines'
  | '/network'
  | '/about'
  | '/contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  route: PageRoute;
  iconName: 'ddos' | 'transit' | 'ix' | 'leased';
}

export interface NetworkLocation {
  id: 'delhi' | 'mumbai' | 'chennai';
  name: string;
  facility: string;
  networkType: string;
  tier: string;
  coords: { x: number; y: number };
  role: string;
  specs: {
    facility: string;
    interconnects: string;
    redundancy: string;
    support: string;
  };
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceRequired: string;
  bandwidthRequirement: string;
  currentLocation: string;
  destinationLocation: string;
  asnDetails: string;
  message: string;
}
