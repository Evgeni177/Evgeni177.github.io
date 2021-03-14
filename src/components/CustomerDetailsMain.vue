<template>
    <skeleton @stateChanged="stateChanged">
        <div slot="customerDetails">
            <h2>{{ name }}</h2>
        </div>
        <div slot="todo" class="container-todo">
            <h2 class="todo-list">Todo List</h2>
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
    </skeleton>
</template>

<script>
import Skeleton from './Skeleton.vue';
export default {
    name: 'CustomerDetailsMain',
    components: {
        Skeleton
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
                    'https://www.unicef.org.uk/babyfriendly/wp-content/uploads/sites/2/2018/03/2000x1000-Conference-2016-1500x750.jpg',
                    'https://images.unsplash.com/photo-1561489396-888724a1543d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmZlcmVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    'https://d1s0jlrqciuqf0.cloudfront.net/home_banner/vacation_rentals_by_owner.jpg',
                    'https://images.ctfassets.net/gxwgulxyxxy1/1KmT39WWv6q55IvSQJUbmU/be38082bf3e9c477af3d6cf43e77df53/colorado-1676468.jpg?fm=jpg&w=1200',
                ],
                [
                    'https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png',
                    'https://images.squarespace-cdn.com/content/v1/55115f04e4b0f4baa9ed963c/1533128058788-55KV6J0U3OPDX9GSHI32/ke17ZwdGBToddI8pDm48kKAE7eE7Z79jD9GUT7RpkzQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dljhX9a4mUXN9JQETW2Rey0peZj9al7WjcTnKtM34ebPP7cJNZlDXbgJNE9ef52e8w/conference+image+resize.jpg?format=1500w',
                    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    'https://windeurope.org/summit2018/wp-content/uploads/gws-summit-2018-banner-plenary.jpg',
                ]
            ],
            contactInformation: '0884718678 evgeni.kunchev1998@gmail.com'
        }
    },
    methods: {
        stateChanged() {
            this.$emit('stateChangedTwo');
        }
    }
}
</script>

<style lang="css">
    .container-todo {
        display: flex;
        flex-direction: column;
        padding: 0rem 1rem;
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
    .todo-list {
        margin-top: 0;
    }
</style>