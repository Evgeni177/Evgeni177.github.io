<template>
    <div id="app">
        <div v-if="taskOne" class="main-container">
            <div class="sidebar"> Sidebar </div>
            <div class="main">
                <div class="heading">
                    <personal-details v-if="state == 1" 
                                    :name="getName"/>
                    <legal-information v-if="state == 2" 
                                    :info="getName"/>
                    <div class="right-header">
                        <dynamic-button large
                                        class="account-details"
                                        :text="getText"
                                        @dynamicButtonClicked="buttonClicked"/>
                        <dynamic-button small 
                                        class="task-two"
                                        text="Task 2"
                                        @dynamicButtonClicked="gotoTaskTwo"/>
                    </div>
                </div>
                <div class="center">
                    <div class="left"> 
                        <todo v-if="state == 1" :items="todoItems"/>
                        <transaction-history v-if="state == 2"/>
                    </div>
                    <div class="right"> 
                        <suggestions v-if="state == 1"/>
                        <div class="tabs-container" v-if="state == 2">
                            <tab v-for="button in buttons" 
                                :key="button" 
                                :text="button"/>
                        </div>
                    </div>
                </div>
                <div class="footer"> 
                    <contact-details v-if="state == 1" 
                                    :contact-information="getContactInformation"/>
                    <support v-if="state == 2"/>
                </div>
            </div>
        </div>
        <div v-if="taskTwo" class="secondTask">
           <router-view></router-view>
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
import Tab from './components/Tab';
import Support from './components/Support';
import DynamicButton from './components/DynamicButton';
export default {
    name: 'App',
    components: {
        Todo,
        PersonalDetails,
        Suggestions,
        ContactDetails,
        LegalInformation,
        TransactionHistory,
        Tab,
        Support,
        DynamicButton
    },
    data() {
        return {
            state: 1,
            todoItems: ['Buy a microwave', 'Get a new toothbrush', 'Buy toilet paper', 'Play golf with Obama'],
            buttons: ['About', 'Settings', 'Notifications'],
            taskOne: true,
            taskTwo: false,
        }
    },
    computed: {
        getName() {
            if(this.state == 1) {
                return "Evgeni Kunchev";
            } else {
                return "533412213"
            }
        },
        getContactInformation() {
            return "0884718678 evgeni.kunchev1998@gmail.com";
        },
        getText() {
            if(this.state == 1) {
                return "Account Details";
            } else {
                return "Customer Details";
            }
        }
    },
    methods: {
        buttonClicked(disabled) {
            if(!disabled) {
                if(this.state == 1) {
                    this.state = 2;
                } else {
                    this.state = 1;
                }
            }
        },
        gotoTaskTwo(disabled) {
            if(!disabled) {
                this.taskOne = false;
                this.taskTwo = true;
                this.$router.push('/taskTwo')
            }
        },
        gotoTaskOne(disabled) {
            if(!disabled) {
                this.taskOne = true;
                this.taskTwo = false;
            }
        },
        dynamicButtonClicked() {
            console.log('Dynamic button clicked')
        }
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
    .secondTask {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     .tabs-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgba(97, 97, 97, 0.2);
        border-radius: 8px;
    }
    .right-header {
        display: flex;
    }
    .task-two {
        margin-left: 1rem;
    }
    /* ------ */
</style>
