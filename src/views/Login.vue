<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const route = useRoute()
    const username = ref('')
    const password = ref('')

    function login() {
        window.user = username.value
        const redirectPath = route.query.redirec || '/protected'
        router.push(redirectPath)
        
    }
</script>
<template>
    <div class="login">
        <form action="" class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" id="username" name="username" type="text" class="input">
            <label for="password">Password</label>
            <input v-model="password" id="password" name="password" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>