import { SectionWrapper } from './section-wrapper';
import { BriefcaseMedical, BotMessageSquare, Clock } from 'lucide-react';

const stats = [
  { value: '1,800+', label: 'Doctors Using Vega OS Across Asia', icon: <BriefcaseMedical className="h-8 w-8 text-primary-foreground/80"/> },
  { value: '50,000+', label: 'Notes Automated', icon: <BotMessageSquare className="h-8 w-8 text-primary-foreground/80"/> },
  { value: 'Real-time', label: 'Clinical Reasoning Support', icon: <Clock className="h-8 w-8 text-primary-foreground/80"/> },
];

export function Traction() {
  return (
    <SectionWrapper className="bg-secondary/30">
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-lg flex flex-col items-center gap-4">
             <div className="bg-primary/50 rounded-full p-3 flex items-center justify-center">
                {stat.icon}
              </div>
            <h3 className="text-4xl font-bold tracking-tighter text-primary-foreground/90 sm:text-5xl font-headline">
              {stat.value}
            </h3>
            <p className="mt-2 text-muted-foreground text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
