<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const username = window.user

    function logout() {
        window.user = null
        //navegacion programatica
        router.push(
            { 
                name: 'Home', 
                query: { logout: null }
            }
        )
    }
</script>
<template>
    <div>
        <h1>Greetings, {{ username }}</h1>
        <button @click="logout">logout</button>
        <router-link :to="{name: 'invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>