<script>
import navigasiVue from '@/components/navigasi.vue'
import aboutPorto from '@/components/portoComponent/about.vue'
import keunggulanPorto from '@/components/portoComponent/keunggulan.vue'
import hargaPorto from '@/components/portoComponent/harga.vue'
import contactPorto from '@/components/portoComponent/contact.vue'
import footers from '@/components/portoComponent/footer.vue'
export default{
    methods:{
        backLandingPage(){
            this.$router.push('/')
        }
    },
    components:{
        navigasiVue,
        aboutPorto,
        keunggulanPorto,
        hargaPorto,
        contactPorto,
        footers
    },
}
</script>
<template>
    <div class="container">
        <navigasiVue></navigasiVue>
        <aboutPorto></aboutPorto>
        <keunggulanPorto></keunggulanPorto>
        <hargaPorto></hargaPorto>
        <contactPorto></contactPorto>
        <footers></footers>
    </div>
            
 
</template>
<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

</style>