export interface YouTubePlaylistItem {
    id: string;
    snippet: {
        title: string;
        description: string;
        channelTitle: string;
        position: number;
        thumbnails: {
            default?: {
                url: string;
            };
            medium?: {
                url: string;
            };
            high?: {
                url: string;
            };
            standard?: {
                url: string;
            };
            maxres?: {
                url: string;
            };
        };
        resourceId: {
            videoId: string;
        };
    };
}

export interface YouTubePlaylistResponse {
    items: YouTubePlaylistItem[];
    nextPageToken?: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}
export interface PlaylistMusic {
    id: string;
    title: string;
    artist: string;
    cover: string;
    videoId: string;
}