'use client';

import { Card } from '@heroui/card';
import React from 'react';

interface CounterCardProps {
  value: number;
  label: string;
}

export function HeroCountdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date('2025-10-18T00:00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return null;
  }

  return (
    <div className="bg-primary/20 -mt-[14px] pt-[14px]">
      <div className="mx-auto max-w-7xl space-y-4 px-6 py-4 text-center md:py-8">
        <p className="font-heading text-foreground/80 text-[clamp(1em,2.5vw,2em)]">
          Your adventure begins in
        </p>

        <div className="flex justify-center gap-4">
          <CounterCard label="DAYS" value={timeLeft.days} />
          <CounterCard label="HOURS" value={timeLeft.hours} />
          <CounterCard label="MINUTES" value={timeLeft.minutes} />
          <CounterCard label="SECONDS" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

function CounterCard({ label, value }: CounterCardProps) {
  return (
    <Card className="w-[clamp(5.249375rem,8.9258vw,6.913rem)] py-4">
      <div className="text-primary text-center text-[clamp(1.5em,2.5vw,3em)] font-bold">
        {value}
      </div>
      <div className="text-muted-foreground text-center text-[clamp(0.75em,2.5vw,0.875em)] font-medium">
        {label}
      </div>
    </Card>
  );
}
