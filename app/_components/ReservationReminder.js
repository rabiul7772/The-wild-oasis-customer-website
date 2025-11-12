'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 py-2 px-2 md:py-5 md:px-8 rounded-full bg-accent-500 text-primary-800 text-sm md:text-base font-semibold shadow-xl shadow-slate-900 flex flex-col md:flex-row gap-3 md:gap-8 items-center w-[90%] md:w-auto max-w-md md:max-w-none text-center md:text-left">
      <p className="leading-snug">
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button
        className="rounded-full p-1.5 hover:bg-accent-600 transition-all mt-1 md:mt-0"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
