export const confirmationStyles = {
    page: `
        min-h-screen
        w-full
        bg-[#F8EFE5]
        flex
        justify-center
        px-4
        py-6
    `,

    container: `
        relative
        w-full
        max-w-[500px]
        min-h-screen
        bg-[#FBF8F2]
        overflow-hidden
        shadow-[0_4px_20px_rgba(89,97,59,0.08)]
    `,

    content: `
        relative
        z-10
        flex
        flex-col
        items-center
        px-6
        pt-8
        pb-4
    `,

    logo: `
        w-[120px]
        h-auto
        object-contain
    `,

    title: `
        mt-4
        text-center
        font-heading
        text-[2rem]
        leading-[1.1]
        tracking-[0.03em]
        text-[#102B28]
    `,

    subtitle: `
        mt-2
        text-center
        font-body
        text-[0.55rem]
        uppercase
        tracking-[0.3em]
        text-[#59613B]
    `,

    intro: `
        max-w-[330px]
        mt-5
        text-center
        font-heading
        text-[0.72rem]
        leading-[1.45]
        text-[#333333]
    `,

    heart: `
        text-[#A67C32]
        text-[1rem]
    `,

    form: `
        w-full
        max-w-[370px]
        mt-5
        flex
        flex-col
        gap-1
    `,

    inputWrapper: `
        flex
        items-center
        w-full
        min-h-[34px]
        rounded-lg
        border
        border-[#E5D7C4]
        bg-[#FCFAF6]
        overflow-hidden
    `,

    inputIcon: `
        shrink-0
        flex
        items-center
        justify-center
        w-[42px]
        self-stretch
        border-r
        border-[#E5D7C4]
        text-[#9A7440]
        text-[1rem]
    `,

    input: `
        flex-1
        min-w-0
        border-0
        bg-transparent
        outline-none
        px-3
        py-2
        font-body
        text-[0.68rem]
        text-[#59613B]
        placeholder:text-[#9D9A94]
    `,

    questionRow: `
        flex
        items-center
        gap-3
        w-full
        py-2
    `,

    questionIcon: `
        shrink-0
        w-[42px]
        text-center
        text-[#9A7440]
        text-[1.4rem]
    `,

    questionContent: `
        flex
        flex-col
        flex-1
        gap-2
    `,

    question: `
        font-heading
        text-[0.68rem]
        leading-[1.2]
        text-[#333333]
    `,

    options: `
        flex
        items-center
        gap-6
    `,

    option: `
        flex
        items-center
        gap-2
        font-body
        text-[0.65rem]
        text-[#333333]
    `,

    radio: `
        w-[16px]
        h-[16px]
        rounded-full
        border
        border-[#9A7440]
    `,

    textareaWrapper: `
        w-full
        rounded-lg
        border
        border-[#E5D7C4]
        bg-[#FCFAF6]
        overflow-hidden
    `,

    textarea: `
        w-full
        min-h-[72px]
        resize-none
        border-0
        bg-transparent
        outline-none
        px-3
        py-3
        font-body
        text-[0.68rem]
        leading-[1.4]
        text-[#59613B]
        placeholder:text-[#9D9A94]
    `,

    button: `
        self-center
        mt-2
        flex
        items-center
        justify-center
        gap-2
        min-w-[220px]
        rounded-lg
        border
        border-[#C89A36]
        bg-[#59613B]
        px-6
        py-3
        font-heading
        text-[0.65rem]
        uppercase
        tracking-[0.16em]
        text-white
        transition-all
        duration-300
        hover:bg-[#4A5231]
    `,

    buttonHeart: `
        text-[#FFFFFF]
        text-[0.9rem]
    `,

    security: `
        mt-2
        flex
        items-center
        gap-2
        font-body
        text-[0.52rem]
        text-[#59613B]
    `,

    footer: `
        relative
        z-10
        w-full
        mt-5
        min-h-[125px]
        overflow-hidden
    `,

    footerPhrase: `
        absolute
        left-[38px]
        bottom-[42px]
        z-20
        max-w-[135px]
        font-script
        text-[1.15rem]
        leading-[1.15]
        text-[#59613B]
    `,

    footerSmall: `
        absolute
        left-[40px]
        bottom-[23px]
        z-20
        font-body
        text-[0.45rem]
        uppercase
        tracking-[0.18em]
        text-[#59613B]
    `,

    footerHeart: `
        ml-1
        text-[#C89A36]
        text-[0.75rem]
    `,

    footerImage: `
        absolute
        right-0
        bottom-0
        w-[68%]
        h-auto
    `,

    footerImageImg: `
        block
        w-full
        h-auto
        object-contain
    `,

    flowerLeft: `
        absolute
        left-[-8px]
        bottom-0
        z-10
        w-[65px]
        h-auto
        pointer-events-none
    `,
    successTitle: `
    mt-3
    text-center
    font-heading
    text-[1.7rem]
    leading-[1.1]
    text-[#59613B]
`,

successMessage: `
    mt-4
    text-center
    font-body
    text-[0.75rem]
    leading-[1.7]
    text-[#333333]
`,

successButton: `
    mt-6
    min-w-[120px]
    rounded-lg
    border
    border-[#C89A36]
    bg-[#59613B]
    px-6
    py-2.5
    font-heading
    text-[0.7rem]
    uppercase
    tracking-[0.16em]
    text-white
    transition-all
    duration-300
    hover:bg-[#4A5231]
`,
};