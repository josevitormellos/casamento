import { RSVP as RSVPFeature} from "../../components/features/RSVP/RSVP";

import { rsvpPageStyles } from "./RSVP.styles";

import type { RSVPData } from "../../components/features/RSVP/RSVP.types";
export function RSVP() {

    function handleSubmit(data: RSVPData) {

    console.log(data);

}

    return (

        <main className={rsvpPageStyles.container}>

            <RSVPFeature

                loading={false}

                maxGuests={4}

                onSubmit={handleSubmit}

            />

        </main>

    );

}