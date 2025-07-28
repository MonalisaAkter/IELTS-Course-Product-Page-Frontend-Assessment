import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold mb-2">কোর্স লোড হচ্ছে...</h2>
        <p className="text-muted-foreground">অনুগ্রহ করে অপেক্ষা করুন</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;