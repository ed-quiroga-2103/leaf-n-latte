import { Heading, Paragraph } from '@/components/ui/Typography';
import React from 'react';

export default function Header() {
  return (
    <div className="w-10/12 px-8 py-4 text-center">
      <Heading className="mb-4">
        Find your balance at <br /> Leaf & Latte
      </Heading>
      <Paragraph>
        Discover a place that feels like home. Take advantage of our peaceful environment. Whether
        you're here to socialize or find solitude, we have something for everyone.
      </Paragraph>
    </div>
  );
}
