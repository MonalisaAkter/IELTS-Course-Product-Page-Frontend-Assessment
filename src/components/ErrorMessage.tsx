import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold mb-2">কিছু সমস্যা হয়েছে</h2>
        <p className="text-muted-foreground mb-6">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            আবার চেষ্টা করুন
          </Button>
        )}
      </Card>
    </div>
  );
};

export default ErrorMessage;