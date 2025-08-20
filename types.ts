
import type React from 'react';

export interface SlideContent {
  title: string;
  copy: {
    heading?: string;
    points: string[];
  }[];
  visual: React.ReactNode;
  hideDefaultLogo?: boolean;
  customCopy?: React.ReactNode;
}