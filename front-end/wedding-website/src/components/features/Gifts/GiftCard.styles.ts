export const giftCardStyles = {

container: `
    relative

    w-full
    h-[310px]

    rounded-md

    border
    border-[#C8AF88]

    bg-[#F8EFE5]

    flex
    flex-col
    items-center

    text-center

    overflow-hidden
`,

imageWrapper: `
    relative

    w-full
    h-[110px]

    overflow-hidden
`,

image: `
    w-full
    h-full

    object-cover
    object-center
`,

    number: `
    absolute

    top-[4px]
    left-[4px]

    flex
    items-center
    justify-center

    w-[28px]
    h-[28px]

    rounded-full

    border
    border-[#D8C3A5]

    bg-[#FBF6F0]

    font-body

    text-[0.7rem]

    text-primary

    z-10
`,

   title: `
    mt-2

    max-w-[95%]

    font-heading

    text-[0.98rem]

    uppercase

    text-primary

    leading-[1.35rem]
`,

   description: `
    mt-1

    px-1

    text-[0.68rem]

    leading-[1.15rem]

    text-secondary

    line-clamp-3
`,
price: `
    h-[28px]

    flex
    items-center
    justify-center

    font-semibold

    text-[0.78rem]

    leading-none

    text-primary
`,
bottom: `
    w-full

    mt-auto

    flex
    flex-col
    items-center
`,

   button: `
    mt-auto
    mb-3

    flex
    items-center
    justify-center

    gap-2

    w-[calc(100%-24px)]

    rounded-md

    border
    border-[#C8AF88]

    px-2
    py-2

    text-[0.52rem]

    tracking-[0.08em]

    text-primary

    transition

    hover:bg-button-secondaryHover
`,

    buttonHeart: `
        text-[1rem]

        leading-none

        text-brand-primary
    `,
};