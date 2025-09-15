<template>
    <router-view/>
    <div class="footer h-12">
        <TabBar class="fixed bottom-0"/>
    </div>
</template>
<!-- lang="ts"支持ts -->
<script setup lang="ts">
import TabBar from '@/views/layout/TabBar.vue'
</script>