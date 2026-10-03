import type { RSVPGuest } from "./RSVP.types";

export interface RSVPGuestsProps {

    guests: RSVPGuest[];

    onGuestsChange: (guests: RSVPGuest[]) => void;

}