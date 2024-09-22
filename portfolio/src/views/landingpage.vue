
<script>
import gambar1 from '@/img/gambar1.png'
import footers from '@/components/portoComponent/footer.vue'
export default{
    data(){
        return{
            gambar1
        }
    },
    methods:{
        toPorto(){
            this.$router.push('/porto')
        }
    },
    components:{
        footers
    }
}
</script>
<template>
    <div class="container">
        <div class="heading">
            <div class="teks">
                <h3>design webite mudah dan murah</h3>
            <p>Selamat datang di layanan pembuatan website kami, tempat di mana visi digital Anda menjadi kenyataan! </p>
            <button @click="toPorto">click</button>
            </div>
            <img :src="gambar1" alt="">
        </div>
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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    color:black;
}
.heading{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
p{
    font-size: 1.25em;
    font-weight: 350;
}
h3{
    font-size: 2.5em;
    font-weight: 900;
    text-transform: capitalize;
}
button{
    padding: 9px 15px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    background-color: black;
    color: white;
}
button:hover{
    opacity: .8;
}
</style>