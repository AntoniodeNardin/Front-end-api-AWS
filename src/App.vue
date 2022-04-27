<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
<header>
            <nav>
                <RouterLink to="/Instances">Instances</RouterLink>
            </nav>
    </header>

    <RouterView />
</template>

<style>

</style>
