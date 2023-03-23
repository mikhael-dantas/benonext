export interface User {
  id: string;
  username: string;
  obs: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  contact_whats: string;
  contact_2: string;
  email: string;
  address: string;
  obs: string;
  user_id: string;
  client_type: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface App {
  id: string;
  client_id: string;
  app_name: string;
  server: string;
  screens: number;
  referrals: number;
  obs: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface Device {
  id: string;
  client_id: string;
  platform: string;
  mac_id: string;
  obs: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  client_id: string;
  expected_value: number;
  paid_value: number;
  total_value: number;
  last_payment_date: string;
  payment_method: string;
  receipt_number: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  client_id: string;
  creation_date: string;
  duration_months: number;
  expiration_date: string;
  status: string;
  obs: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface Invoice {
  id: string;
  name: string;
  client_id: string;
  invoice_date: string;
  due_date: string;
  total_amount: number;
  status: string;
  payment_method: string;
  receipt_number: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface SubscriptionPayment {
  id: string;
  payment_id: string;
  subscription_id: string;
  payment_date: string;
  payment_amount: number;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface Expense {
  id: string;
  expense_date: string;
  expense_amount: number;
  expense_category: string;
  expense_description: string;
  created_by: string;
  updated_by: UserInteraction[];
  created_at: string;
  updated_at: string;
}

export interface UserInteraction {
  user_id: string;
  interaction_date: string;
  record_id: string;
  table_name: string;
  action: "update" | "delete";
}

  
  
const users: User[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `user-${i}`,
  username: `user${i}`,
  obs: `User ${i} observations`,
  permissions: ['admin', 'editor'],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const clients: Client[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `client-${i}`,
  name: `Client ${i}`,
  contact_whats: `+1 555-555-55${i}`,
  contact_2: `+1 555-555-55${i + 1}`,
  email: `client${i}@example.com`,
  address: `Client ${i} Address`,
  obs: `Client ${i} observations`,
  user_id: `user-${i % users.length}`,
  client_type: i % 2 === 0 ? 'enterprise' : 'individual',
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const apps: App[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `app-${i}`,
  client_id: `client-${i}`,
  app_name: `App ${i}`,
  server: `Server ${i}`,
  screens: i * 10,
  referrals: i * 5,
  obs: `App ${i} observations`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const devices: Device[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `device-${i}`,
  client_id: `client-${i}`,
  platform: i % 2 === 0 ? 'Android' : 'iOS',
  mac_id: `mac-${i}`,
  obs: `Device ${i} observations`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const payments: Payment[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `payment-${i}`,
  client_id: `client-${i}`,
  expected_value: i * 100,
  paid_value: i * 90,
  total_value: i * 110,
  last_payment_date: '2023-03-21T00:00:00.000Z',
  payment_method: 'Credit Card',
  receipt_number: `receipt-${i}`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const subscriptions: Subscription[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `subscription-${i}`,
  client_id: `client-${i}`,
  creation_date: '2023-03-21T00:00:00.000Z',
  duration_months: 12,
  expiration_date: '2024-03-21T00:00:00.000Z',
  status: 'active',
  obs: `Subscription ${i} observations`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const invoices: Invoice[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `invoice-${i}`,
  name: `Invoice ${i}`,
  client_id: `client-${i}`,
  invoice_date: '2023-03-21T00:00:00.000Z',
  due_date: '2023-04-21T00:00:00.000Z',
  total_amount: i * 200,
  status: 'unpaid',
  payment_method: 'Credit Card',
  receipt_number: `receipt-${i}`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const subscriptionPayments: SubscriptionPayment[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `sub-payment-${i}`,
  payment_id: `payment-${i}`,
  subscription_id: `subscription-${i}`,
  payment_date: '2023-03-21T00:00:00.000Z',
  payment_amount: i * 200,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

const expenses: Expense[] = Array(10)
.fill(null)
.map((_, i) => ({
  id: `expense-${i}`,
  expense_date: '2023-03-21T00:00:00.000Z',
  expense_amount: i * 50,
  expense_category: i % 2 === 0 ? 'office' : 'travel',
  expense_description: `Expense ${i} description`,
  created_by: `user-${i % users.length}`,
  updated_by: [],
  created_at: '2023-03-21T00:00:00.000Z',
  updated_at: '2023-03-21T00:00:00.000Z',
}))

