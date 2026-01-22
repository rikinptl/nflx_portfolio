// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import { mockWorkPermit } from '../mockData';

export async function getWorkPermit(): Promise<WorkPermit> {
  // Return mock data instead of API call
  return Promise.resolve(mockWorkPermit);
}
