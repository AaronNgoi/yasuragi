import matchaPowder from '../assets/tea/matchaPowder.webp';
import matchaPour from '../assets/tea/matchaPour.webp';
import matchaGlass from '../assets/tea/matchaGlass.webp';
import matchaPackaging from '../assets/tea/matchaPackaging.webp';
import matchaBottle from '../assets/tea/matchaBottle.webp';
import greenTeaPowder from '../assets/tea/greenTeaPowder.webp';
import houjichaPowder from '../assets/tea/houjichaPowder.webp';
import houjichaPour from '../assets/tea/houjichaPour.webp';
import houjichaGlass from '../assets/tea/houjichaGlass.webp';
import houjichaPackaging from '../assets/tea/houjichaPackaging.webp';
import houjichaBottle from '../assets/tea/houjichaBottle.webp';
import genmaichaPowder from '../assets/tea/genmaichaPowder.webp';
import genSenchaPour from '../assets/tea/genSenchaPour.webp';
import genmaichaGlass from '../assets/tea/genmaichaGlass.webp';
import genmaichaPackaging from '../assets/tea/genmaichaPackaging.webp';
import genmaichaPowderBG from '../assets/tea/genmaichaPowderBG.webp';
import genmaichaInfo from '../assets/tea/genmaichaInfo.webp';
import senchaPowder from '../assets/tea/senchaPowder.webp';
import senchaGlass from '../assets/tea/senchaGlass.webp';
import senchaPackaging from '../assets/tea/senchaPackaging.webp';
import satchetMatchaTin from '../assets/tea/satchetMatchaTin.webp';
import satchetMatchaIndividual from '../assets/tea/satchetMatchaIndividual.webp';
import satchetMatchaIndividual2 from '../assets/tea/satchetMatchaIndividual2.webp';
import satchetMatchaIndividual3 from '../assets/tea/satchetMatchaIndividual3.webp';


import cup1 from '../assets/accessories/cup1.webp';
import cup2 from '../assets/accessories/cup2.webp';
import cup3 from '../assets/accessories/cup3.webp';
import cup4 from '../assets/accessories/cup4.webp';
import cup5 from '../assets/accessories/cup5.webp';
import cup6 from '../assets/accessories/cup6.webp';
import cup7 from '../assets/accessories/cup7.webp';
import cup8 from '../assets/accessories/cup8.webp';
import cup9 from '../assets/accessories/cup9.webp';
import matchaWhisk from '../assets/accessories/matchaWhisk.webp';
import matchaWhisk2 from '../assets/accessories/matchaWhisk2.webp';
import matchaWhisk3 from '../assets/accessories/matchaWhisk3.webp';
import matchaWhisk4 from '../assets/accessories/matchaWhisk4.webp';
import matchaWhisk5 from '../assets/accessories/matchaWhisk5.webp';
import matchaWhisk6 from '../assets/accessories/matchaWhisk6.webp';
import travelBottle from '../assets/accessories/travelBottle.webp';
import travelBottle2 from '../assets/accessories/travelBottle2.webp';
import travelBottle3 from '../assets/accessories/travelBottle3.webp';
import travelBottle4 from '../assets/accessories/travelBottle4.webp';
import travelBottle5 from '../assets/accessories/travelBottle5.webp';
import travelBottle6 from '../assets/accessories/travelBottle6.webp';
import travelBottle7 from '../assets/accessories/travelBottle7.webp';
import travelBottle8 from '../assets/accessories/travelBottle8.webp';


export interface Product {
    id: number;
    type: string;
    title: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    img: string;
    otherImgs: string[];
    ingredients?: string[];
    howToPrepare?: { step: number; description: string }[];
    productSpecification: {
        [key: string]: string | undefined;
    };
    careAndMaintenance: string;
    reviews: {
        id: number;
        reviewer: string;
        rating: number;
        review: string;
        date: string;
    }[];
}

