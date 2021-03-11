<template>
    <div id="app">
        <div class="main-container">
            <div class="sidebar"> Sidebar </div>
            <div class="main">
                <div class="heading"> 
                    <acasdascount-details v-if="state == 1">
                        <h2 slot="name">Evgeni Kunchev</h2>
                    </acasdascount-details>

                </div>
                <div class="center">
                    <div class="left"> 2 </div>
                    <div class="right"> 3 </div>
                </div>
                <div class="footer"> 4 </div>
            </div>
        </div>
    </div>
</template>

<script>
// import AccountDetails from './components/AccountDetails';
// import CustomerDetails from './components/CustomerDetails';

export default {
    name: 'App',
    components: {
        // AccountDetails,
        // CustomerDetails
    },
    data() {
        return {
            state: 1
        }
    },
    methods: {
        buttonClicked() {
            if(this.state == 1) {
                this.state = 2;
            } else {
                this.state = 1;
            }
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
        background: rgb(136, 136, 136);
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
