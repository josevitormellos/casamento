import type { PlaylistEmbedProps } from "./PlaylistEmbed.types";

import { playlistEmbedStyles } from "./PlaylistEmbed.styles";

export function PlaylistEmbed({

    spotifyUrl

}: PlaylistEmbedProps) {

    return (

        <iframe

            className={playlistEmbedStyles.iframe}

            src={spotifyUrl}

            allow="autoplay; clipboard-write; encrypted-media"

            loading="lazy"

            title="Spotify Playlist"

        />

    );

}