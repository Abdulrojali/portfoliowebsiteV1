<script>
import img2 from '@/img/imgporto.png'
import axios from 'axios'
export default{
    data(){
        return{
            img2
        }
    },
    methods:{
        async downloadCv(){
            const filename='abdulrojali.pdf'
            await axios.get(`http://localhost:8080/download/${filename}`)
            .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((error) => {
          console.error('Error downloading the file', error);
        });
        }
    }
}
</script>
<template>
<div class="about" id="about">
    <div class="teks">
        <h3>my name is Abdul <span>rojali</span></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolorum fugiat a optio porro esse dolor. Quis enim dicta tempore iste laboriosam vero minus temporibus voluptates delectus incidunt, provident dignissimos accusamus numquam porro, atque accusantium quas ipsa sunt, nemo aperiam. Ratione, eos omnis quod laborum itaque minus voluptates saepe deleniti.</p>
        <button @click="downloadCv">download cv</button>        
    </div>
    <img :src="img2" alt="">
</div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
.about{
    padding: 0 20px;
    margin-top: 30px;
    width:100%;
    height:75vh;
    display:grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
}
h3{
    font-size: 2.5em;
}
p{
    font-size: .8em;
}
button{
    margin-top: 10px;
    padding: 10px 15px;
    cursor: pointer;
}
button:hover{
    opacity:.8;
}
img{
    object-fit: cover;
    display: inline-block;
    width: 100%;
    height: 350px;
}
</style>