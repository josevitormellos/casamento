export const familyStyles = {

container: `
    relative

    flex
    flex-col
    items-center
    text-center

    pt-44
    pb-16
    px-6
`,

title: `
    relative
    z-10

    font-heading
    text-[3rem]
    leading-none

    text-[#59613B]
`,
divider: `
    relative
    z-10

    w-[280px]
    max-w-full
    h-auto

    object-contain

    mt-5
    mb-8
`,
introduction: `
    relative
    z-10

    w-full
    max-w-[600px]

    text-center

    text-primary

    text-[1.05rem]
    leading-[1.8rem]

    font-semibold
`,
content: `
    relative
    z-10

    w-full
    max-w-[680px]

    mt-8

    text-justify

    text-primary

    text-[1rem]
    leading-[1.9rem]
`,

    paragraph: `
        mb-7
    `,

   closing: `
    relative
    z-10

    mt-8

    text-center

    text-[#59613B]

    text-[2rem]
    leading-[1.5]
`,

    moon: `
        w-14
        h-14

        object-contain

        mt-5
    `,
flowerLeft: `
    absolute

    left-[-55px]
    top-0

    w-[130px]
    h-auto

    z-0

    pointer-events-none
`,

flowerRight: `
    absolute

    right-[-65px]
    top-[-10px]

    w-[180px]
    h-auto

    z-0

    pointer-events-none
`,

};