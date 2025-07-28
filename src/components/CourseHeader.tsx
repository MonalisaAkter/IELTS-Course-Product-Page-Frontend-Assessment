import React from 'react';
import { Star, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CourseData } from '@/types/course';

interface CourseHeaderProps {
  course: CourseData;
  price?: number;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ course, price = 1000 }) => {
  return (
    <div className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {course.title}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-5 h-5 fill-rating-star text-rating-star" 
                  />
                ))}
              </div>
              <span className="text-sm text-hero-foreground/80">
                (81.8% শিক্ষার্থী কোর্স শেষ ও রেটিং দিয়েছেন)
              </span>
            </div>

            {/* Description */}
            <div 
              className="text-lg text-hero-foreground/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>৩০০০১ জন</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>৫০ ঘন্টা</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>সার্টিফিকেট</span>
              </div>
            </div>
          </div>

          {/* Right Side - Course Card */}
          <div className="lg:justify-self-end">
            <Card className="bg-background text-foreground p-6 max-w-md w-full shadow-2xl">
              {/* Video Preview */}
              {course.media.find(m => m.type === 'video') && (
                <div className="aspect-video bg-muted rounded-lg mb-6 relative overflow-hidden">
                  <img 
                    src={course.media.find(m => m.type === 'video')?.thumbnail || course.media[0]?.url} 
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-primary-foreground border-y-[10px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">৳{price}</span>
                <span className="text-lg text-muted-foreground line-through">৳৫০০০</span>
                <Button variant="price" size="sm">
                  ১১৫০ টাকা ছাড়
                </Button>
              </div>

              {/* CTA Button */}
              <Button variant="cta" size="lg" className="w-full mb-4">
                {course.cta_text.primary}
              </Button>

              {/* Course Features */}
              <div className="space-y-3 text-sm">
                <h4 className="font-semibold">এই কোর্স যা থাকছে:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>কোর্স করানো ৩০০০১ জন</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>সময় লাগবে ৫০ ঘন্টা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>১০টি লাইভ এক্সাম এবং ১০টি সিমুলেটর মক টেস্ট</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;