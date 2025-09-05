'use client';

import { Button, Link } from '@heroui/react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export function FooterBrand() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Image
          alt="Comic Paradise Logo"
          className="h-11 w-[236px]"
          height={44}
          src="/logo-horizontal-white.png"
          width={236}
        />

        <p className="text-primary-foreground/80 leading-relaxed">
          Comic Paradise (COMIPARA) adalah acara kreatif yang diadakan dua kali
          setahun di Yogyakarta. Acara ini berfokus pada komik, webtoon, dan
          produk-produk terkait lainnya.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-large font-heading font-semibold">
          Follow Our Journey
        </h4>
        <div className="flex space-x-4">
          <Button
            isIconOnly
            aria-label="Follow us on Facebook"
            as={Link}
            color="primary"
            href="https://www.facebook.com/Comipara"
            rel="noopener noreferrer"
            target="_blank"
            variant="faded"
          >
            <FaFacebook aria-hidden="true" size={20} />
          </Button>
          <Button
            isIconOnly
            aria-label="Follow us on Instagram"
            as={Link}
            color="primary"
            href="https://www.instagram.com/comipara/"
            rel="noopener noreferrer"
            target="_blank"
            variant="faded"
          >
            <FaInstagram aria-hidden="true" size={20} />
          </Button>
          <Button
            isIconOnly
            aria-label="Follow us on Twitter/X"
            as={Link}
            color="primary"
            href="https://twitter.com/comipara_id"
            rel="noopener noreferrer"
            target="_blank"
            variant="faded"
          >
            <FaXTwitter aria-hidden="true" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
