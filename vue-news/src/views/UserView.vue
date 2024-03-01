<template>
    <div>
        <user-profile></user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

// import axios from 'axios';

export default {
    components : {
        UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        // axios.get(`https://apihnpwa.com/v0/user/${userName}.json`);
        this.$store.dispatch('FETCH_USER', userName);
    },
}

</script>

<style></style>