const products = [
    {
        id: 1,
        type: 'tea',
        title: 'Ceremonial Grade Matcha',
        price: 54.99,
        shortDescription: 'Experience the purest tradition with our ceremonial grade matcha',
        longDescription: 'This ceremonial grade matcha is sourced from the finest tea leaves, hand-picked and stone-ground to perfection. Experience the centuries-old tradition of Japanese tea ceremonies with our premium matcha. Known for its vibrant green color and rich umami flavor, our matcha offers a smooth and velvety texture that delights the senses. Whether you\'re looking to enjoy a calming cup of tea or explore the versatility of matcha in culinary creations, our Ceremonial Grade Matcha is the ideal choice for tea enthusiasts and connoisseurs.',
        img: matchaPowder,
        otherImgs: [matchaPour, matchaGlass, matchaPackaging, matchaBottle],
        ingredients: ['Organic ceremonial grade matcha leaves', 'No additional additives'],
        howToPrepare: [
            { step: 1, description: 'Heat water to approximately 175°F (80°C).' },
            { step: 2, description: 'Sift 1 teaspoon of matcha into a bowl to remove any lumps.' },
            { step: 3, description: 'Add a small amount of hot water (about 2 ounces) to the bowl.' },
            { step: 4, description: 'Whisk the matcha vigorously using a bamboo whisk until it becomes frothy and well-mixed.' },
            { step: 5, description: 'Pour the remaining hot water (about 6 ounces) into the bowl and continue whisking in a zigzag motion until fully combined.' },
            { step: 6, description: 'Enjoy your matcha tea straight from the bowl or pour it into a cup for serving.' }
        ],
        reviews: [
            {
                id: 1,
                reviewer: 'John Wang',
                rating: 5,
                review: 'Great matcha, excellent flavor and quality.',
                date: '2023-06-11'
            },
            {
                id: 2,
                reviewer: 'Jane Peters',
                rating: 4,
                review: 'Good matcha, smooth taste but a bit pricey.',
                date: '2023-06-09'
            },
            {
                id: 3,
                reviewer: 'Li Mei',
                rating: 5,
                review: '我很喜欢这种抹茶！口感很顺滑，香味浓郁，非常好喝。',
                date: '2023-06-07'
            },
            {
                id: 4,
                reviewer: 'Sophie Anderson',
                rating: 4,
                review: 'Lovely matcha with a smooth and delicate flavor. It\'s become a part of my daily routine.',
                date: '2023-05-30'
            },
            {
                id: 5,
                reviewer: 'Takeshi Yamamoto',
                rating: 3,
                review: 'まあまあの抹茶ですが、もう少し品質を向上させることができると思います。値段が少し高めです。',
                date: '2023-06-05'
            },
            {
                id: 6,
                reviewer: 'Maximilian Müller',
                rating: 5,
                review: 'Absolutely fantastic matcha! The quality is top-notch and the taste is exceptional.',
                date: '2023-05-28'
            },
            {
                id: 7,
                reviewer: 'Ji-hye Park',
                rating: 5,
                review: '이 말차를 정말 사랑합니다! 상큼하고 활기차서 기분이 좋아집니다. 포장도 아름답습니다. 다시 구매할 예정입니다.',
                date: '2023-06-02'
            }
        ],
        productSpecification: {
            grams: '30',
            servings: '15'
        },
        careAndMaintenance: ''

    },

    {
        id: 2,
        type: 'tea',
        title: 'Powdered Matcha',
        price: 34.99,
        shortDescription: 'Experience the versatile flavor of our powdered matcha',
        longDescription: 'Our powdered matcha is a high-quality non-ceremonial grade matcha, perfect for everyday use. It offers a balanced combination of umami and bitterness, with a vibrant green color that makes it visually appealing. Enjoy the versatility of this matcha by incorporating it into your favorite recipes, such as matcha lattes, smoothies, or baked goods. Whether you\'re a matcha enthusiast or new to this beloved Japanese tea, our Powdered Matcha is a delightful choice that can be enjoyed in various ways.',
        img: greenTeaPowder,
        otherImgs: [matchaPour, matchaGlass, matchaPackaging, matchaBottle],
        ingredients: ['Premium matcha leaves', 'No additional additives'],
        howToPrepare: [
            { step: 1, description: 'Heat water to approximately 175°F (80°C).' },
            { step: 2, description: 'Sift 1 teaspoon of matcha into a bowl to remove any lumps.' },
            { step: 3, description: 'Add a small amount of hot water (about 2 ounces) to the bowl.' },
            { step: 4, description: 'Whisk the matcha vigorously using a bamboo whisk until it becomes frothy and well-mixed.' },
            { step: 5, description: 'Pour the remaining hot water (about 6 ounces) into the bowl and continue whisking in a zigzag motion until fully combined.' },
            { step: 6, description: 'Enjoy your matcha tea straight from the bowl or pour it into a cup for serving.' }
        ],
        reviews: [
            {
            id: 8,
            reviewer: 'Emily Johnson',
            rating: 4,
            review: 'I enjoy the convenience of powdered matcha. It dissolves easily and has a nice flavor.',
            date: '2023-06-10'
        },
    {
        id: 9,
        reviewer: 'Luca Rossi',
        rating: 5,
        review: 'The powdered matcha is simply amazing. It has a rich and vibrant taste that I love.',
        date: '2023-06-08'
    },
    {
        id: 10,
        reviewer: 'Isabella Gomez',
        rating: 3,
        review: 'The powdered matcha is decent, but I found it to be a bit bitter for my liking.',
        date: '2023-06-05'
    },
    {
        id: 11,
        reviewer: 'Oliver Schmidt',
        rating: 4,
        review: 'I\'m a fan of the powdered matcha. It\'s easy to use and has a nice aroma.',
        date: '2023-06-03'
    }
    ],
        productSpecification: {
            grams: '50',
            servings: '25',
        },
        careAndMaintenance: '',
    },



    {
        id: 3,
        type: 'tea',
        title: 'Powdered Houjicha',
        price: 29.99,
        shortDescription: 'Experience the warm, toasty delight of our powdered houjicha',
        longDescription: 'Our powdered houjicha is crafted from roasted green tea leaves, resulting in a warm and toasty flavor profile. With its reddish-brown color and rich aroma, houjicha offers a unique tea experience. Our finely ground houjicha powder is versatile and can be used in various recipes, from lattes to baked goods. Whether you prefer it hot or cold, our Powdered Houjicha is sure to delight your taste buds and provide a comforting tea experience.',
        img: houjichaPowder,
        otherImgs: [houjichaPour, houjichaGlass, houjichaPackaging, houjichaBottle],
        ingredients: ['Roasted green tea leaves', 'No additional additives'],
        howToPrepare: [
            { step: 1, description: 'Boil water and let it cool to around 180°F (82°C).' },
            { step: 2, description: 'Sift 1 teaspoon of houjicha powder into a bowl to remove any clumps.' },
            { step: 3, description: 'Pour a small amount of hot water (about 2 ounces) into the bowl.' },
            { step: 4, description: 'Whisk the houjicha vigorously until it dissolves and becomes frothy.' },
            { step: 5, description: 'Pour the remaining hot water (about 6 ounces) into the bowl and whisk again to ensure it is well-mixed.' },
            { step: 6, description: 'Enjoy your houjicha tea and savor its unique roasted flavor.' }
        ],
        reviews: [
            {
                id: 12,
                reviewer: 'Sakura Tanaka',
                rating: 5,
                review: 'The powdered houjicha is fantastic! It has a unique toasty flavor that I absolutely love.',
                date: '2023-06-09'
            },
            {
                id: 13,
                reviewer: 'Liam Johnson',
                rating: 4,
                review: 'The powdered houjicha is a great alternative to regular tea. It has a pleasant and soothing taste.',
                date: '2023-06-07'
            },
            {
                id: 14,
                reviewer: 'Aiko Chen',
                rating: 5,
                review: 'I\'m a big fan of houjicha, and the powdered version is excellent. It\'s smooth and has a delightful aroma.',
                date: '2023-06-05'
            }
        ],
        productSpecification: {
            grams: '40',
            servings: '20'
        },
        careAndMaintenance: ''
    },

    {
        id: 4,
        type: 'tea',
        title: 'Powdered Genmaicha',
        price: 29.99,
        shortDescription: 'Indulge in the wholesome blend of our powdered genmaicha',
        longDescription: 'Indulge in the wholesome blend of our powdered genmaicha. This unique tea combines the rich flavors of sencha green tea with roasted brown rice, creating a delightful harmony of toasty and grassy notes. Made from high-quality tea leaves and roasted rice, our powdered genmaicha offers a convenient and versatile way to enjoy this classic tea. Whether you prefer it hot or cold, our powdered genmaicha is perfect for creating delicious matcha-infused beverages and adding depth to your culinary creations. Experience the soothing qualities of genmaicha and immerse yourself in the rich traditions of Japanese tea.',
        img: genmaichaPowder,
        otherImgs: [genSenchaPour, genmaichaGlass, genmaichaPackaging, genmaichaPowderBG, genmaichaInfo],
        ingredients: ['Green tea leaves', 'Roasted rice'],
        howToPrepare: [
            { step: 1, description: 'Heat water to approximately 175°F (80°C).' },
            { step: 2, description: 'Sift 1 teaspoon of powdered genmaicha into a bowl to remove any lumps.' },
            { step: 3, description: 'Add a small amount of hot water (about 2 ounces) to the bowl.' },
            { step: 4, description: 'Whisk the powdered genmaicha vigorously using a bamboo whisk until it becomes frothy and well-mixed.' },
            { step: 5, description: 'Pour the remaining hot water (about 6 ounces) into the bowl and continue whisking in a zigzag motion until fully combined.' },
            { step: 6, description: 'Enjoy your genmaicha tea straight from the bowl or pour it into a cup for serving.' }
        ],
        reviews:[
            {
                id: 15,
                reviewer: 'Takahiro Suzuki',
                rating: 5,
                review: '美味しい玄米茶です。香ばしさと緑茶の風味が絶妙に調和しています。',
                date: '2023-06-11'
            },
            {
                id: 16,
                reviewer: 'Ji-hye Kim',
                rating: 4,
                review: 'The powdered genmaicha is really flavorful. I enjoy the nutty taste of the roasted rice.',
                date: '2023-06-09'
            },
            {
                id: 17,
                reviewer: 'Maria Santos',
                rating: 4,
                review: 'I love the unique blend of green tea and roasted rice in the powdered genmaicha. It has a comforting and satisfying taste.',
                date: '2023-06-07'
            },
            {
                id: 18,
                reviewer: 'Ravi Patel',
                rating: 4,
                review: 'The powdered genmaicha has a unique and delightful taste. The combination of green tea and roasted rice is interesting.',
                date: '2023-06-05'
            },
            {
                id: 19,
                reviewer: 'Miyuki Nakamura',
                rating: 5,
                review: 'この玄米茶は、独特な香ばしさと豊かな風味が特徴です。お茶の時間が楽しみです。',
                date: '2023-06-03'
            },
            {
                id: 20,
                reviewer: 'Chen Wei',
                rating: 5,
                review: 'The powdered genmaicha has a wonderful balance of flavors. I love the combination of green tea and roasted rice.',
                date: '2023-06-01'
            },
            {
                id: 22,
                reviewer: 'Nathawat Sombat',
                rating: 5,
                review: 'The aroma and flavor of this powdered genmaicha are amazing. It brings back memories of enjoying tea in the peaceful countryside.',
                date: '2023-06-09'
            }
        ],
        productSpecification: {
            grams: '30',
            servings: '15'
        },
        careAndMaintenance: ''
    },

    {
        id: 5,
        type: 'tea',
        title: 'Powdered Sencha',
        price: 24.99,
        shortDescription: 'Indulge in the refreshing taste of our Sencha',
        longDescription: 'Our Sencha is a high-quality Japanese green tea known for its refreshing taste and vibrant green color. Sourced from the finest tea leaves, our Sencha offers a delicate balance of sweetness and umami flavors. Its bright and grassy notes make it a perfect choice for tea enthusiasts seeking a rejuvenating experience. Whether you prefer it hot or cold, our Sencha is sure to invigorate your senses and provide a moment of tranquility.',
        img: senchaPowder,
        otherImgs: [genSenchaPour, senchaGlass, senchaPackaging],
        ingredients: ['100% Organic Sencha Leaves'],
        howToPrepare: [
            { step: 1, description: 'Heat water to approximately 175°F (80°C).' },
            { step: 2, description: 'Place 1 teaspoon of Sencha in a tea infuser or teapot.' },
            { step: 3, description: 'Pour hot water over the tea leaves.' },
            { step: 4, description: 'Steep for 1-2 minutes.' },
            { step: 5, description: 'Strain and enjoy your refreshing cup of Sencha.' }
        ],
        reviews:[
            {
                id: 21,
                reviewer: 'Emma Johnson',
                rating: 4,
                review: 'The powdered sencha has a refreshing taste and vibrant green color. I enjoy it as a daily morning tea.',
                date: '2023-06-11'
            },
            {
                id: 22,
                reviewer: 'Hiroshi Nakamura',
                rating: 5,
                review: 'この粉末煎茶はとても香り高く、味わい深いです。美味しくいただいています。',
                date: '2023-06-09'
            },
            {
                id: 23,
                reviewer: 'Sophie Dupont',
                rating: 4,
                review: 'The powdered sencha has a delicate and smooth flavor. It\'s a great option for a calming tea experience.',
                date: '2023-06-07'
            }
        ],
        productSpecification: {
            grams: '50',
            servings: '25'
        },
        careAndMaintenance: ''
    },

    {
        id: 6,
        type: 'tea',
        title: 'Matcha Powder (Individually Packaged Sachets)',
        price: 59.99,
        shortDescription: 'Convenient and portable matcha sachets for on-the-go enjoyment',
        longDescription: 'Our Matcha Powder in Individually Packaged Sachets provides a convenient and portable option for matcha lovers on the go. Each sachet contains a precise serving of our premium matcha, ensuring freshness and quality with every cup. The sachets are made from high-quality materials to preserve the flavor and aroma of the matcha. Whether you\'re traveling, at the office, or simply prefer the convenience of pre-measured servings, our Matcha Powder Sachets are the perfect choice for a quick and enjoyable matcha experience.',
        img: satchetMatchaTin,
        otherImgs: [satchetMatchaIndividual, satchetMatchaIndividual2, satchetMatchaIndividual3],
        ingredients: ['100% Organic Matcha Powder'],
        howToPrepare: [
            { step: 1, description: 'Boil water and let it cool to approximately 175°F (80°C).' },
            { step: 2, description: 'Open one sachet of Matcha Powder.' },
            { step: 3, description: 'Pour the Matcha Powder into a cup or bowl.' },
            { step: 4, description: 'Add a small amount of hot water (about 2 ounces) to the Matcha Powder.' },
            { step: 5, description: 'Use a bamboo whisk or frother to whisk the Matcha Powder and hot water until frothy and well-mixed.' },
            { step: 6, description: 'Add the remaining hot water (about 6 ounces) and continue whisking in a zigzag motion until fully combined.' },
            { step: 7, description: 'Enjoy your delicious cup of matcha.' }
        ],
        reviews: [
            {
                id: 24,
                reviewer: 'Sophie Anderson',
                rating: 5,
                review: 'I love the convenience of the individually packaged sachets. The matcha powder has a vibrant green color and a smooth, rich taste. It\'s perfect for when I\'m on the go!',
                date: '2023-06-11'
            },
            {
                id: 25,
                reviewer: 'Liam Wilson',
                rating: 4,
                review: 'The matcha sachets are a great way to enjoy a cup of matcha without any hassle. The taste is excellent, and each sachet contains just the right amount of matcha for a perfect serving.',
                date: '2023-06-09'
            }
        ],
        productSpecification: {
            grams: '40',
            servings: '20'
        },
        careAndMaintenance: ''
    },

    {
        id: 101,
        type: 'accessory',
        title: 'Cup',
        price: 29.99,
        shortDescription: 'Enhance your tea experience with our elegant cup',
        longDescription: 'Indulge in the pleasure of sipping your favorite tea from our exquisite cup. Crafted with attention to detail, this cup features a sleek design that enhances the visual appeal of your tea. Made from high-quality materials, it provides excellent heat retention, allowing you to enjoy your tea at the perfect temperature. With its comfortable handle and wide rim, our cup offers a delightful drinking experience. Elevate your tea rituals with our Cup accessory, available in black and white versions.',
        img: cup1,
        otherImgs: [cup2, cup3, cup4, cup5, cup6, cup7, cup8, cup9],
        reviews: [
            {
                id: 26,
                reviewer: 'Emily Johnson',
                rating: 5,
                review: 'I adore this cup! It has a sleek and elegant design that adds a touch of sophistication to my tea time. The size is perfect, and the quality is exceptional. Highly recommended!',
                date: '2023-06-11'
            },
            {
                id: 27,
                reviewer: 'Daniel Garcia',
                rating: 4,
                review: 'The cup is a great addition to my tea collection. The craftsmanship is top-notch, and it feels comfortable to hold. The size is just right for a satisfying cup of tea. I\'m very pleased with my purchase!',
                date: '2023-06-09'
            }
        ],
        ingredients: [],
        howToPrepare: [],
        productSpecification: {
            capacity: '330ml',
            material: 'Ceramic',
        },
        careAndMaintenance: 'Hand wash recommended. Do not use in the microwave or dishwasher.',
    },


    {
        id: 102,
        type: 'accessory',
        title: 'Bamboo Matcha Whisk',
        price: 19.99,
        shortDescription: 'Achieve the perfect matcha froth with our authentic wooden whisk',
        longDescription: 'Experience the art of matcha preparation with our traditional wooden whisk. Handcrafted from natural bamboo, this whisk is designed specifically for creating the perfect froth in your matcha. The delicate tines of the whisk effectively whisk and aerate the powdered tea, producing a smooth and velvety texture. Each whisk is expertly crafted to ensure durability and optimal performance. Elevate your matcha preparation to a new level with our Wooden Matcha Whisk.',
        img: matchaWhisk,
        otherImgs: [matchaWhisk2, matchaWhisk3, matchaWhisk4, matchaWhisk5, matchaWhisk6],
        reviews: [{
            id: 31,
            reviewer: 'Sarah Thompson',
            rating: 5,
            review: 'This bamboo matcha whisk is incredible! It creates the perfect froth and blends the matcha powder beautifully. The craftsmanship is exceptional, and it feels great in my hand. I highly recommend it!',
            date: '2023-06-11'
        },
            {
                id: 32,
                reviewer: 'Jennie Yen',
                rating: 4,
                review: '这个竹制抹茶筅非常好用！它能够很好地搅拌出浓郁的抹茶泡沫，非常适合日常饮用。手工制作的质量很高，使用起来非常顺手。强烈推荐！',
                date: '2023-06-09'
            },
            {
                id: 33,
                reviewer: 'Michael Davis',
                rating: 4,
                review: 'I absolutely love this bamboo matcha whisk! It creates a smooth and frothy matcha every time. The design is beautiful, and the quality is outstanding. It\'s a must-have for any matcha enthusiast!',
                date: '2023-06-07'
            },
            {
                id: 34,
                reviewer: 'Sophie Martin',
                rating: 5,
                review: 'I\'m so impressed with this bamboo matcha whisk! It\'s sturdy, durable, and does an excellent job of whisking my matcha to perfection. It adds a touch of authenticity to my matcha preparation. I highly recommend it!',
                date: '2023-06-05'
            },
            {
                id: 35,
                reviewer: 'Kevin Wang',
                rating: 4,
                review: '這個竹製抹茶筆非常好用，搖出來的抹茶有著順滑的質地和美麗的氣泡。手感舒適，品質非常出色。我非常滿意這次的購買！',
                date: '2023-06-03'
            }
            ],
        ingredients: [],
        howToPrepare: [],
        productSpecification: {
            length: '10cm',
            material: 'Bamboo',
        },
        careAndMaintenance: 'After each use, rinse the whisk with warm water and let it air dry. Avoid using soap or harsh cleaning agents, as they can damage the bamboo. Store the whisk in a dry place to prevent mold growth.',
    },

    {
        id: 103,
        type: 'accessory',
        title: 'Travel Tumbler',
        price: 39.99,
        shortDescription: 'Enjoy your matcha on the go with our Travel Tumbler',
        longDescription: 'Our Travel Tumbler makes it convenient to enjoy your favorite matcha on the go. This vacuum double-structured tumbler enhances your matcha-drinking experience outdoors, preserving the original flavor of tea.\n' +
            '\n' +
            'Designed for stress-free drinking, the tumbler allows 360-degree drinking without protrusions or spills. Its thermal insulation keeps matcha hot at 65°C or higher and cold at 8°C or lower for up to 6 hours.\n' +
            '\n' +
            'Built with durable materials, the rust-resistant stainless steel body is powder-coated to prevent scratches. Choose from stylish White and Black colors.',
        img: travelBottle,
        otherImgs: [travelBottle2, travelBottle3, travelBottle4, travelBottle5, travelBottle6, travelBottle7, travelBottle8],
        reviews: [
            {
                id: 41,
                reviewer: 'Yuki Tanaka',
                rating: 5,
                review: 'I absolutely love my Travel Tumbler! It\'s perfect for enjoying matcha on the go. The insulation keeps my matcha hot or cold for hours, and the sleek design is a plus. Highly recommended!',
                date: '2023-06-11'
            },
            {
                id: 42,
                reviewer: 'Ji-hyun Kim',
                rating: 4,
                review: "The Travel Tumbler is great for my matcha on-the-go needs. It keeps my matcha at the right temperature, and the size is convenient. The only downside is that it's a bit heavy, but overall, I'm satisfied.",
                date: '2023-06-09'
            },
            {
                id: 43,
                reviewer: 'Emma Johnson',
                rating: 5,
                review: 'I love my Travel Tumbler! It is the perfect companion for my daily matcha routine. The insulation works wonders, and the design is sleek and stylish. I highly recommend it!',
                date: '2023-06-07'
            },
            {
                id: 44,
                reviewer: 'Liam Wilson',
                rating: 5,
                review: 'The Travel Tumbler is my go-to for enjoying matcha on the go. It keeps my matcha hot or cold for a long time, and the size is just right. The quality is excellent, and it\'s easy to clean. Highly recommended!',
                date: '2023-06-05'
            }
        ],
        ingredients: [],
        howToPrepare: [],
        productSpecification: {
            capacity: '400ml',
            weight: '245g',
            material: 'Stainless steel, polypropylene, silicone',
            color: 'Black, White',
        },
        careAndMaintenance: 'Before first use and after each use, wash the bottle with warm soapy water. Do not use abrasive cleaners or scrubbers as they may scratch the surface. Rinse thoroughly and let it air dry. The bottle is not suitable for hot liquids or dishwasher use. Avoid exposing the bottle to direct sunlight for extended periods.',
    }
];

export default products;