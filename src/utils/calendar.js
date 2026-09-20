/**
 * Calendar Utilities
 * Generates client-side .ics files and Google Calendar event URLs
 */

import { invitationData } from '../data/invitation';

/**
 * Converts a Date or ISO string into ICS UTC date format (YYYYMMDDTHHMMSSZ)
 */
function formatICSDate(date) {
  const pad = (n) => (n < 10 ? '0' + n : n);
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

/**
 * Triggers download of an .ics file for the event
 */
export function downloadICSFile() {
  const { title, description, location, startISO, endISO } = invitationData.calendarDetails;
  
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);
  const startFormatted = formatICSDate(startDate);
  const endFormatted = formatICSDate(endDate);
  const nowFormatted = formatICSDate(new Date());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Raghuwanshi Family//Ganesh Mahaprasad Invitation//HI',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:ganesh-mahaprasad-${Date.now()}@raghuwanshi.family`,
    `DTSTAMP:${nowFormatted}`,
    `DTSTART:${startFormatted}`,
    `DTEND:${endFormatted}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    'DESCRIPTION:गणेश जी का महाप्रसाद 2 घंटे में प्रारंभ होगा।',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'Ganesh_Mahaprasad_Invitation.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

/**
 * Generates direct Google Calendar web link
 */
export function getGoogleCalendarUrl() {
  const { title, description, location, startISO, endISO } = invitationData.calendarDetails;
  const startDate = new Date(startISO);
  const endDate = new Date(endISO);
  
  const startFormatted = formatICSDate(startDate);
  const endFormatted = formatICSDate(endDate);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startFormatted}/${endFormatted}`,
    details: description,
    location: location,
    sf: 'true',
    output: 'xml'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
