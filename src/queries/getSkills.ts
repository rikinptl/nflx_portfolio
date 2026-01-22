// queries/getSkills.ts
import { Skill } from '../types';
import { mockSkills } from '../mockData';

export async function getSkills(): Promise<Skill[]> {
  // Return mock data instead of API call
  return Promise.resolve(mockSkills);
}
