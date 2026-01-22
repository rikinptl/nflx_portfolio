// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { mockTimeline } from '../mockData';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Return mock data instead of API call
  return Promise.resolve(mockTimeline);
}
