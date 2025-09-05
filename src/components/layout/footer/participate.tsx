'use client';

import { Link } from '@heroui/react';
import { LuMapPin } from 'react-icons/lu';

import { routes, type RouteItem } from '~/configs/route';

export function FooterParticipate() {
  return (
    <div className="space-y-6">
      <h4
        className="font-heading text-large font-semibold"
        id="footer-participate-heading"
      >
        Participate
      </h4>
      <nav aria-labelledby="footer-participate-heading">
        <div className="flex flex-col space-y-3">
          {routes
            .filter((route: RouteItem) => route.key === 'participate')
            .flatMap(
              (route: RouteItem) =>
                route.children &&
                route.children.map((child: RouteItem) => (
                  <Link
                    key={child.key}
                    aria-label={child.label}
                    className="text-primary-foreground/80 w-fit"
                    href={child.href || '#'}
                  >
                    {child.label}
                  </Link>
                )),
            )}
        </div>
      </nav>
      <div className="space-y-4">
        <h4
          className="font-heading text-large font-semibold"
          id="footer-event-location-heading"
        >
          Event Location
        </h4>
        <Link
          aria-label="View event location on Google Maps"
          className="flex w-fit items-start space-x-3"
          href="https://maps.app.goo.gl/yyFQECL5dZFmFVfn6"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LuMapPin
            aria-hidden="true"
            className="text-primary-foreground/80 mt-1"
            size={20}
          />
          <div className="text-primary-foreground/80">
            <p>Jogja Expo Center</p>
            <p>Yogyakarta, Indonesia</p>
            <p className="text-small mt-2">October 18-19, 2025</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
