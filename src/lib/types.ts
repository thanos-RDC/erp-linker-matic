
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface Service {
  id: string;
  name: string;
  type: 'erp' | 'payment' | 'marketplace' | 'other';
  status: 'active' | 'inactive' | 'error';
  description: string;
  config: ServiceConfig;
  connections: Connection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceConfig {
  apiKey?: string;
  baseUrl?: string;
  authType?: 'oauth' | 'apiKey' | 'basic';
  username?: string;
  password?: string;
  clientId?: string;
  clientSecret?: string;
  [key: string]: any;
}

export interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
  status: 'active' | 'inactive' | 'error';
  config: {
    mappings: any[];
    transformations: any[];
    [key: string]: any;
  };
  stats: {
    requestsPerDay: number;
    successRate: number;
    lastSync: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface SystemResource {
  id: string;
  name: string;
  type: 'cpu' | 'memory' | 'storage' | 'network';
  usage: number; // percentage
  details: {
    total: number;
    used: number;
    unit: string;
  };
  history: {
    timestamp: Date;
    value: number;
  }[];
}
