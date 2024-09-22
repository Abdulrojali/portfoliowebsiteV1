<script>
export default{
    data(){
        return{
            daftarHarga:[
                {nama:'Paket Basic',harga:'Harga: Rp 2.000.000',deskripsi:['Desain template standar Halaman utama','tentang kami, layanan, dan kontak Formulir kontak dasar Mobile-friendly SEO', '1 tahun domain dan hosting']},
                {nama:'Paket Standard',harga:'Harga: Rp 5.000.000',deskripsi:['Desain template standar Halaman utama, tentang kami, layanan',' dan kontak Formulir kontak dasar Mobile-friendly SEO',' 1 tahun domain dan hosting']},
                {nama:'Paket Professional',harga:'harga: Rp 10.000.000',deskripsi:['Desain template standar Halaman utama, tentang kami, layanan',' dan kontak Formulir kontak dasar Mobile-friendly SEO',' 1 tahun domain dan hosting']},
            ]
        }
    },
}
</script>
<template>
    <div class="harga" id="harga">
        <h1>paket pembuatan website</h1>
        <div class="content">
            <div class="col" v-for="(data,index) in daftarHarga" :key="index">
            <h2>{{ data.nama }}</h2>
            <div class="fitur">
                <h5 class="headingFitur">fitur</h5>
            <ul>
                <li v-for="fitur in data.deskripsi">{{fitur}}</li>
            </ul>
            </div>
            <b>Rp. {{ data.harga }}</b>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.harga{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
}
.content{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-gap: 30px;
    color: black;
    text-transform: capitalize;
}
button{
    margin-top: 10px;
    padding: 6px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 2px 1px gray;
    text-transform: capitalize;
}
p{
    font-size: .9em;
}
ul{
    display: flex;
    flex-direction: column;
    gap: 6px;
    list-style-type: none;
}
li{
    font-size: .85em;
}
.col{
    border-radius: 5px;
    padding: 6px;
    height: 250px;
    box-shadow: 0 0 2px 1px gray;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.fitur{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
.headingFitur{
    font-size: 1.1em;
}
b{
    margin-top: 20px;
}
</style>