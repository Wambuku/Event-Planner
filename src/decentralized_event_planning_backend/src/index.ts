//Import models
import { event, RSVP, events, rsvps } from './model';

//Function to create an event
function createevent(event:event) {
    events[event.id] =event;

}

//Function to RSVP to an event
function rsvpToevent(rsvp: RSVP) {
    if (rsvps[rsvp.eventId]) {
        rsvps[rsvp.eventId].push(rsvp);
        } else {
            rsvps[rsvp.eventId] = [rsvp];
    }
}

//Function to get event details
function getevent(eventId: string): event {
    return events[eventId];
    }

    //Function to list all RSVPs  for an event
    function listRSVPs(eventId: string): RSVP[] {
        return rsvps[eventId] || [];
    }
