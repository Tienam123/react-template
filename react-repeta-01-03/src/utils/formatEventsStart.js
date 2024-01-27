import { format } from 'date-fns';

export const formatEventsStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};
