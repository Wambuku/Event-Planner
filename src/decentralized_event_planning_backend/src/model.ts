//Define an Event type 
type event = {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
};


//Define RSVP type
type RSVP = {
    eventId: string;
    userId: string;
    response: 'Accepted' | 'Declined' | 'Maybe';

};

//Map to store events
const events: Record<string, event> = {};


//Map to store the RSVPs
const RSVPs: Record<string, RSVP[]> = {};