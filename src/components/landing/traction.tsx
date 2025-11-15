import { SectionWrapper } from './section-wrapper';

const stats = [
  { value: '10,000+', label: 'Doctors Supported' },
  { value: '2M+', label: 'Notes Automated' },
  { value: '95%', label: 'Reduction in Doc Time' },
];

export function Traction() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-lg">
            <h3 className="text-5xl font-bold tracking-tighter text-primary-foreground/90 sm:text-6xl font-headline">
              {stat.value}
            </h3>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
