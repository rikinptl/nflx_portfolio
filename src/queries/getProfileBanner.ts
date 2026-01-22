// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import { mockProfileBanner } from '../mockData';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Return mock data instead of API call
  return Promise.resolve(mockProfileBanner);
}
