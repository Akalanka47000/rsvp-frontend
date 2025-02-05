import { useQuery, UseQueryResult } from 'react-query'
import { EventEndpoints } from '../pages/api/event'
import { EventData } from '../pages/api/event/event.interface'

const EVENTS_LIST = 'EVENTS_LIST'

export function useGetEvents(): UseQueryResult<EventData[], boolean> {
  return useQuery(EVENTS_LIST, EventEndpoints.getEvents)
}

const EVENT_BY_ID = 'EVENT_BY_ID'

export function useGetEvent(
  eventId: string
): UseQueryResult<EventData, boolean> {
  return useQuery([EVENT_BY_ID, { eventId }], EventEndpoints.getEvent)
}

const LATEST_EVENTS = 'LATEST_EVENTS'

export function useGetLatestEvents(): UseQueryResult<EventData[], boolean> {
  return useQuery(LATEST_EVENTS, EventEndpoints.getLatestEvents)
}
