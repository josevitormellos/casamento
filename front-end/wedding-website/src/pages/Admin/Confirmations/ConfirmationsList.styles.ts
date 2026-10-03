export const confirmationsListStyles = {
    container: `
        min-h-screen
        w-full
        bg-[#F8EFE5]
        px-4
        py-8
    `,

    header: `
        w-full
        max-w-[1400px]
        mx-auto
        mb-6
    `,

    title: `
        font-heading
        text-[2rem]
        text-[#59613B]
    `,

    total: `
        mt-2
        font-body
        text-[0.85rem]
        text-[#333333]
    `,

    tableWrapper: `
        w-full
        max-w-[1400px]
        mx-auto
        overflow-x-auto
        rounded-lg
        border
        border-[#C8AF88]
        bg-[#FBF8F2]
    `,

    table: `
        w-full
        min-w-[1000px]
        border-collapse
        font-body
        text-[0.7rem]
        text-[#333333]

        [&_th]:border-b
        [&_th]:border-[#D8C3A5]
        [&_th]:bg-[#F5EEE3]
        [&_th]:px-4
        [&_th]:py-3
        [&_th]:text-left
        [&_th]:font-semibold
        [&_th]:uppercase
        [&_th]:tracking-[0.06em]
        [&_th]:text-[#59613B]

        [&_td]:border-b
        [&_td]:border-[#EEE4D7]
        [&_td]:px-4
        [&_td]:py-3
        [&_td]:align-top

        [&_tbody_tr:hover]:bg-[#FCF8F2]
    `,

    error: `
        text-center
        font-body
        text-red-700
    `,
};