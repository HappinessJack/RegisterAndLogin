<script setup>
import templateMe from "./templateRegularLoginAndRegister.vue"
import axios from "axios"
let user = {
    username: "jack",
    password: 123
}
function whenClick() {
    axios.post("http://localhost:8082/LoginProject_war/login",`loginUsername=${user.username}&password=${user.password}`).then(response => {
        console.log(response)
        if(response.data===false){
            window.alert("密码错误");
        }else{
            window.alert("登录成功即将,跳往主页");
            window.location.href="https://www.baidu.com"
        }
    }).catch(error => {
        window.alert(error);
    }).finally();
    
}


</script>

<template>
    <!-- <templateMe server-host="http://localhost:8082/LoginProject_war/login"> -->
    <templateMe>
        <template v-slot:content_name>用户名<input type="text" placeholder="you's login username" name="loginUsername"
                v-model="user.username" required pattern="[a-zA-Z0-9_]+"></template>
        <template v-slot:password>&nbsp;&nbsp;&nbsp;密码<input type="password" name="password"
                v-model="user.password" required></template>
        <template v-slot:submit>
            <input type="submit" v-on:click="whenClick">
        </template>

    </templateMe>
</template>

<style scoped></style>
