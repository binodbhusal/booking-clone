'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Bars3Icon, ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid';

import {
  Dialog, Popover, Transition,
  Disclosure,
} from '@headlessui/react';
import cn from '@/lib/utils';

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
  const callToActions = [
    {
      name: 'See Demo Booking',
      href: '#',
      icon: PlayCircleIcon,
    },
    {
      name: 'Contact Support',
      href: '#',
      icon: PhoneIcon,
    },
  ];
  return (
    <header className="bg-[#013894]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-20"
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
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callToActions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label="link"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013894] hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 text-[#013894]" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="text-sm leading-6 text-white font-semibold">
            Flights
          </a>
          <a href="#" className="text-sm leading-6 text-white font-semibold">
            Car Rentals
          </a>
          <a href="#" className="text-sm leading-6 text-white font-semibold">
            Atractions
          </a>
          <a href="#" className="text-sm leading-6 text-white font-semibold">
            Flights + Hotels
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm leading-6 font-semibold text-white">
            Login
            {' '}
            <span aria-hidden="true">&rarr;</span>
          </a>

        </div>
      </nav>
      <Dialog
        as="div"
        open={mobileOpen}
        className="lg:hidden"
        onClose={setMobileOpen}
      >

        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013894] px-6 py-6 sm:max-w-sm sm:ring-1 sm-ring-gray-900/10">
          <div className="flex lg:flex-1 justify-between">
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

            <div className="flex lg:hidden">
              <button
                type="button"
                aria-label="clickme"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" araia-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-50">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        <span>Stays</span>
                        <ChevronDownIcon
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callToActions].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}

                </Disclosure>
                <a href="#" className="block px-3 py-2 -mx-3 text-base leading-7 text-white font-semibold hover:bg-blue-800">
                  Flights
                </a>
                <a href="#" className="block px-3 py-2 -mx-3 text-base leading-7 text-white font-semibold hover:bg-blue-800">
                  {' '}
                  Car Rentals
                </a>
                <a href="#" className="block px-3 py-2 -mx-3 text-base leading-7 text-white font-semibold hover:bg-blue-800">
                  {' '}
                  Atractions
                </a>
                <a href="#" className="block px-3 py-2 -mx-3 text-base leading-7 text-white font-semibold hover:bg-blue-800">
                  {' '}
                  Flights + Hotels
                </a>
                <div className="py-6">
                  <a href="#" className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-blue-800">
                    Login
                  </a>

                </div>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
export default Header;
