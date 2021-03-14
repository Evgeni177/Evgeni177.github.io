<template>
    <div id="app">
        <div v-if="taskOne" class="main-container">
            <div class="sidebar">
                <h3 class="sidebar-header">Sidebar</h3>
                <div class="sidebar-item" v-for="item in sidebarItems" :key="item">{{ item }}</div>
            </div>
            <div class="main">
                <div class="heading">
                    <slot name="customerDetails"/>
                    <slot name="legalInformation"/>
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
                        <slot name="todo"/>
                        <slot name="transactionHistory"/>
                    </div>
                    <div class="right"> 
                        <slot name="suggestions"/>
                        <div class="tabs-container">
                            <slot name="tab"/>
                        </div>
                    </div>
                </div>
                <div class="footer"> 
                    <slot name="contactDetails"/>
                    <slot name="support"/>
                </div>
            </div>
        </div>
        <div v-if="taskTwo" class="secondTask">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
import DynamicButton from './DynamicButton';
export default {
    name: 'App',
    components: {
        DynamicButton
    },
    data() {
        return {
            taskOne: true,
            taskTwo: false,
            sidebarItems: ['Home', 'Dashboard', 'Team', 'Projects', 'Calendar', 'Documents', 'Reports']
        }
    },
    computed: {
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
                this.$emit('stateChanged')
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
        background: url('https://www.wallpapertip.com/wmimgs/3-36152_gaussian-blurred.jpg');
    }
    .main-container {
        height: 95%;
        width: 100%;
        background: url('https://www.wallpapertip.com/wmimgs/3-36152_gaussian-blurred.jpg');

        background-repeat: no-repeat;
        background-size:cover;
        display: flex;
        padding: 10px;
    }
    .sidebar {
        flex: 1;
        margin: .1rem;
    }
    .main {
        display: flex;
        flex-direction: column;
        flex: 3;
        margin: .1rem;
    }
    .main > div {
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
    .sidebar-header {
        padding: 1rem;
    }
    .sidebar {
        background: transparent
    }
    .sidebar-item {
        color: white;
        padding: 1rem;
        background:  transparent
    }
    .sidebar-item:hover {
        background: rgba(47, 59, 68, 0.5);
    }
</style>
