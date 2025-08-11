import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Typography';
import HeroSection from '@/components/blocks/HeroSection';
import BackgroundImageContainer from '@/components/ui/BackgroundImageContainer';
import Landing from '@/components/blocks/Landing';

export default function Home() {
  return (
    <div className="bg-bg mt-4 flex min-h-screen flex-col items-center">
      <Landing />
    </div>
  );
}
