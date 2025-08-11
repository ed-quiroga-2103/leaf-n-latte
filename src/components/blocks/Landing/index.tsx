import { Heading, Paragraph } from '@/components/ui/Typography';
import React from 'react';
import Header from './Header';
import Showcase from './Showcase';

export default function Landing() {
  return (
    <div className="bg-bg flex flex-col items-center justify-center">
      <Header />
      <Showcase />
    </div>
  );
}
