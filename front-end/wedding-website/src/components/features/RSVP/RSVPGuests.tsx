import type { RSVPGuestsProps } from "./RSVPGuests.types";

import { Input } from "../../ui/Input/Input";
import { Stack } from "../../ui/Stack/Stack";

export function RSVPGuests({

    guests,

    onGuestsChange

}: RSVPGuestsProps) {

    function updateName(

        index: number,

        value: string

    ) {

        const copy = [...guests];

        copy[index].name = value;

        onGuestsChange(copy);

    }

    return (

        <Stack spacing="md">

            {

                guests.map((guest, index) => (

                    <Input

                        key={guest.id}

                        label={`Convidado ${index + 1}`}

                        value={guest.name}

                        onChange={(e) =>

                            updateName(

                                index,

                                e.target.value

                            )

                        }

                    />

                ))

            }

        </Stack>

    );

}