import { HeroImage } from '~/components/app/home/hero/image';
import { HeroCountdown } from '~/components/app/home/hero/countdown';

export function HomeHero() {
  return (
    <section>
      <HeroImage />
      <HeroCountdown />
    </section>
  );
}
