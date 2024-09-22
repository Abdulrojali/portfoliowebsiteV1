<script>
export default{
    methods:{
        refresh(){
            window.location.reload()
        }
    }
}
</script>
<template>
    <div class="contact" id="contact">
        <h1 class="heading">contact</h1>
        <form method="post"  action="http://localhost:8080/sendEMail" class="formContact">
            <div class="col">
                <label for="subject">subject</label>
                <input type="text"  name="judul" id="judul">
            </div>
            <div class="col">
                <label for="email">email</label>
                <input type="email" name="email" id="email">
            </div>
            <div class="col">
                <label for="whats your want?">whats your want?</label>
                <textarea name="text" id="text" cols="30" rows="10"></textarea>
            </div>
            <div class="btn">
                <button type="submit">submit</button>
                <button @click="refresh">cancel</button>
            </div>
        </form>
    </div>
</template>
<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.contact{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
h1{
    text-align: center;
    font-size: 2em;
    font-weight: 900;
    text-transform: capitalize;
}

.formContact{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.col{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
input,textarea{
    padding: 3px 10px;
    border: none;
    border-bottom: 1px solid gray;
    width: 100%;
}
textarea{
    height: 100px;
}
.btn{
    margin-top: 20px;
    width:100%;
    display: flex;
    justify-content: space-around;
}
button{
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1px 2px gray;
    cursor: pointer;
}
button:hover{
    opacity: .8;
}
</style>