export interface Report {
    name: string;
    description: string;
    date: Date;
  }
  
  const reports: Report[] = [
    {
      name: 'Monthly Sales Report',
      description: 'Report on monthly sales performance',
      date: new Date('2023-04-01'),
    },
    {
      name: 'Quarterly Inventory Report',
      description: 'Report on quarterly inventory levels',
      date: new Date('2023-03-31'),
    },
    {
      name: 'Quarterly Inventory Report',
      description: 'Report on quarterly inventory levels',
      date: new Date('2023-03-31'),
    },
    {
      name: 'Monthly Sales Report',
      description: 'Report on monthly sales performance',
      date: new Date('2023-04-01'),
    },
    {
      name: 'Quarterly Inventory Report',
      description: 'Report on quarterly inventory levels',
      date: new Date('2023-03-31'),
    },
    {
      name: 'Monthly Sales Report',
      description: 'Report on monthly sales performance',
      date: new Date('2023-04-01'),
    },
    {
      name: 'Monthly Sales Report',
      description: 'Report on monthly sales performance',
      date: new Date('2023-04-01'),
    },
    {
      name:"Monthly Sales Report",
      description:"Report on monthly sales performance",
      date: new Date('2023-04-01'),
    },
  ];
  
  export function getReportsInRange(Date: Date): Report[] {
    return reports.filter((report) => report.date >= Date);
  }