const online_handymans = [
    {
        id: 1,
        provider_name: 'nickolay fredis',
        phone: '01-23456789',
        username: 'nikolay fredis', lastname: 'fredis23',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        provider_profile: require('../../images/19.jpg'),
        langauges: ['hindi', 'english', 'russian'],


    },


    {
        id: 2,
        provider_name: 'oliver kalom',
        provider_profile: require('../../images/21.jpg'),
        lastname: 'fredis23',
        price: 412,
        phone: '01-23456789',
        username: 'nikolay fredis',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'Home Cleaning Repairing',
        langauges: ['hindi', 'english', 'arabic'],
        bg_provider: require('../../images/clean-1.jpg'),

    },

    {
        id: 3,
        provider_name: 'joseph sanha',
        provider_profile: require('../../images/20.jpg'),
        lastname: 'fredis23',
        price: 111,
        phone: '01-23456789',
        username: 'nikolay fredis',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2020',
        full_title: 'shaved head cutting ',
        bg_provider: require('../../images/barberboy.jpg'),
        langauges: ['english', 'russians', "spanish"],
    },

    {
        id: 4,
        provider_name: 'george martin',
        provider_profile: require('../../images/16.jpg'),
        lastname: 'fredis23',
        price: 500,
        phone: '01-23456789',
        username: 'nikolay fredis',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'tap fitting repairing',
        bg_provider: require('../../images/electricboy.jpg'),
        langauges: ['urdu', 'russian', "spanish"],

    },

    {
        id: 5,
        provider_name: 'daniel turner',
        provider_profile: require('../../images/17.jpg'),
        lastname: 'fredis23',
        price: 999,
        phone: '01-23456789',
        username: 'nikolay fredis',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2018',
        full_title: 'Truck Driver Shifting',
        bg_provider: require('../../images/shifting.jpg'),
        langauges: ['urdu', 'russian', "arabic"],
    },

    {
        id: 6,
        provider_name: 'william worth',
        provider_profile: require('../../images/22.jpg'),
        lastname: 'fredis23',
        price: 1120,
        phone: '01-23456789',
        username: 'nikolay fredis',
        designation: '300',
        password: 'name123()',
        email: 'demo@gmail.com',
        member: 'member since 2022',
        full_title: 'The professional painter',
        bg_provider: require('../../images/painter.jpg'),
        langauges: ['urdu', 'hindi', 'russian', "spanish"],
    },

]

/* -------------- */

/* -------------- */

const provider_wallet = [
    {
        id: 7,
        method: 'bank',
        amount: 450,
        date: '22 april 2023',
    },
    {
        id: 8,
        method: 'wallet',
        amount: 900,
        date: '21 november 2022',
    },
    {
        id: 9,
        method: 'wallet',
        amount: 1300,
        date: '21 march 2023',
    },
]


/* -------------- */

/* -------------- */


