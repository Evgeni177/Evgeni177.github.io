<template>
    <customer-details-main v-if="state" @stateChangedTwo="stateChanged"></customer-details-main>
    <account-details-main  @stateChangedTwo="stateChanged" v-else></account-details-main>
</template>

<script>
//This should be app.vue //TODO
import CustomerDetailsMain from './CustomerDetailsMain';
import AccountDetailsMain from './AccountDetailsMain';
export default {
    name: 'ContactDetails',
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