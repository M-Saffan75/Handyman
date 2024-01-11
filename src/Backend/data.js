const categories = [
    {
        id: 1,
        name: 'Electrician',
        categorie_img: require('../icons/electrician.png'),
        categore_service: [
            {
                subId: 1001,
                price: 100,
                title: 'quick wiring',
                full_title: 'short time wiring',
                bg_service: require('../images/electric-3.jpg'),
                service_profile: require('../images/two.jpg'),

                rating: 1.9,
                city: 'new york',
                handyman: 'david daniel',
                categorie: 'electrician',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1002,
                price: 120,
                title: 'Wire solving',
                full_title: 'full home wiring',
                bg_service: require('../images/electric-1.jpg'),
                service_profile: require('../images/two.jpg'),

                rating: 2.7,
                city: 'new york',
                handyman: 'david daniel',
                categorie: 'electrician',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1003,
                price: 600,
                title: 'Wire solving',
                full_title: "room side wiring",
                bg_service: require('../images/electricboy.jpg'),
                service_profile: require('../images/two.jpg'),

                rating: 5.0,
                city: 'new york',
                handyman: 'david daniel',
                categorie: 'electrician',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1004,
                price: 800,
                title: 'wire solving',
                full_title: 'all over wiring',
                bg_service: require('../images/electric-4.jpg'),
                service_profile: require('../images/two.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'david daniel',
                categorie: 'electrician',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 2,
        name: 'Plumber',
        categorie_img: require('../icons/plumber.png'),
        categore_service: [
            {
                subId: 1005,
                price: 500,
                title: 'plumber fitting',
                full_title: 'fitting pipe & others',
                bg_service: require('../images/plumber-2.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'plumber',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1006,
                price: 400,
                title: 'casual fitting',
                full_title: 'anytype small fitting',
                bg_service: require('../images/plumber-3.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 4.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'plumber',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1007,
                price: 200,
                title: 'bathroom fitting',
                full_title: 'kitchen side fitting',
                bg_service: require('../images/plumb-1.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 3.1,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'plumber',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },


    {
        id: 3,
        name: 'Painter',
        categorie_img: require('../icons/paint-roller.png'),
        categore_service: [
            {
                subId: 1008,
                price: 200,
                title: 'wall painters',
                full_title: 'wall painting colouring',
                bg_service: require('../images/painter-3.jpeg'),
                service_profile: require('../images/four.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'painter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1009,
                price: 200,
                title: 'room colouring',
                full_title: 'Elegant room colouring',
                bg_service: require('../images/painter-1.jpg'),
                service_profile: require('../images/four.jpg'),

                rating: 2.2,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'painter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 10010,
                price: 200,
                title: 'top colouring',
                full_title: 'roof top colouring',
                bg_service: require('../images/painter-4.jpg'),
                service_profile: require('../images/four.jpg'),

                rating:3.1,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'painter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 4,
        name: 'Repairing',
        categorie_img: require('../icons/repair.png'),
        categore_service: [
            {
                subId: 1011,
                price: 200,
                title: 'repairing',
                full_title: 'Anykind of repairing',
                bg_service: require('../images/repair-1.jpg'),
                service_profile: require('../images/four.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'repairing',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1012,
                price: 200,
                title: 'Wire solving',
                full_title: 'wires Electrician Repairing',
                bg_service: require('../images/repairing.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'repairing',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1013,
                price: 200,
                title: 'Wire repairing',
                full_title: 'good Electrician Repairing',
                bg_service: require('../images/electric.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'repairing',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1014,
                price: 200,
                title: 'room wiring',
                full_title: 'old fan Repairing',
                bg_service: require('../images/repair-4.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'repairing',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 5,
        name: 'House Cleaning',
        categorie_img: require('../icons/house-cleaning.png'),
        categore_service: [
            {
                subId: 1017,
                price: 200,
                title: 'House clean',
                full_title: 'House Cleanning Moping',
                bg_service: require('../images/clean-1.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 2.3,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1018,
                price: 200,
                title: 'House clean',
                full_title: 'wall dust cleaning',
                bg_service: require('../images/clean-3.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 4.2,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1019,
                price: 200,
                title: 'House clean',
                full_title: 'Domestic House cleaning',
                bg_service: require('../images/cleaning-2.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1020,
                price: 200,
                title: 'House clean',
                full_title: 'carpet dust cleaning',
                bg_service: require('../images/clean-4.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 6,
        name: 'More...',
        categorie_img: require('../icons/button.png'),
        categore_service: [
            {
                subId: 1021,
                price: 200,
                title: 'House clean',
                full_title: 'House Cleanning Moping',
                bg_service: require('../images/clean-1.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 2.3,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1021,
                price: 200,
                title: 'House clean',
                full_title: 'wall dust cleaning',
                bg_service: require('../images/clean-3.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 4.2,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1022,
                price: 200,
                title: 'House clean',
                full_title: 'Domestic House cleaning',
                bg_service: require('../images/cleaning-2.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1023,
                price: 200,
                title: 'House clean',
                full_title: 'carpet dust cleaning',
                bg_service: require('../images/clean-4.jpg'),
                service_profile: require('../images/six.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cleaning',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 19,
        name: 'Delivery',
        categorie_img: require('../icons/delivery-moto.png'),
        categore_service: [
            {
                subId: 1029,
                price: 200,
                title: 'home delivery',
                full_title: 'quick home service',
                bg_service: require('../images/delivery-1.jpg'),
                service_profile: require('../images/seven.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'delivery',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1030,
                price: 200,
                title: 'home delivery',
                full_title: 'leopard service',
                bg_service: require('../images/delivery-3.jpg'),
                service_profile: require('../images/seven.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'delivery',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1031,
                price: 200,
                title: 'home delivery',
                full_title: 'special express service',
                bg_service: require('../images/delivery-4.jpg'),
                service_profile: require('../images/seven.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'delivery',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1032,
                price: 200,
                title: 'home delivery',
                full_title: 'regular home service',
                bg_service: require('../images/delivery-5.jpg'),
                service_profile: require('../images/seven.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'delivery',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
    },

    {
        id: 20,
        name: 'Maintenance',
        categorie_img: require('../icons/maintenance.png'),
         categore_service: [
            {
                subId: 1033,
                price: 200,
                title: 'Home maintenance',
                full_title: 'Home kitchen maintenance',
                bg_service: require('../images/maintenance-3.jpg'),
                service_profile: require('../images/eight.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'maintenance',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1034,
                price: 200,
                title: 'maintenance',
                full_title: 'motors maintenance',
                bg_service: require('../images/mechanic-2.jpg'),
                service_profile: require('../images/eight.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'maintenance',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1035,
                price: 200,
                title: 'car maintenance',
                full_title: 'car engine maintenance',
                bg_service: require('../images/mechanic-1.jpg'),
                service_profile: require('../images/eight.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'maintenance',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]  
    },

    {
        id: 21,
        name: 'Emergency',
        categorie_img: require('../icons/ambulance.png'),
         categore_service: [
            {
                subId: 1036,
                price: 200,
                title: 'emergency',
                full_title: 'hospital emergency',
                bg_service: require('../images/emergency-1.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 2.0,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'Emergency',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1037,
                price: 200,
                title: 'condition emergency',
                full_title: 'hospital emergency',
                bg_service: require('../images/emergency-2.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 2.2,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'Emergency',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1038,
                price: 200,
                title: 'need emergency',
                full_title: 'emergency need',
                bg_service: require('../images/emergency-3.jpg'),
                service_profile: require('../images/three.jpg'),

                rating: 4.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'Emergency',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
        
    },

    {
        id: 22,
        name: 'cctv camera',
        categorie_img: require('../icons/cctv.png'),
         categore_service: [
            {
                subId: 1039,
                price: 300,
                title: 'security setup',
                full_title: 'home security setup',
                bg_service: require('../images/camera.jpg'),
                service_profile: require('../images/nine.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'security',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1040,
                price: 200,
                title: 'security setup',
                full_title: 'advance security setup',
                bg_service: require('../images/camera-2.jpg'),
                service_profile: require('../images/nine.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'security',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1041,
                price: 500,
                title: 'security setup',
                full_title: 'office security setup',
                bg_service: require('../images/camera-1.jpg'),
                service_profile: require('../images/nine.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'security',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
        
    },

    {
        id: 23,
        name: 'Beauty Saloon',
        categorie_img: require('../icons/beauty-saloon.png'),
         categore_service: [
            {
                subId: 1042,
                price: 500,
                title: 'kid cutting',
                full_title: 'kid narrow cutting',
                bg_service: require('../images/saloon-2.jpg'),
                service_profile: require('../images/ten.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cutting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1043,
                price: 200,
                title: 'men shaved',
                full_title: 'men sahved cutting',
                bg_service: require('../images/saloon-3.jpg'),
                service_profile: require('../images/ten.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cutting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1044,
                price: 100,
                title: 'hair dryer',
                full_title: 'men hair drying',
                bg_service: require('../images/saloon-4.jpg'),
                service_profile: require('../images/ten.jpg'),

                rating: 3.7,
                city: 'new york',
                handyman: 'Jacob oliv',
                categorie: 'cutting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
        
    },

    {
        id: 24,
        name: 'Shifting',
        categorie_img: require('../icons/truck.png'),
         categore_service: [
            {
                subId: 1045,
                price: 200,
                title: 'shifing setup',
                full_title: 'town to town shifting',
                bg_service: require('../images/shifting-2.jpg'),
                service_profile: require('../images/16.jpg'),

                rating: .0,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'shifting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1046,
                price: 1200,
                title: 'shifing setup',
                full_title: 'street home shifting',
                bg_service: require('../images/shifting-3.jpg'),
                service_profile: require('../images/16.jpg'),

                rating: 2.7,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'shifting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1047,
                price: 340,
                title: 'shifing setup',
                full_title: 'floor to floor shifting',
                bg_service: require('../images/shifting-4.png'),
                service_profile: require('../images/16.jpg'),

                rating: 4.2,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'shifting',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
        
    },

    {
        id: 66,
        name: 'carpenter',
        categorie_img: require('../icons/carpenter.png'),
         categore_service: [
            {
                subId: 1048,
                price: 400,
                title: 'bed cutting',
                full_title: 'full craft cutting',
                bg_service: require('../images/craft-2.jpg'),
                service_profile: require('../images/16.jpg'),

                rating: .0,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'carpenter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1049,
                price: 1200,
                title: 'scale cutting',
                full_title: 'inches setup cutting',
                bg_service: require('../images/craft-3.jpg'),
                service_profile: require('../images/16.jpg'),

                rating: 2.7,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'carpenter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
            {
                subId: 1050,
                price: 340,
                title: 'quick carpenter',
                full_title: 'all over finishing',
                bg_service: require('../images/craft.jpg'),
                service_profile: require('../images/16.jpg'),

                rating: 4.2,
                city: 'new york',
                handyman: 'liam noah',
                categorie: 'carpenter',
                duration: '12:00 hour',
                description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
            },
        ]
        
    },

]

/* -------------- */

/* -------------- */


const services = [
    {
        id: 7,
        name: 'Robert Downey',
        phone: 98237322231,
        profession: 'Plumber',
        service_img: require('../images/plumber.png')
    },

    {
        id: 8,
        name: 'Chris Evans',
        phone: 98244322235,
        profession: 'beauty & saloon',
        service_img: require('../images/hair-styling.png')
    },
    {
        id: 9,
        name: 'Hemsworth',
        phone: 98237327658,
        profession: 'Painter',
        service_img: require('../images/painter_new.png')
    },
    {
        id: 10,
        name: 'Tom Hardy',
        phone: 98237322231,
        profession: 'Maintenance',
        service_img: require('../images/office-worker.png')
    },

    {
        id: 11,
        name: 'Dr Banner',
        phone: 98237322231,
        profession: 'Emergency',
        service_img: require('../images/doctor.png')
    },

    {
        id: 12,
        name: 'Nick Fury',
        phone: 98237322231,
        profession: 'Electrician',
        service_img: require('../images/electrician.png')
    },
    {
        id: 13,
        name: 'Tom Hiddelston',
        phone: 98237322231,
        profession: 'Delivery Boy',
        service_img: require('../images/young-man.png')
    },
    {
        id: 14,
        name: 'Paul Walker',
        phone: 98237322231,
        profession: 'Repairing',
        service_img: require('../images/technician.png')
    },
]



/* -------------- */

/* -------------- */


const reviews = [
    {
        id: 37,
        rating: 2.2,
        name: 'Yaran',
        date: '15 march',
        review_post: 'such an amazing serice i dont have words to explain',
        review_profile: require('../images/six.jpg'),
    },
    {
        id: 38,
        rating: 1.9,
        name: 'hound hoe',
        date: '10 april',
        review_post: 'Amazing Service I hope to see you next time.',
        review_profile: require('../images/seven.jpg'),
    },
    {
        id: 39,
        rating: 2.2,
        name: 'francis',
        date: '09 november',
        review_post: 'hellpful person with time accuracy and konwledge abilty',
        review_profile: require('../images/eight.jpg'),
    },
    {
        id: 40,
        rating: 3.1,
        name: 'shamzegan',
        date: '11 july',
        review_post: 'such an amazing serice i dont have words to explain',
        review_profile: require('../images/nine.jpg'),
    },
    {
        id: 41,
        rating: 1.1,
        name: 'harbinger',
        date: '02 august',
        review_post: 'hellpful person with time accuracy and konwledge abilty',
        review_profile: require('../images/ten.jpg'),
    },
    {
        id: 42,
        rating: 4.3,
        name: 'holmaakin',
        date: '29 july',
        review_post: 'such an amazing serice i dont have words to explain',
        review_profile: require('../images/eleven.jpg'),
    },
    {
        id: 43,
        rating: 4.8,
        name: 'tarhamkanus',
        date: '02 december',
        review_post: 'hellpful person with time accuracy and konwledge abilty',
        review_profile: require('../images/twelve.jpg'),
    },
]

/* -------------- */

/* -------------- */

const favourites_services = [
    {
        id: 44,
        price: 190,
        title: 'tap fitting',
        full_title: 'tap fitting change',
        bg_service: require('../images/electric.jpg'),
        service_profile: require('../images/profile-real.jpg')
    },
    {
        id: 45,
        price: 140,
        title: 'hair cutting',
        full_title: 'hair saloon cutting',
        bg_service: require('../images/saloon.jpg'),
        service_profile: require('../images/two.jpg')
    },

]

/* -------------- */

/* -------------- */


const fav_providers = [
    {
        id: 46,
        provider_name: 'nickolay fredis',
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        provider_profile: require('../images/19.jpg'),
        langauges: ['hindi', 'english', 'russian'],
        items: [
            {
                price: 333,
                title: 'smart maintenance',
                full_title: 'smart craft maintenance',
                bg_provider: require('../images/craft-2.jpg'),
            },
            {
                price: 3753,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },
            {
                price: 295,
                title: 'cctv cameras',
                full_title: 'cctv security',
                bg_provider: require('../images/camera-1.jpg'),
            },
            {
                price: 221,
                title: 'paint brush',
                full_title: 'paint brush colouring',
                bg_provider: require('../images/painter-1.jpg'),
            },
            {
                price: 644,
                title: 'repairing machine',
                full_title: 'repairing mechanic things',
                bg_provider: require('../images/repair-1.jpg'),
            },
        ],

    },


    {
        id: 47,
        provider_name: 'oliver kalom',
        provider_profile: require('../images/21.jpg'),

        price: 412,
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'Home Cleaning Repairing',
        langauges: ['hindi', 'english', 'arabic'],
        bg_provider: require('../images/clean-1.jpg'),
        items: [
            {
                price: 333,
                title: 'smart maintenance',
                full_title: 'smart craft maintenance',
                bg_provider: require('../images/craft-2.jpg'),
            },
            {
                price: 3753,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },
            {
                price: 295,
                title: 'cctv cameras',
                full_title: 'cctv security',
                bg_provider: require('../images/camera-1.jpg'),
            },
        ],
    },

    {
        id: 48,
        provider_name: 'joseph sanha',
        provider_profile: require('../images/20.jpg'),

        price: 111,
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2020',
        full_title: 'shaved head cutting ',
        bg_provider: require('../images/barberboy.jpg'),
        langauges: ['english', 'russians', "spanish"],
        items: [
            {
                price: 442,
                title: 'plumbing setup',
                full_title: 'plumbing fixing setup',
                bg_provider: require('../images/plumb-1.jpg'),
            },
            {
                price: 554,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },
            {
                price: 295,
                title: 'repairing machine',
                full_title: 'repairing mechanic things',
                bg_provider: require('../images/repair-1.jpg'),
            },
        ],
    },

    {
        id: 49,
        provider_name: 'george martin',
        provider_profile: require('../images/16.jpg'),

        price: 500,
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'tap fitting repairing',
        bg_provider: require('../images/electricboy.jpg'),
        langauges: ['urdu', 'russian', "spanish"],

        items: [
            {
                price: 333,
                title: 'paint brush',
                full_title: 'paint brush colouring',
                bg_provider: require('../images/painter-1.jpg'),
            },
            {
                price: 644,
                title: 'repairing machine',
                full_title: 'repairing mechanic things',
                bg_provider: require('../images/repair-1.jpg'),
            },
            {
                price: 884,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },

        ],
    },

    {
        id: 50,
        provider_name: 'daniel turner',
        provider_profile: require('../images/17.jpg'),

        price: 999,
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'Truck Driver Shifting',
        bg_provider: require('../images/shifting.jpg'),
        langauges: ['urdu', 'russian', "arabic"],
        items: [
            {
                price: 333,
                title: 'paint brush',
                full_title: 'paint brush colouring',
                bg_provider: require('../images/painter-1.jpg'),
            },
            {
                price: 644,
                title: 'repairing machine',
                full_title: 'repairing mechanic things',
                bg_provider: require('../images/repair-1.jpg'),
            },
            {
                price: 884,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },
        ],
    },

    {
        id: 51,
        provider_name: 'william worth',
        provider_profile: require('../images/22.jpg'),

        price: 1120,
        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2022',
        full_title: 'The professional painter',
        bg_provider: require('../images/painter.jpg'),
        langauges: ['urdu', 'hindi', 'russian', "spanish"],
        items: [
            {
                price: 333,
                title: 'paint brush',
                full_title: 'paint brush colouring',
                bg_provider: require('../images/painter-1.jpg'),
            },
            {
                price: 644,
                title: 'repairing machine',
                full_title: 'repairing mechanic things',
                bg_provider: require('../images/repair-1.jpg'),
            },
            {
                price: 884,
                title: 'delivery boy',
                full_title: 'any delivery boy',
                bg_provider: require('../images/delivery-1.jpg'),
            },
        ],
    },

]

/* -------------- */

/* -------------- */

const privacypolicy = [
    {
        id: 52,
        heading: 'Types Of data we collect',
        paragraph_policy: "Your Privacy Policy is where you disclose, at minimum, what personal information you collect from your usershow you collect the information how you use it and whether you share it with any third parties Check almost any website footerand you ll surely find a link to one of these required agreements."
    },

    {
        id: 53,
        heading: 'Use of your personal data',
        paragraph_policy: "In a nutshell, a Privacy Policy is a document that discloses what types of information you collect from your users and why. It also describes the methods you use to collect personal data e.g. cookies and how people can limit the data they share with you."
    },

    {
        id: 54,
        heading: 'Disclouser of your personal data',
        paragraph_policy: "Privacy Policy is a crucial document that outlines how an organization collects, uses, processes, and protects personal data of its users or customers. It is a legal statement that establishes the rights and obligations between the data subjects and the organization.In the digital age, where data is a valuable asset, privacy policies play a pivotal role in safeguarding individual information. They provide transparency about what data is being collected, the purpose of its collection, and who will have access to it. Moreover, they inform users about their rights to access, rectify, and delete their personal information."
    },
]

/* -------------- */

/* -------------- */


const terms_conditions = [
    {
        id: 55,
        line: 'You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information during the registration process.',
    },
    {
        id: 56,
        line: ' You must use the app in a lawful and ethical manner. Do not engage in any activity that may harm the app, its users, or violate any applicable laws.',
    },
    {
        id: 57,
        line: 'The app may contain user-generated content. By using the app, you grant us the right to use, reproduce, modify, and distribute your content.',
    },
    {
        id: 58,
        line: 'The app may involve payments for services. All payments are processed securely. Refunds and cancellations are subject to our refund policy.',
    },
    {
        id: 59,
        line: 'Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.',
    },
    {
        id: 60,
        line: 'The app is provided "as is" without warranties. We are not responsible for any damages resulting from your use of the app.',
    },
    {
        id: 61,
        line: 'We may update these terms from time to time. It is your responsibility to review the terms periodically.',
    },
]

/* -------------- */

/* -------------- */

const services_items = [
    {
        id: 29,
        price: 190,
        title: 'tap fitting',
        full_title: 'tap fitting change',
        bg_service: require('../images/electric.jpg'),
        service_profile: require('../images/profile-real.jpg'),

        rating: 3.7,
        city: 'new york',
        handyman: 'ozark yanus ',
        categorie: 'repairing',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

    },
    {
        id: 30,
        price: 140,
        title: 'hair cutting',
        full_title: 'hair saloon cutting',
        bg_service: require('../images/saloon.jpg'),
        service_profile: require('../images/two.jpg'),

        rating: 3.2,
        city: 'new york',
        handyman: 'Jam Smith ',
        categorie: 'Saloon',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },
    {
        id: 31,
        price: 190,
        title: 'house cleaning',
        full_title: 'House clean maintenance',
        bg_service: require('../images/clean.jpg'),
        service_profile: require('../images/three.jpg'),

        rating: 2.2,
        city: 'new york',
        handyman: 'alexander ',
        categorie: 'Cleaning',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },
    {
        id: 32,
        price: 390,
        title: 'house crafting',
        full_title: 'House craft change',
        bg_service: require('../images/craft.jpg'),
        service_profile: require('../images/four.jpg'),

        rating: 4.2,
        city: 'new york',
        handyman: 'John Doe',
        categorie: 'Carpenter',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

    },
]

/* -------------- */

/* -------------- */


const featued_items = [
    {
        id: 26,
        price: 200,
        title: 'Domestic cleaning',
        bg_service: require('../images/clean.jpg'),
        full_title: 'smart cleaning maintenance',
        service_profile: require('../images/profile-real.jpg'),

        rating: 2.2,
        city: 'new york',
        handyman: 'Richhard ',
        categorie: 'Cleaning',
        duration: '12:00 hour',
        description: "we understand that a clean home is more than just a physical space—it's a sanctuary where you relax, rejuvenate, and create lasting memories. Our house cleaning services are designed to provide you with a spotless, organized, and welcoming environment that you can truly call home .",

    },
    {
        id: 27,
        price: 320,
        title: 'shaved barber',
        bg_service: require('../images/saloon.jpg'),
        full_title: 'head shaved barber',
        service_profile: require('../images/two.jpg'),

        rating: 3.2,
        city: 'new york',
        handyman: 'thomas saliv',
        categorie: 'Saloon',
        duration: '12:00 hour',
        description: "we believe that beauty is a celebration of individuality and self-expression. Our salon services are meticulously crafted to offer you a personalized and pampering experience that enhances your natural beauty and boosts your confidence. Step into a world of relaxation and transformation as our team of skilled professionals caters to your every beauty need. From hair to skincare, from manicures to massages, we offer a comprehensive range of salon services designed to leave you feeling rejuvenated, refreshed, and ready to take on the world.",
    },
    {
        id: 28,
        price: 200,
        title: 'Wire solving',
        bg_service: require('../images/electric.jpg'),
        full_title: 'Busy Electrician Repairing',
        service_profile: require('../images/three.jpg'),

        rating: 3.7,
        city: 'new york',
        handyman: 'Jacob oliv',
        categorie: 'repairing',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },
    {
        id: 33,
        price: 410,
        title: 'house craft',
        bg_service: require('../images/craft.jpg'),
        full_title: 'house craft maintenance',
        service_profile: require('../images/four.jpg'),

        rating: 4.2,
        city: 'new york',
        handyman: 'charlie hen',
        categorie: 'Carpenter',
        duration: '12:00 hour',
        description: 'we take pride in offering top-notch carpentry services that bring excellence and quality craftsmanship right to your doorstep. Our team of skilled carpenters is dedicated to transforming your house into a home that reflects your unique style and preferences.',
    },

]

/* -------------- */

/* -------------- */

const all_items = [

    {
        id: 62,
        price: 410,
        handyman: 'John Doe',
        categorie: 'cleaning',
        title: 'house cleaning',
        full_title: 'House maintenance',
        bg_service: require('../images/23.jpg'),
        service_profile: require('../images/three.jpg'),

        /*  service profile */

        rating: 4.2,
        city: 'new york',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },

    {
        id: 63,
        price: 410,
        handyman: 'alexander ',
        categorie: 'Carpenter',
        title: 'house crafting',
        full_title: 'House craft change',
        bg_service: require('../images/25.jpg'),
        service_profile: require('../images/four.jpg'),

        /*  service profile */

        rating: 4.2,
        city: 'new york',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },

    {
        id: 64,
        price: 410,
        handyman: 'john killer',
        categorie: 'saloon',
        title: 'hair cutting',
        full_title: 'hair saloon cutting',
        bg_service: require('../images/24.jpg'),
        service_profile: require('../images/two.jpg'),

        /*  service profile */

        rating: 4.2,
        city: 'new york',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },

    {
        id: 65,
        price: 410,
        handyman: 'jam smith',
        categorie: 'Carpenter',
        title: 'tap fitting',
        full_title: 'tap fitting change',
        bg_service: require('../images/26.jpg'),
        service_profile: require('../images/profile-real.jpg'),

        /*  service profile */

        rating: 4.2,
        city: 'new york',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

    },

]

/* -------------- */

/* -------------- */
const all_booking = [
    
    {
        id: 33,
        price: 410,
        serial: '#117',
        done: 'completed',
        categorie: 'carpenter',
        handyman: 'John Doe',
        service: 'House craft change',
        book_payment: 'paid by cash on delivery',
        bg_booking: require('../images/craft.jpg'),
        service_profilebook_date: '21 january, 2023',

        /*  booking profile */

        total: 99,
        extra: 10,
        price: 221,
        rating: 4.2,
        subtotal: 221,
        discount: 125,
        status: 'paid',
        city: 'new york',
        duration: '12:00 hour',
        reviews: '(no reviews)',
        related_services: 'not yet',
        service_profilebook_time: '6:15 PM',
        booking_user_profile: require('../images/profile-real.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        essential_skills: 'swimming',
        langauges: ['hindi', 'english', 'russian'],

    },

    {
        id: 34,
        price: 140,
        serial: '#118',
        done: 'pending',
        categorie: 'cleaning',
        handyman: 'tom hardy',
        book_payment: 'paid by online',
        service: 'Home Cleaning Repairing',
        bg_booking: require('../images/clean.jpg'),
        service_profilebook_date: '11 june, 2023',

        /*  booking profile */

        total: 99,
        extra: 10,
        price: 221,
        rating: 1.2,
        subtotal: 221,
        discount: 125,
        status: 'paid',
        city: 'new york',
        duration: '12:00 hour',
        reviews: '(no reviews)',
        related_services: 'not yet',
        service_profilebook_time: '6:15 PM',
        booking_user_profile: require('../images/three.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        essential_skills: 'swimming',
        langauges: ['urdu', 'english', 'arabic'],
    },

    {
        id: 35,
        price: 180,
        serial: '#119',
        done: 'Failed',
        categorie: 'saloon',
        handyman: 'sandro',
        service: 'shaved head cutting ',
        bg_booking: require('../images/saloon.jpg'),
        book_payment: 'paid by hand to hand',
        service_profilebook_date: '23 april, 2023',

        /*  booking profile */

        total: 99,
        extra: 10,
        price: 221,
        rating: 3.3,
        subtotal: 221,
        discount: 125,
        status: 'paid',
        city: 'new york',
        duration: '12:00 hour',
        reviews: '(no reviews)',
        related_services: 'not yet',
        service_profilebook_time: '6:15 PM',
        booking_user_profile: require('../images/five.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2019',
        essential_skills: 'swimming',
        langauges: ['urdu', 'english', 'dothraki'],
    },

    {
        id: 36,
        price: 410,
        serial: '#120',
        done: 'completed',
        categorie: 'repairing',
        handyman: 'hamratan',
        service: 'tap fitting repairing',
        bg_booking: require('../images/electric.jpg'),
        book_payment: 'paid by cash on delivery',
        service_profilebook_date: '11 may, 2023',


        /*  booking profile */

        total: 99,
        extra: 10,
        price: 221,
        rating: 2.1,
        subtotal: 221,
        discount: 125,
        status: 'paid',
        city: 'new york',
        duration: '12:00 hour',
        reviews: '(no reviews)',
        related_services: 'not yet',
        service_profilebook_time: '6:15 PM',
        booking_user_profile: require('../images/two.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2020',
        essential_skills: 'swimming',
        langauges: [
            "urdu",
            "english",
            "barbarins"
        ]
    },

]

/* -------------- */

/* -------------- */


const all_Chats = [

    {
        id: 67,
        name: 'Electrician',
        status:'online',
        last_msg:'hey mr.',
        chat_img: require('../images/profile-real.jpg'),
        date:'01 March 2023',
        time:'12:01 PM',
    },

    {
        id: 68,
        name: 'Plumber',
        status:'offline',
        last_msg:'hellow',
        chat_img: require('../images/twelve.jpg'),
        date:'01 March 2023',
        time:'11:11 PM',
    },
    {
        id: 69,
        name: 'Painter',
        status:'offline',
        last_msg:'hey',
        chat_img: require('../images/two.jpg'),
        date:'01 March 2023',
        time:'1:10 PM',
    },
    {
        id: 70,
        name: 'Repairing',
        status:'online',
        last_msg:'hey brother where are you ?',
        chat_img: require('../images/three.jpg'),
        date:'02 April 2023',
        time:'10:01 PM',
    },

    {
        id: 71,
        name: 'House Cleaning',
        status:'online',
        last_msg:'hello',
        chat_img: require('../images/four.jpg'),
        date:'01 august 2022',
        time:'03:44 PM',
    },

    {
        id: 72,
        name: 'Delivery',
        status:'offline',
        last_msg:'i am here !',
        chat_img: require('../images/five.jpg'),
        date:'01 january 2023',
        time:'10:12 PM',
    },
    {
        id: 73,
        name: 'Maintenance',
        status:'online',
        last_msg:'complete this in a week',
        chat_img: require('../images/six.jpg'),
        date:'12 March 2023',
        time:'04:19 PM',
    },
    {
        id: 74,
        name: 'Emergency',
        status:'online',
        last_msg:'hey',
        chat_img: require('../images/seven.jpg'),
        date:'22 may 2023',
        time:'7:40 PM',
    },
]


/* -------------- */

/* -------------- */

export {
    categories, services, all_Chats, featued_items,
    services_items, all_booking, reviews, favourites_services,
    fav_providers, privacypolicy, terms_conditions, all_items
}