import { Button } from '@/components/ui/Button';
import { Heading, Paragraph } from '@/components/ui/Typography';
const imageUrl = 'https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg';
export default function ImageHero() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <img src={imageUrl} alt="Example" className="h-auto w-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-xs">
          <Heading className="text-accent text-3xl md:text-6xl" level={1}>
            Find your balance at <br /> Leaf & Latte
          </Heading>
          <Button variant="secondary" className="mt-10">
            Make a Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}
