<template>
    <app @stateChanged="stateChanged">
        <div slot="customerDetails">
            <h2>{{ name }}</h2>
        </div>
        <div slot="todo" class="container-todo">
            <h2>Todo List</h2>
            <input class="input-todo" type="text">
            <div v-for="item in items" :key="item" class="todo-item">
                <p class="todo-item-inner">{{ item }}</p>
            </div>
        </div>
        <div slot="suggestions" class="image-main-container">
            <div v-for="imageContainer in imagesTwo" :key="imageContainer[0]" class="image-container">
                <div v-for="image in imageContainer" :key="image">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
        <div slot="contactDetails" class="contact-details-container">
            <h2>{{ contactInformation }}</h2>
        </div>   
    </app>
</template>

<script>
import App from './../App';
export default {
    name: 'CustomerDetailsMain',
    components: {
        App
    },
    data() {
        return {
            name: 'Evgeni Kunchev!',
            items: ['Buy a microwave', 'Get a new toothbrush', 'Buy toilet paper', 'Play golf with Obama'],
            imagesTwo: [
                [
                    'https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/16:9/w_1600,c_limit/luxury-vacation-rental-sites-03.jpg',
                    'https://i1.wp.com/www.smartertravel.com/wp-content/uploads/2020/02/beachfront-home-rental.jpg?fit=1920%2C1080&ssl=1',
                    'https://blog1.fkimg.com/wp-content/uploads/2016/06/Destin-US-Popular-Summer-Spots.jpg',
                    'https://travelgeekmag.com/wp-content/uploads/2019/07/Vacation-Rental-House.jpg',
                ],
                [
                     'https://media.architecturaldigest.com/photos/576d98405ea3e586576ec499/master/w_1192,h_756,c_limit/luxury-vacation-rental-sites-02.png',
                    'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/08/s-4-these-are-the-best-places-to-buy-a-vacation-home-and-theyand8217re-not-what-you-might-guess.jpg',
                    'https://d1s0jlrqciuqf0.cloudfront.net/home_banner/vacation_rentals_by_owner.jpg',
                    'https://images.ctfassets.net/gxwgulxyxxy1/1KmT39WWv6q55IvSQJUbmU/be38082bf3e9c477af3d6cf43e77df53/colorado-1676468.jpg?fm=jpg&w=1200',
                ],
                [
                    'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/08/s-4-these-are-the-best-places-to-buy-a-vacation-home-and-theyand8217re-not-what-you-might-guess.jpg',
                    'https://i1.wp.com/www.smartertravel.com/wp-content/uploads/2020/02/beachfront-home-rental.jpg?fit=1920%2C1080&ssl=1',
                    'https://travelgeekmag.com/wp-content/uploads/2019/07/Vacation-Rental-House.jpg',
                    'https://d1s0jlrqciuqf0.cloudfront.net/home_banner/vacation_rentals_by_owner.jpg',
                ]
            ],
            contactInformation: '0884718678 evgeni.kunchev1998@gmail.com'
        }
    },
    methods: {
        stateChanged() {
            this.$emit('stateChangedTwo');
            console.log(3333);
        }
    }
}
</script>

<style lang="css">
    .container-todo {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    .todo-item-inner {
        margin: 0;
    }
    .input-todo {
        min-height: 2rem;
        text-decoration: none;
        padding: .2rem .6rem;
        outline: none;
        border-radius: 3px;
        border: 0;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    .todo-item {
        padding: .7rem;
        margin: .4rem 0rem;
        border-radius: 3px;
        background: rgb(211, 211, 211);
    }
     img {
        height: 8rem;
        width: 8rem;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
        transition: all .2s ease-in-out;

    }
    .image-container {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
</style>