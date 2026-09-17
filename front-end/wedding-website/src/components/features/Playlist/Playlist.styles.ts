export const playlistStyles = {
    container: `
        relative
        flex
        flex-col
        items-center
        text-center
        px-6
        py-16
        overflow-hidden
    `,

    icon: `
        text-[#59613B]
        text-[2.5rem]
        leading-none
        mb-4
    `,

    title: `
        font-heading
        text-[2.8rem]
        leading-none
        text-[#59613B]
    `,

    divider: `
        w-[280px]
        max-w-[80%]
        h-auto
        object-contain
        my-5
    `,

    description: `
        max-w-[22rem]
        text-[0.9rem]
        leading-[1.8rem]
        text-secondary
    `,

    button: `
        mt-8
        inline-flex
        items-center
        justify-center
        min-w-[190px]
        rounded-full
        border
        border-[#C8AF88]
        bg-[#9A8666]
        px-7
        py-3
        text-[0.75rem]
        uppercase
        tracking-[0.12em]
        text-white
        transition-all
        duration-300
        hover:bg-[#857354]
    `,

    caption: `
        mt-3
        text-[0.7rem]
        text-secondary
    `,
};