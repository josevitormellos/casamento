export interface RSVPGuest {

    id: number;

    name: string;

    confirmed: boolean;

}

export interface RSVPData {

    name: string;

    email: string;

    phone: string;

    attending: boolean;

    guests: RSVPGuest[];

    message?: string;

}

export interface RSVPProps {

    title?: string;

    subtitle?: string;

    loading?: boolean;

    maxGuests?: number;

    onSubmit: (data: RSVPData) => void;

}