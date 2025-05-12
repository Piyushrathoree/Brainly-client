import React, { useState, useEffect } from 'react';

interface DeferredLoadProps {
  children: React.ReactNode;
  delay?: number;
  placeholder?: React.ReactNode;
}

const DeferredLoad: React.FC<DeferredLoadProps> = ({
  children,
  delay = 200,
  placeholder = null,
}) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => {
        setTimeout(() => setShouldRender(true), delay);
      });
      return () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(id);
    }
  }, [delay]);

  return shouldRender ? <>{children}</> : <>{placeholder}</>;
};

export default DeferredLoad; 