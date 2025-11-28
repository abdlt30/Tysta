import React from 'react';

export interface CloudService {
  id: string;
  category: string;
  name_ar: string;
  name_en: string;
  description: string;
  status: 'healthy' | 'warning' | 'degraded';
  icon: React.ReactNode;
  metrics?: {
    label: string;
    value: string | number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
  }[];
}

export enum ViewMode {
  DASHBOARD = 'DASHBOARD',
  ARCHITECTURE = 'ARCHITECTURE',
  ADVISOR = 'ADVISOR',
  PRICING = 'PRICING',
  SETUP = 'SETUP',
  SECURITY = 'SECURITY',
  KPI = 'KPI',
  RESOURCES = 'RESOURCES',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}