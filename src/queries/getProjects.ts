// queries/getProjects.ts
import { Project } from '../types';
import { mockProjects } from '../mockData';

export async function getProjects(): Promise<Project[]> {
  // Return mock data instead of API call
  return Promise.resolve(mockProjects);
}
