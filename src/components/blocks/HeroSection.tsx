import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Heading, Paragraph } from '../ui/Typography';
import Image from 'next/image';
import { Button } from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <Card className="bg-surface max-w-md">
      <CardHeader>
        <Heading>Welcome to an organic experience</Heading>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.pexels.com/photos/1907071/pexels-photo-1907071.jpeg"
            alt="Leaf & Latte Products"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-center">
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, nisl
                ut sollicitudin pulvinar, ipsum odio euismod sem
              </Paragraph>
            </div>
            <div>
              <Button variant="primary" size="lg" className="w-full">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
