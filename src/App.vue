<template>
    <customer-details-main v-if="state" @stateChangedTwo="stateChanged"></customer-details-main>
    <account-details-main  v-else @stateChangedTwo="stateChanged" ></account-details-main>
</template>

<script>
//This should be app.vue //TODO
import CustomerDetailsMain from './components/CustomerDetailsMain';
import AccountDetailsMain from './components/AccountDetailsMain';
export default {
    name: 'App',
    components: {
        CustomerDetailsMain,
        AccountDetailsMain
    },
    data() {
        return {
            state: true,
        }
    },
    methods: {
        stateChanged() {
            this.state = !this.state;
        }
    }
}
</script>

<style lang="css" scoped>
  
</style>