'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/components/ui/button';
import ImageModal from '@/components/ui/view-image';
import { Features } from '@/utils/features';
import Spot from '@/public/spot.png';
import { useState } from 'react';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col items-center py-16 text-center">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        <div
          className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30"
          style={{
            transform: 'rotateX(75deg) translate(-50%, 400px)',
            backgroundImage:
              'radial-gradient(50% 50% at center,transparent,hsl(var(--background))), repeating-linear-gradient(to right,hsl(var(--primary)),hsl(var(--primary)) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,hsl(var(--primary)),hsl(var(--primary)) 2px,transparent 3px,transparent 100px)',
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-1] select-none overflow-hidden opacity-30">
        <Image
          alt="spot"
          src={Spot}
          sizes="100vw"
          className="size-full min-w-[800px] max-w-fd-container"
          priority
        />
      </div>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Welcome to Octoflow
      </h1>
      <p className="flex text-fd-muted-foreground">
        The perfect GitHub tool for developers, never miss a flow again 😉
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <a
          href="https://github.com/Git-Logs"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ size: 'lg' }))}
        >
          Open Source
        </a>
        <Link
          href="/docs"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
        >
          Get Started
        </Link>
      </div>
      <FeaturesList />
    </main>
  );
}

function FeaturesList(): React.ReactElement {
  return (
    <div className="container py-16">
      <h2 className="mb-4 text-2xl font-semibold text-center">Features</h2>
      <p className="mb-2 font-semibold text-center text-md">
        Check out all our amazing features
      </p>
      <p className="mb-12 text-xs text-fd-muted-foreground">
        (fun fact: you can expand the feature image by clicking on it)
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            heading={feature.heading}
            children={feature.children}
            image={feature.image}
            alt={feature.alt}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({
  icon: Icon,
  heading,
  children,
  image,
  alt,
}: {
  icon: React.ComponentType;
  heading: React.ReactNode;
  children: React.ReactNode;
  image: string;
  alt: string;
}): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-6 transition-all border border-transparent shadow-lg rounded-2xl hover:shadow-fd-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}>
      <div className="flex items-center justify-center mb-4 text-white">
        <Icon />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{heading}</h3>
      <p className="text-fd-muted-foreground">{children}</p>
      <div className="flex justify-center mt-4">
        <Image
          src={image}
          alt={alt}
          width={48}
          height={48}
          className="object-cover w-full h-48 rounded-lg"
          onClick={openModal}
        />
      </div>
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} imageUrl={image} altText={alt} />
    </div>
  );
}