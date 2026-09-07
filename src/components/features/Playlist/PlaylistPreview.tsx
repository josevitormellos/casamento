import type { PlaylistPreviewProps } from "./PlaylistPreview.types";
import { playlistPreviewStyles } from "./PlaylistPreview.styles";

export function PlaylistPreview({
    musics,
}: PlaylistPreviewProps) {
    if (!musics.length) {
        return null;
    }

    const cover =
        musics[0].cover;

    return (
        <div className={playlistPreviewStyles.container}>
            <div className={playlistPreviewStyles.header}>
                <div className={playlistPreviewStyles.coverWrapper}>
                    <img
                        src={cover}
                        alt="Capa da playlist"
                        className={playlistPreviewStyles.cover}
                    />
                </div>

                <div className={playlistPreviewStyles.headerContent}>
                    <h3 className={playlistPreviewStyles.playlistTitle}>
                        Nossa trilha sonora
                    </h3>

                    <span className={playlistPreviewStyles.preview}>
                        Prévia
                        <span className={playlistPreviewStyles.platform}>
                            YouTube Music
                        </span>
                    </span>

                    <span className={playlistPreviewStyles.saveText}>
                        Músicas que fazem parte da nossa história
                    </span>
                </div>
            </div>

            <div className={playlistPreviewStyles.list}>
                {musics.map((music, index) => (
                    <div
                        key={music.id}
                        className={playlistPreviewStyles.item}
                    >
                        <span className={playlistPreviewStyles.number}>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className={playlistPreviewStyles.musicInfo}>
                            <span className={playlistPreviewStyles.musicTitle}>
                                {music.title}
                            </span>

                            <span className={playlistPreviewStyles.artist}>
                                {music.artist}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}