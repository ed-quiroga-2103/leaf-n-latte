import { Heading, Paragraph } from '@/components/ui/Typography';
import React from 'react';
import Header from './Header';
import Showcase from './Showcase';
import ImageHero from './ImageHero';
import BackgroundImageContainer from '@/components/ui/BackgroundImageContainer';

export default function Landing() {
  return (
    <div className="bg-primary flex min-w-full flex-col items-center justify-center">
      <ImageHero />
    </div>
  );
}
