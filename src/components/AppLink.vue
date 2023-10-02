<script setup>
    import  { RouterLink } from 'vue-router'
    import { computed } from 'vue'

    const props = defineProps({...RouterLink.props})
    const isExternal = computed(() => {
        return typeof props.to === 'string' && props.to.startsWith('http')
    })
</script>

<template>
    <!-- manejo de todas las rutas externas -->
    <a 
        v-if="isExternal" 
        :href="props.to"
        target="_blank"
        rel="noopener"
        class="external-link"
    >
        <slot/>
    </a>
    <!-- manejo de todas las rutas internas -->
    <router-link 
        v-else 
        v-bind="props" 
        class="internal-link"
    >
        <slot/>
    </router-link>
</template>