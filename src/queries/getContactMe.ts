// queries/getContactMe.ts
import { ContactMe } from '../types';
import { mockContactMe } from '../mockData';

export async function getContactMe(): Promise<ContactMe> {
  // Return mock data instead of API call
  return Promise.resolve(mockContactMe);
}
