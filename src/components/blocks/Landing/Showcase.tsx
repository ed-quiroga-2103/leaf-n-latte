import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import CircleImage from '@/components/ui/CircleImage';
import { Paragraph } from '@/components/ui/Typography';
import Image from 'next/image';
import React from 'react';

export default function Showcase() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-3 md:gap-3">
      {[0, 1, 2].map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="mx-auto mb-4 flex justify-center">
              <CircleImage
                src="https://images.pexels.com/photos/377903/pexels-photo-377903.jpeg"
                alt="Latte"
                responsiveSizes={{
                  sm: 200,
                  md: 200,
                  lg: 250,
                  xl: 250,
                }}
              />
            </div>
            <CardTitle>Seasonal Latte</CardTitle>
            <CardDescription>Caramel • Cacao • Dried fig</CardDescription>
          </CardHeader>
          <CardContent>
            <Paragraph>
              A cosy blend that pairs beautifully with our house pastry selection.
            </Paragraph>
          </CardContent>
          <CardFooter>
            <Button size="sm">Order Now</Button>
            <Button size="sm" variant="outline">
              View Menu
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
