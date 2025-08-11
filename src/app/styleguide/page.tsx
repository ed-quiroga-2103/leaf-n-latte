// app/styleguide/page.tsx
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Heading, Paragraph, Small } from '@/components/ui/Typography';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ColorSwatch from '@/components/ui/ColorSwatch';

export const metadata = { title: 'Style Guide · Leaf & Latte' };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <Heading level={3} className="text-fg">
        {title}
      </Heading>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  const brand = [
    { label: 'Primary', bgClass: 'bg-primary', textClass: 'text-primary-foreground' },
    { label: 'Secondary', bgClass: 'bg-secondary', textClass: 'text-secondary-foreground' },
    { label: 'Accent', bgClass: 'bg-accent', textClass: 'text-accent-foreground' },
  ];
  const surfaces = [
    { label: 'Background', bgClass: 'bg-bg', textClass: 'text-fg' },
    { label: 'Surface', bgClass: 'bg-surface', textClass: 'text-fg' },
    { label: 'Surface 2', bgClass: 'bg-surface-2', textClass: 'text-fg' },
    { label: 'Border', bgClass: 'bg-border', textClass: 'text-fg' },
    { label: 'Muted', bgClass: 'bg-muted', textClass: 'text-fg' },
    { label: 'Highlight', bgClass: 'bg-highlight', textClass: 'text-fg' },
  ];
  const status = [
    { label: 'Success', bgClass: 'bg-success', textClass: 'text-success-foreground' },
    { label: 'Warning', bgClass: 'bg-warning', textClass: 'text-warning-foreground' },
    { label: 'Danger', bgClass: 'bg-danger', textClass: 'text-danger-foreground' },
    { label: 'Info', bgClass: 'bg-info', textClass: 'text-info-foreground' },
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
      <header className="flex items-center justify-between gap-4">
        <Heading level={2} className="text-fg">
          Leaf & Latte · Style Guide
        </Heading>
        <ThemeToggle />
      </header>

      {/* Typography */}
      <Section title="Typography">
        <div className="space-y-2">
          <Heading level={1}>Heading 1 — The perfect pour.</Heading>
          <Heading level={2}>Heading 2 — Seasonal highlights.</Heading>
          <Heading level={3}>Heading 3 — Community & events.</Heading>
          <Paragraph lead>
            A friendly lead paragraph using the body font. Crafted for readability.
          </Paragraph>
          <Paragraph muted>Muted body copy for helper text and secondary details.</Paragraph>
          <Small>Small text for captions and meta.</Small>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
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

          <Card shadow={false} className="bg-surface-2">
            <CardHeader>
              <CardTitle>Community Event</CardTitle>
              <CardDescription>Latte art workshop — Saturday 10:00</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph muted>
                Learn the basics of microfoam and pouring shapes with our head barista.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary">
                Reserve Spot
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Colours */}
      <Section title="Colours">
        <div className="grid gap-6">
          <div>
            <h4 className="font-heading text-fg mb-2">Brand</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {brand.map((c) => (
                <ColorSwatch key={c.label} {...c} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-fg mb-2">Surfaces & Structural</h4>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
              {surfaces.map((c) => (
                <ColorSwatch key={c.label} {...c} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-fg mb-2">Status</h4>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {status.map((c) => (
                <ColorSwatch key={c.label} {...c} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
