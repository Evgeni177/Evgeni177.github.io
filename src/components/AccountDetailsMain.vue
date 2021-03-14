<template>
    <skeleton @stateChanged="stateChanged">
        <div slot="legalInformation" class="legal-information-container">
            <h2 class="info">{{ info }}</h2>
            <img class="image-avatar" src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" alt="">
        </div>
        <div slot="transactionHistory" class="transaction-container">
            <table>
                <tr>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                <tr v-for="transaction in transactions" :key="transaction">
                    <td>{{transaction.currency}}</td>
                    <td>{{transaction.amount}}</td>
                    <td>{{transaction.date}}</td>
                </tr>
            </table>
        </div>
        <div slot="tab" class="tab-container">
            <div class="tab" v-for="text in tabItems" :key="text" @click="tabClicked">
                {{ text }}
            </div>
        </div>
        <div slot="support" class="support-container">
            <div class="wrapper">
                <label for="email"> E-mail </label>
                <input class="support-input" type="text" name="email">
            </div>
            <div class="wrapper">
                <label for="problem"> Problem </label>
                <input class="support-input" type="text" name="problem">
            </div>
        </div>   
    </skeleton>  
</template>

<script>
import Skeleton from './Skeleton';
export default {
    name: 'AccountDetails',
    components: {
        Skeleton
    },
    data() {
        return {
            info: '51231527712',
            tabItems: ['About', 'Settings', 'Notifications'],
            transactions: [
                {
                    currency: 'Euro',
                    amount: '1800',
                    date: '15.02.2020',
                },
                {
                    currency: 'Euro',
                    amount: '1200',
                    date: '16.02.2020',
                },
                {
                    currency: 'BGN',
                    amount: '330',
                    date: '17.02.2020',
                },
                {
                    currency: 'Bitcoin',
                    amount: '0.003',
                    date: '18.02.2020',
                },
                {
                    currency: 'Bitcoin',
                    amount: '0.0001',
                    date: '19.02.2020',
                },
                {
                    currency: 'Bitcoin',
                    amount: '0.002',
                    date: '20.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '123',
                    date: '21.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '150',
                    date: '22.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '450',
                    date: '23.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '150',
                    date: '22.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '450',
                    date: '23.02.2020',
                },
                   {
                    currency: 'Dollar',
                    amount: '150',
                    date: '22.02.2020',
                },
                {
                    currency: 'Dollar',
                    amount: '450',
                    date: '23.02.2020',
                },
            ]
        }
    },
    methods: {
        tabClicked() {
            console.log('clicked')
        },
        stateChanged() {
            this.$emit('stateChangedTwo')
        }
    }
}
</script>

<style lang="css" scoped>
    .info {
        margin-right: 1rem;
    }
    .legal-information-container {
        display: flex;
    }
    .image-avatar {
        height: 6rem;
        width: 6rem;
        object-fit: cover;
        border-radius: 50%;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
    .tab-container {
        cursor: pointer;
        height: 100%;
        width: 100%;
        align-self: flex-start;
        display: flex;
        justify-content: space-around;
    }
    .tab {
        text-align: center;
        padding: .3rem;
        transition: color,background-color 0.5s linear;
        border-radius: 8px;
        width: 100%;
    }
    .tab:hover {
        color: grey;
        background: white;
        border-radius: 8px;
    }
    .support-input {
        height: 1rem;
        background: transparent;
        outline: none;
        margin-right: .5rem;
        padding: .5rem;
        font-size: 1rem;
        border-radius: 6px;
        border: 2px solid grey;
    }
    .support-container {
        display: flex;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    label {
        color: white;
    }
</style>