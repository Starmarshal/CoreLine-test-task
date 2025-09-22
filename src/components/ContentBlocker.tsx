import { ReactNode } from 'react';

interface ContentBlockerProps {
  isBlocked: boolean;
  children: ReactNode;
}

const ContentBlocker = ({ isBlocked, children }: ContentBlockerProps) => {
  if (isBlocked) {
    return null;
  }

  return <>{children}</>;
};

export default ContentBlocker;