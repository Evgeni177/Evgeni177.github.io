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
                <tr v-for="(transaction, index) in transactions" :key="index">
                    <td>{{transaction.currency}}</td>
                    <td>{{transaction.amount}}</td>
                    <td>{{transaction.date}}</td>
                </tr>
            </table>
        </div>
        <div slot="tab" class="tab-container">
            <div class=tabs-main>
                <div class="tab" :class="isSelectedTab(index)" v-for="(text, index) in tabItems" :key="text" @click="tabClicked(index)">
                    <p>{{text}}</p>
                </div>
            </div>
            <div v-if="selectedTab == 0">
                <p class="par-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru </p>
            </div>
            <div v-if="selectedTab == 1">
            <p class="par-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>
            <div v-if="selectedTab == 2">
                <p class="par-text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
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
            selectedTab: 0,
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
        tabClicked(index) {
            this.selectedTab = index;
            this.$emit('tabClicked', this.selectedTab);
        },
        stateChanged() {
            this.$emit('stateChangedTwo')
        },
        isSelectedTab(index) {
            if(this.selectedTab == index) {
                return 'selected'
            }
            return '';
        }
    }
}
</script>

<style lang="css" scoped>
    .selected {
        background: white;
    }
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
    .tabs-main {
         cursor: pointer;
        height: 100%;
        width: 100%;
        align-self: flex-start;
        display: flex;
        justify-content: space-around;
        height: 2rem;
    }
    .tab {
        text-align: center;
        padding: .3rem;
        transition: color,background-color 0.5s linear;
        border-radius: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
    .par-text {
        font-size: 1.3rem;
    }
</style>