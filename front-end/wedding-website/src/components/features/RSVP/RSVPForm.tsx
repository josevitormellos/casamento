import { useState } from "react";

import type { ChangeEvent, FormEvent } from "react";

import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card/Card";
import { Input } from "../../ui/Input/Input";
import { Stack } from "../../ui/Stack/Stack";

import type { RSVPFormProps } from "./RSVPForm.types";
import type { RSVPGuest } from "./RSVP.types";

import { RSVPGuests } from "./RSVPGuests";

import { rsvpFormStyles } from "./RSVPForm.styles";

export function RSVPForm({

    loading = false,

    maxGuests,

    onSubmit

}: RSVPFormProps) {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState("");

    const [attending, setAttending] = useState(true);

    const [guests, setGuests] = useState<RSVPGuest[]>([]);

    function addGuest() {

        if (guests.length >= maxGuests) {

            return;

        }

        setGuests(current => [

            ...current,

            {

                id: Date.now(),

                name: "",

                confirmed: true

            }

        ]);

    }

    /*function removeGuest(id: number) {

        setGuests(current =>

            current.filter(guest => guest.id !== id)

        );

    }*/

    function handleGuestsChange(updatedGuests: RSVPGuest[]) {

        setGuests(updatedGuests);

    }

    function handleSubmit(

        event: FormEvent<HTMLFormElement>

    ) {

        event.preventDefault();

        onSubmit({

            name,

            email,

            phone,

            attending,

            guests,

            message

        });

    }

    return (

        <Card>

            <form

                onSubmit={handleSubmit}

                className={rsvpFormStyles.form}

            >

                <Stack spacing="lg">

                    <Input

                        label="Nome"

                        value={name}

                        disabled={loading}

                        onChange={(e: ChangeEvent<HTMLInputElement>) =>

                            setName(e.target.value)

                        }

                    />

                    <Input

                        label="E-mail"

                        type="email"

                        value={email}

                        disabled={loading}

                        onChange={(e) =>

                            setEmail(e.target.value)

                        }

                    />

                    <Input

                        label="Telefone"

                        value={phone}

                        disabled={loading}

                        onChange={(e) =>

                            setPhone(e.target.value)

                        }

                    />

                    <Input

                        label="Mensagem"

                        value={message}

                        disabled={loading}

                        onChange={(e) =>

                            setMessage(e.target.value)

                        }

                    />

                    <Input

                        label="Confirmarei presença"

                        type="checkbox"

                        checked={attending}

                        disabled={loading}

                        onChange={(e) =>

                            setAttending(e.target.checked)

                        }

                    />

                    {

                        attending && (

                            <>

                                <RSVPGuests

                                    guests={guests}

                                    onGuestsChange={handleGuestsChange}

                                />

                                <Button

                                    type="button"

                                    variant="secondary"

                                    disabled={

                                        loading ||

                                        guests.length >= maxGuests

                                    }

                                    onClick={addGuest}

                                >

                                    Adicionar acompanhante

                                </Button>

                            </>

                        )

                    }

                    <Button

                        type="submit"

                        fullWidth

                        loading={loading}

                    >

                        Confirmar Presença

                    </Button>

                </Stack>

            </form>

        </Card>

    );

}