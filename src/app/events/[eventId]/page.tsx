"use client";
import { getEventById } from '../../utils/_Events.ts';
import React from 'react';
import EventDetails from './EventDetails'; 

interface PageProps {
  params: { eventId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
/*
export default function Page({ params, searchParams }: PageProps) {
 // ...
}
*/
export default async function EventDetailsPage({params, searchParams}: PageProps) {
  const event = await getEventById(params.eventId);

  return (
    <div>
      <EventDetails event={event} />
    </div>
  );
}
