'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Bars3Icon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid';

import { Popover, Transition } from '@headlessui/react';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const products = [
    {
      name: 'Book a Stay',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: HomeIcon,
    },
    {
      name: 'Book a Flight',
      description: 'Speak directly to our customer',
      href: '#',
      icon: PaperAirplaneIcon,
    },
    {
      name: 'Contact our Support Team',
      description: 'Your customer data will be safe and secure',
      href: '#',
      icon: ChatBubbleLeftIcon,
    },
  ];
  return (
    <header className="bg-[#013894]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-40"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image
              className="w-auto"
              src="/logo.AVIF"
              alt="logo"
              width={120}
              height={40}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="clickme"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" araia-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center inline-block gap-x-1 text-sm font-semibold leading-6 text-white">
              <span>Stays</span>
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon className="h-6 w-6 text-[#013894] group-hover:text-blue-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013894]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#013894]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
}
export default Header;
