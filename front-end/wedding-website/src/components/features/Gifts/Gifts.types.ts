export interface Gift {
    id: number;

    image: string;

    title: string;

    description: string;

    price: number;
    url: string;
}

export interface GiftsProps {
    gifts: Gift[];
}