<!-- deisgn your banner structure  -->
<template lang="">
    <div>
        <ContactBanner />
        <ContactLocation />
    </div>
</template>

<!-- this is your logical code or export or import  -->
<script>
import ContactBanner from './Child/ContactBanner.vue'
import ContactLocation from './Child/Location.vue'

export default {
    name: 'ContactPage',
    components: {
        ContactBanner, // Comma instead of a semicolon
        ContactLocation, // Comma instead of a semicolon
    },
};
</script>

<!-- this is for self style     style -->
<style lang="">
    
</style>


