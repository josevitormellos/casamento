import { useEffect, useState } from "react";

import { Section } from "../../ui/Section/Section";
import { Container } from "../../ui/Container/Container";
import { Typography } from "../../ui/Typography/Typography";

import Linha from "../../../assets/Linha.png";

import type { PlaylistProps } from "./Playlist.types";
import { playlistStyles } from "./Playlist.styles";

import { PlaylistPreview } from "./PlaylistPreview";

import { getPlaylistMusics } from "../../../services/youtube/youtube.service";

import type { PlaylistMusic } from "../../../services/youtube/youtube.types";

const playlistUrl =
    "https://music.youtube.com/playlist?list=PLJBaURXYJHJM&si=q-uS0VQQvHMzqTHD";

export function Playlist({ ...props }: PlaylistProps) {
    const [musics, setMusics] = useState<PlaylistMusic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlaylistMusics()
            .then((data) => {
                setMusics(data);
            })
            .catch((error) => {
                console.error(
                    "Erro ao carregar playlist:",
                    error
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Section background="section">
            <Container>
                <div
                    className={playlistStyles.container}
                    {...props}
                >
                    <div className={playlistStyles.icon}>
                        ♫
                    </div>

                    <Typography
                        as="h2"
                        className={playlistStyles.title}
                    >
                        Nossa trilha sonora
                    </Typography>

                    <img
                        src={Linha}
                        alt=""
                        className={playlistStyles.divider}
                    />

                    <Typography
                        color="secondary"
                        className={playlistStyles.description}
                    >
                        Algumas músicas fizeram parte da nossa
                        história, marcaram momentos especiais e
                        hoje fazem parte da nossa trilha sonora.
                    </Typography>

                    {!loading && musics.length > 0 && (
                        <PlaylistPreview
                            musics={musics}
                        />
                    )}

                    <a
                        href={playlistUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={playlistStyles.button}
                    >
                        Ouvir nossa playlist
                    </a>

                    <Typography
                        color="secondary"
                        className={playlistStyles.caption}
                    >
                        YouTube Music
                    </Typography>
                </div>
            </Container>
        </Section>
    );
}
