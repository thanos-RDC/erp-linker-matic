
import { User, Service, Connection, SystemResource } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?u=admin',
    status: 'active',
    createdAt: new Date('2023-01-01')
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?u=john',
    status: 'active',
    createdAt: new Date('2023-02-15')
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?u=jane',
    status: 'inactive',
    createdAt: new Date('2023-03-20')
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'SAP ERP',
    type: 'erp',
    status: 'active',
    description: 'Main ERP system for accounting and inventory',
    config: {
      baseUrl: 'https://erp.example.com/api',
      authType: 'oauth',
      clientId: 'client_12345',
      clientSecret: '******'
    },
    connections: [],
    createdAt: new Date('2023-01-05'),
    updatedAt: new Date('2023-06-10')
  },
  {
    id: '2',
    name: 'Stripe',
    type: 'payment',
    status: 'active',
    description: 'Payment processing gateway',
    config: {
      apiKey: 'sk_test_*****',
      authType: 'apiKey'
    },
    connections: [],
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: '3',
    name: 'Amazon Marketplace',
    type: 'marketplace',
    status: 'active',
    description: 'Amazon seller integration',
    config: {
      authType: 'oauth',
      clientId: 'amzn1.application-oa2-client.******',
      clientSecret: '******',
      region: 'US'
    },
    connections: [],
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2023-05-20')
  },
  {
    id: '4',
    name: 'Legacy Inventory System',
    type: 'other',
    status: 'error',
    description: 'Old inventory management system',
    config: {
      baseUrl: 'https://inventory.internal/api',
      authType: 'basic',
      username: 'system',
      password: '******'
    },
    connections: [],
    createdAt: new Date('2022-10-10'),
    updatedAt: new Date('2023-06-01')
  }
];

export const mockConnections: Connection[] = [
  {
    id: '1',
    sourceId: '1', // SAP ERP
    targetId: '2', // Stripe
    status: 'active',
    config: {
      mappings: [
        { source: 'invoice.id', target: 'payment.reference' },
        { source: 'invoice.amount', target: 'payment.amount' }
      ],
      transformations: []
    },
    stats: {
      requestsPerDay: 150,
      successRate: 98.5,
      lastSync: new Date('2023-06-20T10:30:00')
    },
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-06-10')
  },
  {
    id: '2',
    sourceId: '1', // SAP ERP
    targetId: '3', // Amazon Marketplace
    status: 'active',
    config: {
      mappings: [
        { source: 'product.sku', target: 'listing.sku' },
        { source: 'product.name', target: 'listing.title' },
        { source: 'product.price', target: 'listing.price' }
      ],
      transformations: [
        { field: 'price', operation: 'multiply', value: 1.1 }
      ]
    },
    stats: {
      requestsPerDay: 75,
      successRate: 96.2,
      lastSync: new Date('2023-06-20T08:15:00')
    },
    createdAt: new Date('2023-04-15'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: '3',
    sourceId: '1', // SAP ERP
    targetId: '4', // Legacy Inventory
    status: 'error',
    config: {
      mappings: [
        { source: 'inventory.item', target: 'product.id' },
        { source: 'inventory.quantity', target: 'product.stock' }
      ],
      transformations: []
    },
    stats: {
      requestsPerDay: 50,
      successRate: 65.8,
      lastSync: new Date('2023-06-19T14:45:00')
    },
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-06-19')
  }
];

// Update the connections in the services
mockServices.forEach(service => {
  service.connections = mockConnections.filter(
    conn => conn.sourceId === service.id || conn.targetId === service.id
  );
});

export const mockSystemResources: SystemResource[] = [
  {
    id: '1',
    name: 'CPU Usage',
    type: 'cpu',
    usage: 45,
    details: {
      total: 100,
      used: 45,
      unit: '%'
    },
    history: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000),
      value: Math.floor(Math.random() * 60) + 20
    }))
  },
  {
    id: '2',
    name: 'Memory Usage',
    type: 'memory',
    usage: 68,
    details: {
      total: 16,
      used: 10.88,
      unit: 'GB'
    },
    history: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000),
      value: Math.floor(Math.random() * 30) + 50
    }))
  },
  {
    id: '3',
    name: 'Storage',
    type: 'storage',
    usage: 72,
    details: {
      total: 500,
      used: 360,
      unit: 'GB'
    },
    history: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000),
      value: 70 + (i < 12 ? i / 2 : 0)
    }))
  },
  {
    id: '4',
    name: 'Network Bandwidth',
    type: 'network',
    usage: 32,
    details: {
      total: 1000,
      used: 320,
      unit: 'Mbps'
    },
    history: Array.from({ length: 24 }, (_, i) => ({
      timestamp: new Date(Date.now() - i * 3600000),
      value: Math.floor(Math.random() * 40) + 10
    }))
  }
];
