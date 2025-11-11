'use client';

import { createContext, use, useState } from 'react';

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };

  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = use(ReservationContext);

  if (context === 'undefined')
    throw new Error('Context was used outside of the provider');

  return context;
}

export { ReservationProvider, useReservation };
