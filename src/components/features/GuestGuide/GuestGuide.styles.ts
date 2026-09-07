export const guestGuideStyles = {
    container: `
        relative
        flex
        flex-col
        items-center
        text-center
        overflow-hidden
        px-6
        pt-10
    `,

    logo: `
        relative
        z-10
        w-[170px]
        h-auto
        object-contain
    `,

    names: `
        relative
        z-10
        mt-1
        text-[0.65rem]
        tracking-[0.25em]
        text-primary
    `,

    heart: `
        relative
        z-10
        mt-3
        w-[14px]
        h-auto
        object-contain
    `,

    title: `
        relative
        z-10
        mt-5
        font-heading
        text-[2.8rem]
        leading-[1]
        tracking-[0.04em]
        text-[#59613B]
    `,

    divider: `
        relative
        z-10
        w-[280px]
        max-w-[90%]
        h-auto
        object-contain
        mt-5
        mb-5
    `,

    description: `
        relative
        z-10
        max-w-[620px]
        text-[0.9rem]
        leading-[1.55rem]
        text-primary
    `,

    flowerLeft: `
        absolute
        left-[-35px]
        top-[-10px]
        z-0
        w-[170px]
        h-auto
        pointer-events-none
    `,

    flowerRight: `
        absolute
        right-[-35px]
        top-[-10px]
        z-0
        w-[170px]
        h-auto
        pointer-events-none
    `,
    panel: `
        relative
        z-10
        w-full
        max-w-[680px]
        mx-auto
        rounded-[18px]
        border
        border-[#E5DCCF]
        bg-[#FBF8F2]
        px-5
        py-7
        shadow-[0_2px_8px_rgba(120,100,70,0.04)]
    `,

    dressCode: `
        flex
        flex-col
        items-center
        text-center
    `,

    iconCircle: `
        flex
        items-center
        justify-center
        w-[105px]
        h-[105px]
        rounded-full
        border
        border-[#DCC8A8]
        text-[#675837]
    `,
    
    dressIcon: `
    w-[98px]
    h-[98px]

    object-contain
`,

    panelTitle: `
        mt-5
        font-heading
        text-[1.8rem]
        leading-none
        tracking-[0.04em]
        text-[#59613B]
    `,

    smallDivider: `
        flex
        items-center
        justify-center
        gap-3
        w-[150px]
        mt-3
        mb-5
    `,

    dividerHeart: `
        text-[#C89A36]
        text-[0.9rem]
        leading-none
    `,

    panelText: `
        max-w-[520px]
        text-[0.88rem]
        leading-[1.65rem]
        mb-5
    `,

    panelSeparator: `
        w-full
        h-px
        bg-[#DCC8A8]
        my-7
    `,

    reservedColors: `
        flex
        flex-col
        items-center
        text-center
    `,

    colorsTitle: `
        font-heading
        text-[1.25rem]
        leading-[1.3]
        tracking-[0.03em]
        text-[#9A6E28]
    `,

    colorsDescription: `
        mt-2
        text-[0.85rem]
        leading-[1.5rem]
    `,

    colorsGrid: `
        grid
        grid-cols-2
        gap-x-4
        gap-y-7
        w-full
        mt-6
    `,

    colorItem: `
        flex
        flex-col
        items-center
        text-center
    `,

    colorCircle: `
        block
        w-[58px]
        h-[58px]
        rounded-full
        mb-3
    `,

    colorName: `
        text-[0.78rem]
        leading-[1.25rem]
    `,

    colorsFooter: `
        flex
        items-start
        justify-center
        gap-3
        w-full
        max-w-[500px]
        mt-7
    `,

    footerBranch: `
        shrink-0
        text-[#7A804E]
        text-[1.6rem]
        leading-none
        rotate-[-20deg]
    `,

    footerText: `
        text-[0.75rem]
        leading-[1.35rem]
        text-left
    `,
    panelHeader: `
    flex
    flex-col
    items-center
`,

locationMainIcon: `
    text-[2.5rem]
    leading-none
`,

highlightText: `
    mt-2
    text-center
    text-[0.95rem]
    leading-[1.6rem]
    font-semibold
`,

infoItem: `
    flex
    items-center
    gap-4
    w-full
    mt-6
`,

infoIcon: `
    flex
    items-center
    justify-center
    shrink-0
    w-[52px]
    h-[52px]
    rounded-full
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    text-[1.6rem]
`,

infoText: `
    flex-1
    text-left
    text-[0.82rem]
    leading-[1.5rem]
`,

infoSeparator: `
    w-full
    border-t
    border-dashed
    border-[#DCC8A8]
    mt-5
`,
panelBefore: `
    relative
    w-full
    max-w-[680px]
    mx-auto
    mt-5
    overflow-hidden
    rounded-[18px]
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    pt-5
    pb-7
`,

clockIcon: `
    text-[3.2rem]
    leading-none
    text-[#675837]
`,

beforeContent: `
    relative
    z-10
    px-6
    text-center
`,

beforeText: `
    mt-4
    text-left
    text-[0.88rem]
    leading-[1.6rem]
`,

beforeImage: `
    block
    w-full
    h-auto
    mt-6
    object-contain
    object-bottom
`,
childrenIconImage: `
    w-[138px]
    h-[138px]
    object-contain
`,
panelChildren: `
    relative
    w-full
    max-w-[680px]
    mx-auto
    mt-5
    overflow-hidden
    rounded-[18px]
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    px-6
    py-7
`,

childrenContent: `
    relative
    z-10
    w-full
    flex
    flex-col
    items-center
`,

childrenIcon: `
    absolute
    top-[12px]
    left-1/2
    -translate-x-1/2
    text-[1.8rem]
    leading-none
    text-[#675837]
`,

childrenFaces: `
    text-[2.5rem]
    leading-none
    text-[#675837]
`,

childrenIntro: `
    mt-2
    text-center
    text-[0.95rem]
    leading-[1.6rem]
    font-semibold
`,

childrenText: `
    w-full
    max-w-[520px]
    mt-4
    text-left
    text-[0.88rem]
    leading-[1.6rem]
`,
panelShare: `
    relative
    w-full
    max-w-[680px]
    mx-auto
    mt-5
    overflow-hidden
    rounded-[18px]
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    px-5
    py-7
`,

shareContent: `
    relative
    z-10
    flex
    flex-col
    items-center
    text-center
`,

cameraIcon: `
    text-[3.2rem]
    leading-none
    text-[#675837]
`,

shareTitle: `
    mt-4
    max-w-[300px]
    font-heading
    text-[1.55rem]
    leading-[1.15]
    tracking-[0.02em]
    text-[#59613B]
`,

shareText: `
    max-w-[500px]
    mt-4
    text-[0.82rem]
    leading-[1.5rem]
`,

instagramBox: `
    flex
    items-center
    w-full
    max-w-[380px]
    min-h-[65px]
    mt-5
    rounded-[10px]
    border
    border-[#E5DCCF]
    bg-[#F9F4EC]
    px-4
    py-3
    text-left
`,

instagramIcon: `
    flex
    items-center
    justify-center
    shrink-0
    w-[42px]
    h-[42px]
    text-[2rem]
    text-[#675837]
`,

instagramContent: `
    flex
    flex-col
    ml-3
`,

instagramLabel: `
    text-[0.7rem]
    leading-[1.2rem]
    tracking-[0.03em]
`,

instagramHandle: `
    text-[0.95rem]
    leading-[1.3rem]
    font-semibold
`,

instagramHeart: `
    ml-auto
    shrink-0
    text-[2rem]
    text-[#9A8666]
`,

shareFooter: `
    max-w-[500px]
    mt-4
    text-[0.78rem]
    leading-[1.45rem]
`,
panelGifts: `
    relative
    w-full
    max-w-[680px]
    mx-auto
    mt-5
    overflow-hidden
    rounded-[18px]
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    px-6
    py-7
`,

giftsContent: `
    relative
    z-10
    flex
    flex-col
    items-center
    text-center
`,

giftIcon: `
    text-[3rem]
    leading-none
    text-[#675837]
`,

giftsText: `
    max-w-[500px]
    text-[0.85rem]
    leading-[1.55rem]
`,

giftsButton: `
    flex
    items-center
    justify-center
    gap-3
    w-full
    max-w-[300px]
    min-h-[50px]
    mt-5
    rounded-[12px]
    border-2
    border-[#D4A72C]
    bg-[#59613B]
    px-5
    py-3
    text-[0.72rem]
    tracking-[0.08em]
    text-white
    transition-all
    duration-300
    hover:bg-[#4B5231]
`,

giftsButtonIcon: `
    w-[24px]
    h-[24px]

    object-contain
`,
panelConfirmation: `
    relative
    w-full
    max-w-[680px]
    mx-auto
    mt-5
    overflow-hidden
    rounded-[18px]
    border
    border-[#E5DCCF]
    bg-[#FBF8F2]
    px-6
    py-7
`,

confirmationContent: `
    relative
    z-10
    flex
    flex-col
    items-center
    text-center
`,

confirmationIcon: `
    flex
    items-center
    justify-center
    text-[3rem]
    leading-none
    text-[#675837]
`,

confirmationTitle: `
    mt-4
    font-heading
    text-[1.55rem]
    leading-[1.2]
    tracking-[0.02em]
    text-[#59613B]
`,

confirmationText: `
    text-[0.88rem]
    leading-[1.6rem]
`,

confirmationButton: `
    flex
    items-center
    justify-center
    gap-3
    w-full
    max-w-[290px]
    min-h-[50px]
    mt-5
    rounded-[12px]
    border-2
    border-[#D4A72C]
    bg-[#59613B]
    px-5
    py-3
    text-[0.72rem]
    tracking-[0.08em]
    text-white
    transition-all
    duration-300
    hover:bg-[#4B5231]
`,
footerImage: `
    w-full
    mt-8
    overflow-hidden
`,

footerImageImg: `
    block
    w-full
    h-auto
    object-contain
`,
confirmationButtonIcon: `
    flex
    items-center
    justify-center
    w-[26px]
    h-[26px]
    rounded-full
    border
    border-[#D4A72C]
    text-[#D4A72C]
    text-[1rem]
    leading-none
`,
footer: `
    relative
    w-full
    mt-9
    border-t
    border-[#8E8A7B]
    pt-6
    pb-3
    text-center
    overflow-hidden
`,
footerTextTitle: `
    relative
    z-10
    px-16
    font-script
    text-[1.05rem]
    leading-[1.5]
    text-[#59613B]
`,

footerHeart: `
    ml-2
    text-[#C89A36]
    text-[1.1rem]
`,
panels: `
    flex
    flex-col
    w-full
    gap-5
    mt-8
`,
footerFlowerLeft: `
    absolute
    left-[-45px]
    bottom-[-45px]
    w-[125px]
    h-auto
    pointer-events-none
`,

footerFlowerRight: `
    absolute
    right-[-45px]
    bottom-[-45px]
    w-[125px]
    h-auto
    pointer-events-none
`,
};