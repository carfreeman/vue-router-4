<script setup>
    import { onBeforeRouteLeave } from 'vue-router'

    onBeforeRouteLeave((to, from) => {
        const answer = window.confirm(
            'estas seguro de que quieres salir?'
        )

        if(!answer) return false
    })
</script>
<template>
    <div>
        <h1>Invoices</h1>
    </div>
</template>