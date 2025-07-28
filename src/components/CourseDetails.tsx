import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Section, Checklist } from '@/types/course';

interface CourseDetailsProps {
  sections: Section[];
  checklist: Checklist[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ sections, checklist }) => {
  const aboutSection = sections.find(section => section.type === 'about');
  const exclusiveSection = sections.find(section => section.type === 'exclusive');

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="about" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">কোর্স বিস্তারিত</TabsTrigger>
            <TabsTrigger value="exclusive">এক্সক্লুসিভ ফিচার</TabsTrigger>
            <TabsTrigger value="checklist">চেকলিস্ট</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-8">
            {aboutSection && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">{aboutSection.title}</h3>
                {aboutSection.content.html ? (
                  <div 
                    className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: aboutSection.content.html }}
                  />
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutSection.content.description}
                  </p>
                )}
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="exclusive" className="mt-8">
            {exclusiveSection && (
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">{exclusiveSection.title}</h3>
                {exclusiveSection.content.items ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {exclusiveSection.content.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    {exclusiveSection.content.description}
                  </p>
                )}
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="checklist" className="mt-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">কোর্স চেকলিস্ট</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {checklist.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CourseDetails;