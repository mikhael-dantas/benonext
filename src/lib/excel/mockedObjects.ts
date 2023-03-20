export interface Client {
    client_id: number;
    name: string;
    contact_whats: string;
    contact_2: string;
    email: string;
    address: string;
    obs: string;
    client_type: string;
  }
  
  export interface User {
    user_id: number;
    client_id: number;
    username: string;
    password: string;
    obs: string;
  }
  
  export interface Device {
    device_id: number;
    client_id: number;
    platform: string;
    mac_id: string;
    obs: string;
  }
  
  export interface App {
    app_id: number;
    client_id: number;
    app_name: string;
    server: string;
    screens: number;
    referrals: number;
    obs: string;
  }
  
  export interface Payment {
    payment_id: number;
    client_id: number;
    expected_value: number;
    paid_value: number;
    total_value: number;
    last_payment_date: Date;
    payment_method: string;
    receipt_number: string;
  }
  
  export interface Subscription {
    subscription_id: number;
    client_id: number;
    creation_date: Date;
    duration_months: number;
    expiration_date: Date;
    status: string;
    obs: string;
  }
  
  export interface Invoice {
    name: string;
    invoice_id: number;
    client_id: number;
    invoice_date: Date;
    due_date: Date;
    total_amount: number;
    status: string;
    payment_method: string;
    receipt_number: string;
  }
  
  export interface SubscriptionPayment {
    payment_id: number;
    subscription_id: number;
    payment_date: Date;
    payment_amount: number;
  }
  
  export interface Expense {
    expense_id: number;
    expense_date: Date;
    expense_amount: number;
    expense_category: string;
    expense_description: string;
  }
  
  export interface Employee {
    employee_id: number;
    name: string;
    address: string;
    contact: string;
    salary: number;
    role: string;
  }
  
  export interface EmployeeTimesheet {
    timesheet_id: number;
    employee_id: number;
    timesheet_date: Date;
    start_time: Date;
    end_time: Date;
    total_hours: number;
  }
  
  export interface Payroll {
    payroll_id: number;
    employee_id: number;
    payroll_date: Date;
    hours_worked: number;
    hourly_rate: number;
    gross_pay: number;
    taxes: number;
    net_pay: number;
  }
  
  // Mocked objects
  
  export const mockedClients: Client[] = [
    {
      client_id: 1,
      name: 'ABC Corporation',
      contact_whats: '555-1234',
      contact_2: '',
      email: 'abc@corporation.com',
      address: '123 Main St.',
      obs: '',
      client_type: 'Business'
    },
    {
      client_id: 2,
      name: 'John Doe',
      contact_whats: '555-5678',
      contact_2: '',
      email: 'john.doe@example.com',
      address: '456 Elm St.',
      obs: '',
      client_type: 'Individual'
    },
    // ...
  ];
  
  export const mockedUsers: User[] = [
    {
      user_id: 1,
      client_id: 1,
      username: 'johndoe',
      password: 'password',
      obs: ''
    },
    {
      user_id: 2,
      client_id: 2,
      username: 'janedoe',
      password: 'password',
      obs: ''
    },
    // ...
  ];
  
export const mockedDevices: Device[] = [
    {
    device_id: 1,
    client_id: 1,
    platform: 'iOS',
    mac_id: '00:11:22:33:44:55',
    obs: ''
    },
    {
    device_id: 2,
    client_id: 2,
    platform: 'Android',
    mac_id: 'AA:BB:CC:DD:EE:FF',
    obs: ''
    },
    // ...
    ];
    
    export const mockedApps: App[] = [
    {
    app_id: 1,
    client_id: 1,
    app_name: 'ABC App',
    server: 'https://api.abccorp.com',
    screens: 10,
    referrals: 50,
    obs: ''
    },
    {
    app_id: 2,
    client_id: 2,
    app_name: 'My App',
    server: 'https://api.myapp.com',
    screens: 5,
    referrals: 20,
    obs: ''
    },
    // ...
    ];
    
    export const mockedPayments: Payment[] = [
    {
    payment_id: 1,
    client_id: 1,
    expected_value: 1000,
    paid_value: 1000,
    total_value: 1000,
    last_payment_date: new Date('2022-02-01'),
    payment_method: 'Credit Card',
    receipt_number: '12345'
    },
    {
    payment_id: 2,
    client_id: 2,
    expected_value: 500,
    paid_value: 500,
    total_value: 500,
    last_payment_date: new Date('2022-03-01'),
    payment_method: 'Bank Transfer',
    receipt_number: '67890'
    },
    // ...
    ];
    
    export const mockedSubscriptions: Subscription[] = [
    {
    subscription_id: 1,
    client_id: 1,
    creation_date: new Date('2022-01-01'),
    duration_months: 12,
    expiration_date: new Date('2023-01-01'),
    status: 'Active',
    obs: ''
    },
    {
    subscription_id: 2,
    client_id: 2,
    creation_date: new Date('2022-02-01'),
    duration_months: 6,
    expiration_date: new Date('2022-08-01'),
    status: 'Expired',
    obs: ''
    },
    // ...
    ];
    
    export const mockedInvoices: Invoice[] = [
    {
    name: 'ABC Corporation',
    invoice_id: 1,
    client_id: 1,
    invoice_date: new Date('2022-03-01'),
    due_date: new Date('2022-03-15'),
    total_amount: 500,
    status: 'Unpaid',
    payment_method: '',
    receipt_number: ''
    },
    {
    name: 'John Doe',
    invoice_id: 2,
    client_id: 2,
    invoice_date: new Date('2022-03-01'),
    due_date: new Date('2022-03-15'),
    total_amount: 250,
    status: 'Unpaid',
    payment_method: '',
    receipt_number: ''
    },
    // ...
    ];
    
    export const mockedSubscriptionPayments: SubscriptionPayment[] = [
    {
    payment_id: 1,
    subscription_id: 1,
    payment_date: new Date('2022-02-01'),
    payment_amount: 1000
    },
    {
    payment_id: 2,
    subscription_id: 2,
    payment_date: new Date('2022-03-01'),
    payment_amount: 500
    },
    // ...
    ];  

    export const mockedExpenses: Expense[] = [
        {
        expense_id: 1,
        expense_date: new Date('2022-01-01'),
        expense_amount: 100,
        expense_category: 'Office Supplies',
        expense_description: 'Pens, paper, etc.'
        },
        {
        expense_id: 2,
        expense_date: new Date('2022-02-01'),
        expense_amount: 200,
        expense_category: 'Rent',
        expense_description: 'Monthly rent'
        },
        // ...
        ];
        
        export const mockedEmployees: Employee[] = [
        {
        employee_id: 1,
        name: 'John Doe',
        address: '123 Main St.',
        contact: '555-1234',
        salary: 50000,
        role: 'Developer'
        },
        {
        employee_id: 2,
        name: 'Jane Doe',
        address: '456 Elm St.',
        contact: '555-5678',
        salary: 60000,
        role: 'Manager'
        },
        // ...
        ];
        
        export const mockedEmployeeTimesheets: EmployeeTimesheet[] = [
        {
        timesheet_id: 1,
        employee_id: 1,
        timesheet_date: new Date('2022-03-01'),
        start_time: new Date('2022-03-01T09:00:00'),
        end_time: new Date('2022-03-01T17:00:00'),
        total_hours: 8
        },
        {
        timesheet_id: 2,
        employee_id: 2,
        timesheet_date: new Date('2022-03-01'),
        start_time: new Date('2022-03-01T09:00:00'),
        end_time: new Date('2022-03-01T18:00:00'),
        total_hours: 9
        },
        // ...
        ];
        
        export const mockedPayrolls: Payroll[] = [
        {
        payroll_id: 1,
        employee_id: 1,
        payroll_date: new Date('2022-03-15'),
        hours_worked: 40,
        hourly_rate: 25,
        gross_pay: 1000,
        taxes: 200,
        net_pay: 800
        },
        {
        payroll_id: 2,
        employee_id: 2,
        payroll_date: new Date('2022-03-15'),
        hours_worked: 45,
        hourly_rate: 30,
        gross_pay: 1350,
        taxes: 270,
        net_pay: 1080
        },
        // ...
        ];