import { defineStore } from "pinia";

export const usePromotionalStore = defineStore("promotionalStore", () => {
    const promProducts = [
        {
            "id": 1,
            "title": "BXC",
            "picture": "https://i.postimg.cc/JhSJP458/temp-Image-Jjko-Ac.avif",
            "description": "Вытяжное устройство для механической системы вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 2,
            "title": "G2H",
            "picture": "https://i.postimg.cc/4dtcMkW9/temp-Image-BPlg-Y7.avif",
            "description": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 3,
            "title": "GHN",
            "picture": "https://i.postimg.cc/Kj2ThqWs/temp-Imaged-CYNSb.avif",
            "description": "Вытяжное устройство с датчиком присутствия",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 4,
            "title": "TDA",
            "picture": "https://i.postimg.cc/br9ty0cY/temp-Image-UVh4bt.avif",
            "description": "Вытяжное устройство с датчиком присутствия",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 5,
            "title": "BXC",
            "picture": "https://i.postimg.cc/JhSJP458/temp-Image-Jjko-Ac.avif",
            "description": "Вытяжное устройство для механической системы вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 6,
            "title": "G2H",
            "picture": "https://i.postimg.cc/4dtcMkW9/temp-Image-BPlg-Y7.avif",
            "description": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 7,
            "title": "GHN",
            "picture": "https://i.postimg.cc/Kj2ThqWs/temp-Imaged-CYNSb.avif",
            "description": "Вытяжное устройство с датчиком присутствия",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 8,
            "title": "TDA",
            "picture": "https://i.postimg.cc/br9ty0cY/temp-Image-UVh4bt.avif",
            "description": "Вытяжное устройство с датчиком присутствия",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 9,
            "title": "BXC",
            "picture": "https://i.postimg.cc/JhSJP458/temp-Image-Jjko-Ac.avif",
            "description": "Вытяжное устройство для механической системы вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        },
        {
            "id": 10,
            "title": "G2H",
            "picture": "https://i.postimg.cc/4dtcMkW9/temp-Image-BPlg-Y7.avif",
            "description": "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
            "low_price_rub": 6848,
            "top_price_rub": 56584,
            "low_price_eur": 77.60,
            "top_price_eur": 643.86
        }
    ];

    return { promProducts };
});