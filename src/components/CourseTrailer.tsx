import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Medium } from '@/types/course';

interface CourseTrailerProps {
  media: Medium[];
}

const CourseTrailer: React.FC<CourseTrailerProps> = ({ media }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Medium | null>(null);

  const videos = media.filter(item => item.type === 'video');
  const images = media.filter(item => item.type === 'image');

  if (videos.length === 0 && images.length === 0) {
    return null;
  }

  const handleVideoClick = (video: Medium) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">কোর্স প্রিভিউ</h2>
          <p className="text-lg text-muted-foreground">
            কোর্সের একটি পূর্ণাঙ্গ ধারণা পেতে ভিডিওগুলো দেখুন
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={video.id || index} 
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => handleVideoClick(video)}
            >
              <div className="aspect-video bg-muted">
                <img
                  src={video.thumbnail || video.url}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
                {video.duration && (
                  <p className="text-white/80 text-xs">{video.duration}</p>
                )}
              </div>
            </div>
          ))}

          {images.map((image, index) => (
            <div 
              key={image.id || `img-${index}`} 
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-muted">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl w-full p-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
              
              {selectedVideo && (
                <div className="aspect-video">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideo.url)}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CourseTrailer;