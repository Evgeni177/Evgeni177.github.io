<template>
    <div id="app">
        <div class="main-container">
            <div class="sidebar"> Sidebar </div>
            <div class="main">
                <div class="heading">
                    <personal-details v-if="state == 1" :name="getName"/>
                    <legal-information v-if="state == 2" :info="getName"/>
                    <button @click="buttonClicked()"> Account Details</button>
                </div>
                <div class="center">
                    <div class="left"> 
                        <todo v-if="state == 1" :items="todoItems"/>
                        <transaction-history v-if="state == 2"/>
                    </div>
                    <div class="right"> 
                        <suggestions/>    
                    </div>
                </div>
                <div class="footer"> 
                    <contact-details :contact-information="getContactInformation"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from './components/Todo';
import PersonalDetails from './components/PersonalDetails'
import Suggestions from './components/Suggestions';
import ContactDetails from './components/ContactDetails';
import LegalInformation from './components/LegalInformation';
import TransactionHistory from './components/TransactionHistory';
export default {
    name: 'App',
    components: {
        Todo,
        PersonalDetails,
        Suggestions,
        ContactDetails,
        LegalInformation,
        TransactionHistory
    },
    data() {
        return {
            state: 1,
            todoItems: ['Buy a microwave', 'Get a new toothbrush', 'Buy toilet paper', 'Play golf with Obama']
        }
    },
    computed: {
        getName() {
            if(this.state == 1) {
                return "Evgeni Kunchev";
            } else {
                return "1213131213123 Avatar"
            }
        },
        getContactInformation() {
            return "0884718678 evgeni.kunchev1998@gmail.com";
        }
    },
    methods: {
        buttonClicked() {
            if(this.state == 1) {
                this.state = 2;
            } else {
                this.state = 1;
            }
        },
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html, body, #app {
        height: 100%;
        width: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        background: rgb(252, 238, 222);
    }
    .main-container {
        height: 95%;
        width: 100%;
        background: rgb(230, 230, 230);
        display: flex;
        padding: 10px;
    }
    .sidebar {
        border: 1px solid black;
        flex: 1;
        margin: .1rem;
    }
    .main {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        flex: 3;
        margin: .1rem;
    }
    .main > div {
        border: 1px solid black;
        padding: .5rem;
        margin: .3rem;
    }
    .heading {
        flex: 1;
        display: flex;
        justify-content: space-between;
    }
    .center {
        display: flex;
        flex: 10;
    }
    .center > div {
        border: 1px solid black;
        padding: .5rem;
        margin: .2rem;
    }
    .left {
        flex: 3;
    }
    .right {
        flex: 4;
    }
    .footer {
        flex: 1;
    }
</style>
