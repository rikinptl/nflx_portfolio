// queries/getCertifications.ts
import { Certification } from '../types';
import { mockCertifications } from '../mockData';

export async function getCertifications(): Promise<Certification[]> {
  // Return mock data instead of API call
  return Promise.resolve(mockCertifications);
}
