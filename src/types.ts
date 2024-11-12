export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  imageUrl: string;
  organizerId: string;
  requiredSkills: string[];
  startDate: string;
  endDate: string;
  spots: number;
}