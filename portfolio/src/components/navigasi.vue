<script>
export default{
    data(){
        return{
            navigasiData:[
            {name:"about",url:"#about"},
            {name:"keunggulan",url:'#keunggulan'},
            {name:"harga",url:'#harga'},
            {name:"contact",url:'#contact'},
        ]
        }
    }
}
</script>
<template>
    <nav>
        <h1 class="heading">abdul</h1>
        <ul>
            <li v-for="(data,index) in navigasiData" :key="index"><a :href="data.url">{{ data.name }}</a></li>
        </ul>
    </nav>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
nav{
    width: 100%;
    position:fixed;
    top:0;
    margin-bottom: 50px;
    padding: 6px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
h1{
    font-size: 2em;
    font-weight: 900;
    text-transform: capitalize;
    color: black;
}
ul{
    display: flex;
    gap: 30px;
    list-style-type: none;
}
li a{
    text-decoration: none;
    color:black;
    cursor: pointer;
}
li a:hover{
    opacity:.8;
}
</style>