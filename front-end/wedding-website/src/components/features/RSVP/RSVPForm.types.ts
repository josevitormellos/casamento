import type { RSVPData } from "./RSVP.types";

export interface RSVPFormProps {

    loading?: boolean;

    maxGuests: number;

    onSubmit: (data: RSVPData) => void;

}