const provider_all_booking = [
    {
        id: 10,
        price: 410,
        serial: '#117',
        location: 'europe street 2',
        done: 'pending',
        categorie: 'carpenter',
        username: 'John Doe',
        service: 'House craft change',
        book_payment: 'paid by cash on delivery',
        roletype:'user',
        bg_booking: require('../../images/craft.jpg'),
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
        booking_user_profile: require('../../images/profile-real.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        essential_skills: 'swimming',
        langauges: ['hindi', 'english', 'russian'],

    },

    {
        id: 11,
        price: 140,
        serial: '#118',
        location: 'iran side house',
        done: 'pending',
        categorie: 'cleaning',
        username: 'tom hardy',
        book_payment: 'paid by online',
        roletype:'user',
        service: 'Home Cleaning Repairing',
        bg_booking: require('../../images/clean.jpg'),
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
        booking_user_profile: require('../../images/three.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2021',
        essential_skills: 'swimming',
        langauges: ['urdu', 'english', 'arabic'],
    },

    {
        id: 12,
        price: 180,
        serial: '#119',
        location: 'canada side area',
        done: 'pending',
        categorie: 'saloon',
        username: 'sandro',
        service: 'shaved head cutting ',
        bg_booking: require('../../images/saloon.jpg'),
        book_payment: 'paid by hand to hand',
        roletype:'user',
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
        booking_user_profile: require('../../images/five.jpg'),
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

        /* booking's user profile */

        phone: '01-23456789',
        email: 'demo@gmail.com',
        member: 'member since 2019',
        essential_skills: 'swimming',
        langauges: ['urdu', 'english', 'dothraki'],
    },

    {
        id: 13,
        price: 410,
        serial: '#120',
        location: 'lecosta night street',
        done: 'pending',
        categorie: 'repairing',
        username: 'hamratan',
        service: 'tap fitting repairing',
        bg_booking: require('../../images/electric.jpg'),
        book_payment: 'paid by cash on delivery',
        roletype:'user',
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
        booking_user_profile: require('../../images/two.jpg'),
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

    {
        id: 14,
        price: 410,
        serial: '#120',
        location: 'europe street 2',
        location: 'iran side house',
        location: 'canada side area',
        location: 'lecosta night street',
        done: 'pending',
        categorie: 'repairing',
        username: 'hamratan',
        service: 'tap fitting repairing',
        bg_booking: require('../../images/electric.jpg'),
        book_payment: 'paid by cash on delivery',
        roletype:'user',
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
        booking_user_profile: require('../../images/two.jpg'),
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

    {
        id: 39,
        price: 410,
        serial: '#120',
        location: 'europe street 2',
        location: 'iran side house',
        location: 'canada side area',
        location: 'lecosta night street',
        done: 'completed',
        categorie: 'repairing',
        username: 'hamratan',
        service: 'tap fitting repairing',
        bg_booking: require('../../images/electric.jpg'),
        book_payment: 'paid by cash on delivery',
        roletype:'user',
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
        booking_user_profile: require('../../images/two.jpg'),
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
    {
        id: 40,
        price: 410,
        serial: '#120',
        location: 'europe street 2',
        location: 'iran side house',
        location: 'canada side area',
        location: 'lecosta night street',
        done: 'completed',
        categorie: 'repairing',
        username: 'hamratan',
        service: 'tap fitting repairing',
        bg_booking: require('../../images/electric.jpg'),
        book_payment: 'paid by cash on delivery',
        roletype:'user',
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
        booking_user_profile: require('../../images/two.jpg'),
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

const Product_reviews = [


    {
        id: 15,
        rating: 1.9,
        name: 'hound hoe',
        date: '10 april',
        review_profile: require('../../images/seven.jpg'),
        review_post: 'Amazing Service I hope to see you next time.',
    },

    {
        id: 16,
        rating: 2.2,
        name: 'Yaran',
        date: '15 march',
        review_profile: require('../../images/six.jpg'),
        review_post: 'such an amazing serice i dont have words to explain',
    },
    {
        id: 17,
        rating: 2.2,
        name: 'francis',
        date: '09 november',
        review_profile: require('../../images/eight.jpg'),
        review_post: 'hellpful person with time accuracy and konwledge abilty',
    },
    {
        id: 18,
        rating: 1.1,
        name: 'harbinger',
        date: '02 august',
        review_profile: require('../../images/ten.jpg'),
        review_post: 'hellpful person with time accuracy and konwledge abilty',
    },
    {
        id: 19,
        rating: 2.2,
        name: 'Yaran',
        date: '15 march',
        review_profile: require('../../images/six.jpg'),
        review_post: 'such an amazing serice i dont have words to explain',
    },
    {
        id: 20,
        rating: 4.8,
        name: 'tarhamkanus',
        date: '02 december',
        review_profile: require('../../images/twelve.jpg'),
        review_post: 'hellpful person with time accuracy and konwledge abilty',
    },
]


/* -------------- */

/* -------------- */

const requestjobs = [
    {
        id: 21,
        price: 2100,
        time: '10:11 PM',
        date: '22/4/2022',
        service_name: 'mechanic',
        service_profile: require('../../images/mechanic-1.jpg'),
        description: 'Need who can Start our do this',
    },
    {
        id: 22,
        price: 1800,
        time: '09:12 PM',
        date: '19/3/2022',
        service_name: 'plumbing',
        service_profile: require('../../images/plumb-1.jpg'),
        description: 'Need who can Start our do this',
    },
    {
        id: 23,
        price: 2100,
        time: '06:09 PM',
        date: '22/2/2023',
        service_name: 'electrician',
        service_profile: require('../../images/electric-1.jpg'),
        description: 'Need who can Start our do this',
    },
    {
        id: 24,
        price: 1120,
        time: '06:09 PM',
        date: '12/1/2023',
        service_name: 'furnitures',
        service_profile: require('../../images/electric-4.jpg'),
        description: 'Need who can Start our do this',
    },
]


/* -------------- */

/* -------------- */

const Provider_services = [
    {
        id: 29,
        price: 190,
        title: 'tap fitting',
        full_title: 'tap fitting change',
        bg_service: require('../../images/electric.jpg'),

        rating: 3.7,
        location: 'europe street 2',
        categorie: 'repairing',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

    },
    {
        id: 30,
        price: 140,
        title: 'hair cutting',
        full_title: 'hair saloon cutting',
        bg_service: require('../../images/saloon.jpg'),

        rating: 3.2,
        location: 'iran side house',
        categorie: 'Saloon',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },
    {
        id: 31,
        price: 190,
        title: 'house cleaning',
        full_title: 'House clean maintenance',
        bg_service: require('../../images/clean.jpg'),

        rating: 2.2,
        location: 'canada side area',
        categorie: 'Cleaning',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',
    },
    {
        id: 32,
        price: 390,
        title: 'house crafting',
        full_title: 'House craft change',
        bg_service: require('../../images/craft.jpg'),

        rating: 4.2,
        location: 'lecosta night street',
        categorie: 'Carpenter',
        duration: '12:00 hour',
        description: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length a paragraph is a group of at least five sentences, a paragraph is half a page long',

    },
]


/* -------------- */

/* -------------- */

const unread_notifications = [
    {
        id: 33,
        name: 'add booking',
        date: '1 day ago',
        notification_profile: require('../../images/profile-real.jpg'),
        description: 'Paragraphs are the of papers. Many students define paragraphs in terms of',
    },

    {
        id: 34,
        date: '14 hours ago',
        name: 'booking cancelcancel',
        notification_profile: require('../../images/two.jpg'),
        description: 'Paragraphs are the of papers. Many students define paragraphs in terms of',
    },
    {
        id: 35,
        date: '11 hours ago',
        name: 'service added',
        notification_profile: require('../../images/three.jpg'),
        description: 'Paragraphs are the of papers. Many students define paragraphs in terms of',
    },
]

/* -------------- */

/* -------------- */

const read_notifications = [
    {
        id: 36,
        name: 'add booking',
        date: '1 week ago',
        notification_profile: require('../../images/eight.jpg'),
        description: 'Paragraphs are the of papers. Many students define paragraphs in terms of',
    },
    {
        id: 37,
        name: 'confirm booking',
        date: '3 days ago',
        notification_profile: require('../../images/six.jpg'),
        description: 'Paragraphs are the of papers. Many students define paragraphs in terms of',
    }
]

export {
    online_handymans, provider_wallet,
    provider_all_booking, Product_reviews,
    requestjobs, Provider_services, read_notifications,
    unread_notifications,
}