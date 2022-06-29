export const sizes: Array<string> = ["md", "sm", "lg", "xl"]
export const types: Array<string> = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
    "white",
]

export const items: Array<any> = [
    {
        name: "home",
        text: "Home",
        href: "/",
        id: "home",
    },
    {
        name: "tipo_de_flor",
        text: "Tipo de Flor",
        id: "tipo_de_flor",
        items: [
            {
                name: "rosas",
                text: "Rosas",
                href: "/collections/[collection]",
                id: "rosas",
                as: `/collections/rosas`,
            },
            {
                name: "lilies",
                text: "Lilies",
                href: "/collections/[collection]",
                id: "lilies",
                as: `/collections/lilies`,
            },
            {
                name: "gerberas",
                text: "Gerberas",
                href: "/collections/[collection]",
                id: "gerberas",
                as: `/collections/gerberas`,
            },
        ],
    },
    {
        name: "ocasion",
        text: "Ocasión",
        id: "ocasion",
        items: [
            {
                name: "amor",
                text: "Amor",
                href: "/collections/[collection]",
                id: "amor",
                as: `/collections/amor`,
            },
            {
                name: "perdon",
                text: "Perdón",
                href: "/collections/[collection]",
                id: "perdon",
                as: `/collections/perdon`,
            },
            {
                name: "aniversario",
                text: "Aniversario",
                href: "/collections/[collection]",
                id: "aniversario",
                as: `/collections/aniversario`,
            },
        ],
    },
]
