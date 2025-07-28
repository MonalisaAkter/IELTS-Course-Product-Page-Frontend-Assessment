import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCourseData } from '@/services/courseApi';
import { CourseData } from '@/types/course';

// Components
import CourseHeader from '@/components/CourseHeader';
import CourseInstructors from '@/components/CourseInstructors';
import CourseTrailer from '@/components/CourseTrailer';
import CourseFeatures from '@/components/CourseFeatures';
import CourseDetails from '@/components/CourseDetails';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';

interface CoursePageProps {
  slug?: string;
  lang?: 'en' | 'bn';
}

const CoursePage: React.FC<CoursePageProps> = ({ 
  slug = 'ielts-course', 
  lang = 'en' 
}) => {
  const [language, setLanguage] = useState<'en' | 'bn'>(lang);

  const {
    data: courseData,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['course', slug, language],
    queryFn: () => fetchCourseData({ slug, lang: language }),
    retry: 2,
    refetchOnWindowFocus: false,
  });

  // SEO Meta tags update
  useEffect(() => {
    if (courseData?.seo) {
      document.title = courseData.seo.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', courseData.seo.description);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', courseData.seo.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', courseData.seo.description);
      }

      if (courseData.seo.image) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
          ogImage.setAttribute('content', courseData.seo.image);
        }
      }
    }
  }, [courseData]);

  const handleLanguageChange = (newLang: 'en' | 'bn') => {
    setLanguage(newLang);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !courseData) {
    return (
      <ErrorMessage 
        message={error?.message || 'কোর্সের তথ্য লোড করতে সমস্যা হয়েছে।'}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher */}
      <div className="bg-hero">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end">
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-sm rounded ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-hero-foreground hover:bg-hero-foreground/10'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('bn')}
                className={`px-3 py-1 text-sm rounded ${
                  language === 'bn' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-hero-foreground hover:bg-hero-foreground/10'
                }`}
              >
                বাং
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Header with Hero Section */}
      <CourseHeader course={courseData} price={1000} />

      {/* Course Instructors */}
      <CourseInstructors sections={courseData.sections} />

      {/* Course Trailer and Media */}
      <CourseTrailer media={courseData.media} />

      {/* Course Features and Learning Outcomes */}
      <CourseFeatures sections={courseData.sections} />

      {/* Course Details with Tabs */}
      <CourseDetails sections={courseData.sections} checklist={courseData.checklist} />
    </div>
  );
};

export default CoursePage;