import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function LogoIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="14" stroke="#2C2645" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="8" stroke="#DB2777" strokeWidth="1.5" />
      <line x1="16" y1="2" x2="16" y2="30" stroke="#2C2645" strokeWidth="1.5" />
      <line x1="2" y1="16" x2="30" y2="16" stroke="#2C2645" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" fill="#DB2777" />
      <circle cx="16" cy="6" r="1.5" fill="#DB2777" />
      <circle cx="26" cy="16" r="1.5" fill="#DB2777" />
      <circle cx="16" cy="26" r="1.5" fill="#DB2777" />
      <circle cx="6" cy="16" r="1.5" fill="#DB2777" />
    </svg>
  );
}

export function DdosIcon({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 3L5 7V15C5 22.5 9.7 27.5 16 29C22.3 27.5 27 22.5 27 15V7L16 3Z" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8V24" stroke="#2C2645" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 14L16 11L21 14" stroke="#F5F3FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="2" fill="#DB2777" />
      <circle cx="11" cy="19" r="1" fill="#9C94B8" />
      <circle cx="21" cy="19" r="1" fill="#9C94B8" />
    </svg>
  );
}

export function TransitIcon({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="#2C2645" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="#DB2777" />
      <circle cx="24" cy="8" r="2" fill="#DB2777" />
      <circle cx="16" cy="16" r="3" fill="#F5F3FA" stroke="#DB2777" strokeWidth="1.5" />
      <circle cx="8" cy="24" r="2" fill="#DB2777" />
      <circle cx="24" cy="24" r="2" fill="#DB2777" />
      <line x1="8" y1="8" x2="14" y2="14" stroke="#2C2645" strokeWidth="1.5" />
      <line x1="24" y1="8" x2="18" y2="14" stroke="#2C2645" strokeWidth="1.5" />
      <line x1="8" y1="24" x2="14" y2="18" stroke="#2C2645" strokeWidth="1.5" />
      <line x1="24" y1="24" x2="18" y2="18" stroke="#2C2645" strokeWidth="1.5" />
    </svg>
  );
}

export function IxIcon({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="16" cy="16" r="13" stroke="#2C2645" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="6" stroke="#DB2777" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" fill="#F5F3FA" />
      <circle cx="16" cy="3" r="1.5" fill="#DB2777" />
      <circle cx="29" cy="16" r="1.5" fill="#DB2777" />
      <circle cx="16" cy="29" r="1.5" fill="#DB2777" />
      <circle cx="3" cy="16" r="1.5" fill="#DB2777" />
      <line x1="16" y1="3" x2="16" y2="10" stroke="#2C2645" strokeWidth="1" strokeDasharray="1 2" />
      <line x1="29" y1="16" x2="22" y2="16" stroke="#2C2645" strokeWidth="1" strokeDasharray="1 2" />
      <line x1="16" y1="29" x2="16" y2="22" stroke="#2C2645" strokeWidth="1" strokeDasharray="1 2" />
      <line x1="3" y1="16" x2="10" y2="16" stroke="#2C2645" strokeWidth="1" strokeDasharray="1 2" />
    </svg>
  );
}

export function LeasedLineIcon({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="10" width="8" height="12" rx="2" stroke="#2C2645" strokeWidth="1.5" />
      <rect x="21" y="10" width="8" height="12" rx="2" stroke="#2C2645" strokeWidth="1.5" />
      <line x1="11" y1="14" x2="21" y2="14" stroke="#DB2777" strokeWidth="2" />
      <line x1="11" y1="18" x2="21" y2="18" stroke="#DB2777" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="7" cy="16" r="1.5" fill="#F5F3FA" />
      <circle cx="25" cy="16" r="1.5" fill="#F5F3FA" />
    </svg>
  );
}

export function LocationPinIcon({ className = "w-5 h-5", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" fill="#DB2777" />
    </svg>
  );
}

const ServiceIcons = {
  LogoIcon,
  DdosIcon,
  TransitIcon,
  IxIcon,
  LeasedLineIcon,
  LocationPinIcon,
};

export default ServiceIcons;
