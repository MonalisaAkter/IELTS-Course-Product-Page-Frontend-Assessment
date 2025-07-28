import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Play, Award, Users, BookOpen, Target } from 'lucide-react';
import { Section } from '@/types/course';

interface CourseFeaturesProps {
  sections: Section[];
}

const CourseFeatures: React.FC<CourseFeaturesProps> = ({ sections }) => {
  const featuresSection = sections.find(section => section.type === 'features');
  const pointersSection = sections.find(section => section.type === 'pointers');
  
  const icons = [CheckCircle, Play, Award, Users, BookOpen, Target];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Course Layout */}
        {featuresSection && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              কোর্সটি যেভাবে সাজানো হয়েছে
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresSection.content.items?.map((feature, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 leading-snug">{feature}</h3>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* What You'll Learn */}
        {pointersSection && (
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              কোর্স করে আপনি যা যা শিখবেন
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pointersSection.content.items?.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseFeatures;