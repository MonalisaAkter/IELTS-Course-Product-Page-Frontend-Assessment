import { CourseData, ApiResponse } from '@/types/course';
import { mockCourseData } from '@/data/mockCourseData';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1';

export interface FetchCourseParams {
  slug: string;
  lang?: 'en' | 'bn';
}

export const fetchCourseData = async ({ 
  slug, 
  lang = 'en' 
}: FetchCourseParams): Promise<CourseData> => {
  try {
    const url = new URL(`${API_BASE_URL}/products/${slug}`);
    url.searchParams.append('lang', lang);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch course data');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching course data, using mock data:', error);
    // Return mock data as fallback for development/demo purposes
    return mockCourseData;
  }
};