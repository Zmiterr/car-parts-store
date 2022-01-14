export default class ApiService {
  parts = [
    {
      id: 1,
      name: 'Detail 1',
      description: 'Low Priority',
      fitCars: ['Spider'],
    },
    {
      id: 2,
      name: 'Detail 2',
      description: 'High Priority',
      fitCars: ['Stelvio', 'Giulia'],
    },
    {
      id: 3,
      name: 'Detail 3',
      description: 'High Priority',
      fitCars: ['Stelvio', 'Spider'],
    },
  ];

  // getPartsData = (): Promise<any> => {
  //   return Promise.resolve(this.parts);
  // };
}
