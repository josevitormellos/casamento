export const playlistPreviewStyles = {
    container: `
        w-full
        max-w-[680px]
        mt-8
        rounded-[28px]
        bg-[#FBF9F5]
        shadow-[0_8px_30px_rgba(89,97,59,0.08)]
        overflow-hidden
    `,

    header: `
        flex
        items-center
        gap-5
        p-6
    `,

    coverWrapper: `
        shrink-0
        w-[125px]
        h-[125px]
        rounded-md
        overflow-hidden
        shadow-[0_5px_15px_rgba(0,0,0,0.12)]
    `,

    cover: `
        w-full
        h-full
        object-cover
    `,

    headerContent: `
        flex
        flex-col
        items-start
        text-left
        min-w-0
    `,

    playlistTitle: `
        font-heading
        text-[1.35rem]
        leading-tight
        text-[#59613B]
    `,

    preview: `
        mt-2
        text-[0.72rem]
        text-secondary
    `,

    platform: `
        text-[#59613B]
        text-[0.8rem]
        ml-1
    `,

    saveText: `
        mt-3
        text-[0.72rem]
        text-secondary
    `,

    list: `
        w-full
        max-h-[285px]
        overflow-y-auto
        px-5
        pb-5
        scrollbar-thin
        scrollbar-thumb-[#C8AF88]
        scrollbar-track-transparent
    `,

    item: `
        flex
        items-center
        gap-3
        w-full
        py-3
    `,

    number: `
        shrink-0
        w-[20px]
        text-center
        font-body
        text-[0.7rem]
        text-[#59613B]
    `,

    musicInfo: `
        flex
        flex-col
        min-w-0
        flex-1
        text-left
    `,

    musicTitle: `
        truncate
        font-body
        text-[0.78rem]
        leading-[1.2rem]
        text-[#8B8B8B]
    `,

    artist: `
        truncate
        font-body
        text-[0.65rem]
        leading-[1rem]
        text-[#59613B]
    `,

    duration: `
        shrink-0
        font-body
        text-[0.7rem]
        text-[#A0A0A0]
    `,
};