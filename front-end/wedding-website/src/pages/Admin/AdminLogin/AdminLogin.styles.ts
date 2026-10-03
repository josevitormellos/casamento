export const adminLoginStyles = {
    container: `
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        bg-[#F8EFE5]
        px-6
    `,

    card: `
        w-full
        max-w-[380px]
        flex
        flex-col
        items-center
        rounded-xl
        border
        border-[#C8AF88]
        bg-[#FBF8F2]
        px-6
        py-8
        shadow-[0_8px_30px_rgba(89,97,59,0.08)]
    `,

    title: `
        text-center
        font-heading
        text-[1.8rem]
        text-[#59613B]
    `,

    subtitle: `
        mt-2
        text-center
        font-body
        text-[0.7rem]
        uppercase
        tracking-[0.12em]
        text-[#9A8666]
    `,

    input: `
        mt-4
        w-full
        rounded-lg
        border
        border-[#E5D7C4]
        bg-[#FCFAF6]
        px-4
        py-3
        font-body
        text-[0.75rem]
        text-[#59613B]
        outline-none
        focus:border-[#C89A36]
    `,

    error: `
        mt-3
        text-center
        font-body
        text-[0.65rem]
        text-red-700
    `,

    button: `
        mt-5
        w-full
        rounded-lg
        border
        border-[#C89A36]
        bg-[#59613B]
        px-6
        py-3
        font-heading
        text-[0.7rem]
        uppercase
        tracking-[0.15em]
        text-white
        transition
        hover:bg-[#4A5231]
        disabled:opacity-60
    `,
};