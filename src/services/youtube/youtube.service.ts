import type {
    PlaylistMusic,
    YouTubePlaylistResponse,
} from "./youtube.types";

const API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

export async function getPlaylistMusics(): Promise<PlaylistMusic[]> {
    const params = new URLSearchParams({
        part: "snippet",
        playlistId: PLAYLIST_ID,
        maxResults: "50",
        key: API_KEY,
    });

    const response = await fetch(`${API_URL}?${params.toString()}`);

    if (!response.ok) {
        throw new Error("Não foi possível carregar a playlist.");
    }

    const data: YouTubePlaylistResponse = await response.json();

    return data.items
        .sort(
            (a, b) =>
                a.snippet.position - b.snippet.position
        )
        .map((item) => ({
            id: item.id,
            title: item.snippet.title,
            artist: item.snippet.channelTitle,
            cover:
                item.snippet.thumbnails.maxres?.url ??
                item.snippet.thumbnails.high?.url ??
                item.snippet.thumbnails.medium?.url ??
                item.snippet.thumbnails.default?.url ??
                "",
            videoId: item.snippet.resourceId.videoId,
        }));
}