<script>
export default{
    data(){
        return{
            teks:[
                {judul:'Desain Kreatif dan Responsif',paragraph:'Kami memahami bahwa setiap bisnis memiliki keunikan tersendiri. Oleh karena itu, kami menawarkan desain website yang kreatif dan responsif, yang tidak hanya menarik secara visual tetapi juga mudah diakses di berbagai perangkat, mulai dari desktop hingga smartphone.'},
                {judul:'Harga Kompetitif dan Transparan',paragraph:'Kami menawarkan harga yang kompetitif dan transparan, tanpa biaya tersembunyi. Kami percaya bahwa kualitas terbaik tidak harus mahal.'},
                {judul:'Keamanan Terjamin',paragraph:'Keamanan data Anda adalah prioritas kami. Kami menggunakan teknologi terbaru untuk memastikan bahwa website Anda aman dari ancaman dan serangan siber. Kami juga menyediakan layanan pemantauan dan pembaruan keamanan secara berkala.'},
                {judul:'SEO dan Kecepatan Situs',paragraph:'Kami memastikan bahwa website Anda dioptimalkan untuk mesin pencari (SEO), sehingga lebih mudah ditemukan oleh calon pelanggan. Selain itu, kami juga mengutamakan kecepatan situs, yang merupakan faktor penting untuk meningkatkan peringkat di mesin pencari dan mempertahankan pengunjung.'},
            ]
        }
    }
}
</script>
<template>
    <div class="keunggulan" id="keunggulan">
    <h1 class="heading">keunggulan layanan kami</h1>
     <div class="listKeunggulan">
        <div class="col" v-for="(data,index) in teks" :key="index">
            <h3>{{ data.judul }}</h3>
            <p>{{ data.paragraph }}</p>
        </div>
     </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.keunggulan{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
h1{
    text-align: center;
}
.listKeunggulan{
    width: 100%;
    padding: 6px 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    grid-gap:15px;
}
.col{
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px 1px gray;
}
h3{
    font-size: 1.5em;
}
p{
    margin-top: 15px;
    font-size: 1em;
}
</style>