import { Playlist as PlaylistFeature } from "../../components/features/Playlist/Playlist";
import { playlistPageStyles } from "./Playlist.styles";

export function Playlist() {
    return (
        <main className={playlistPageStyles.container}>
            <PlaylistFeature />
        </main>
    );
}