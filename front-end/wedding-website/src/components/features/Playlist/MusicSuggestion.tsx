import { useState } from "react";

import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input/Input";
import { Stack } from "../../ui/Stack/Stack";

import type { MusicSuggestionProps } from "./MusicSuggestion.types";

import { musicSuggestionStyles } from "./MusicSuggestion.styles";

export function MusicSuggestion({

    onSuggest

}: MusicSuggestionProps) {

    const [music, setMusic] = useState("");

    const [artist, setArtist] = useState("");

    return (

        <form

            className={musicSuggestionStyles.form}

            onSubmit={(e) => {

                e.preventDefault();

                onSuggest?.(

                    music,

                    artist

                );

            }}

        >

            <Stack spacing="md">

                <Input

                    label="Música"

                    value={music}

                    onChange={(e) => setMusic(e.target.value)}

                />

                <Input

                    label="Artista"

                    value={artist}

                    onChange={(e) => setArtist(e.target.value)}

                />

                <Button type="submit">

                    Sugerir Música

                </Button>

            </Stack>

        </form>

    );

}