'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { BedDoubleIcon, CalendarIcon } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import cn from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';

const formSchema = z.object({
  location: z.string().min(2, 'Must be at least 2 characters').max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: 'Please select at least one adult',
    })
    .max(12, { message: 'Maximum 12 adults occupancy' }),
  children: z.string().min(0).max(12, {
    message: 'Maximum 12 children occupancy',
  }),
  rooms: z.string().min(1, {
    message: 'please select at least 1 room',
  }),
});

function Search() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: '',
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: '1',
      children: '0',
      rooms: '1',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input placeholder="Lisbon, Portugal" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Dates</FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      name="dates"
                      variant="outline"
                      className={cn(
                        'w-full  justify-start text-left font-normal',
                        !field.value.from && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                      {field.value?.from ? (
                        field.value?.to ? (
                          <>
                            {format(field.value?.from, 'LLL, dd, y')}
                            -

                            {format(field.value?.to, 'LLL, dd, y')}
                          </>
                        ) : (
                          format(field.value?.from, 'LLL, dd, y')
                        )
                      ) : (
                        <span>Select your date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      initialFocus
                      mode="range"
                      selected={field.value}
                      defaultMonth={field.value.from}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>

            )}
          />
        </div>
        <div className="flex w-full items-center space-x-2">
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white flex">
                    Adults
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input type="number" placeholder="Adults" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white flex">
                    Children
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input type="number" placeholder="Adults" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white flex">
                    Rooms
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input type="number" placeholder="Adults" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
export default Search;
