import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/types/course';

interface CourseInstructorsProps {
  sections: Section[];
}

const CourseInstructors: React.FC<CourseInstructorsProps> = ({ sections }) => {
  const instructorSection = sections.find(section => section.type === 'instructor');
  
  if (!instructorSection || !instructorSection.instructors) {
    return null;
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">কোর্স ইন্সট্রাক্টর</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            বিশেষজ্ঞ শিক্ষকদের কাছ থেকে শিখুন যারা IELTS এ দক্ষতা অর্জনে আপনাকে সাহায্য করবেন
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructorSection.instructors.map((instructor) => (
            <Card key={instructor.id} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="relative mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                {instructor.rating && (
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    IELTS: {instructor.rating}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{instructor.credentials}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{instructor.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseInstructors;