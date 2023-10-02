<script setup>
    import sourceData from '../data.json'
    import { useRouter } from 'vue-router'
    import { isNavigationFailure, NavigationFailureType } from 'vue-router'

    const router = useRouter()
    const destinations = sourceData.destinations

    async function triggerRouterError(){
        const navigationFailure = await router.push('/')

        if(isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)){
            console.log(navigationFailure.to)
            console.log(navigationFailure.from)
        } else {
            //all is well
        }
    }

    function addDynamicRoute(){
        router.addRoute({
            name: 'dynamic',
            path: '/dynamic',
            component: () => import('../views/Login.vue')
        })

        //remueve la ruta
        //router.removeRoute('dynamic')
    }
</script>

<template>
    <div class="home">
        <h1>Todos los destinos</h1>
        <button @click="triggerRouterError">Disparar error de router</button>
        <!-- ejemplo de ruta dinamica -->
        <button @click="addDynamicRoute">Agregar ruta dinamica</button>
        <router-link to="/dynamic">Visitar ruta dinamica</router-link>
        <!--  -->
        <div class="destinations">
            <router-link
                v-for="destination in destinations"
                :key="destination.id"
                :to="{ 
                    name: 'destination.show', 
                    params: { 
                        id: destination.id,
                        slug: destination.slug 
                    }
                }"
            >
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name">
            </router-link>
        </div>
        
    </div>
</template>