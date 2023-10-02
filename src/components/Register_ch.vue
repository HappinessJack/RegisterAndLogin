<script setup>
import templateRegularLoginAndRegister from './templateRegularLoginAndRegister.vue';
import axios from "axios"
let user = {
    username: "jack",
    password: 123
}
function whenClick() {
    // 这里原本要写注册用户名的规则校验,这里为了方便就不写了
    //here is a code to judge whether the username qualified the rule ,but for convenience it is ignore now.
    axios.get(`http://localhost:8082/LoginProject_war/register?registerUserName=${user.username}&password=${user.password}`).then(response => {
        if(response.data==true){
            window.alert("注册成功,即将跳往首页");
            window.location.href="https://www.baidu.com"
        }else{
            window.alert("用户名已存在");
        }
    }).catch(error => {
        window.alert(error);
    }).finally();
}

</script>

<template>
    <!-- <templateRegularLoginAndRegister server-host="http://localhost:8082/LoginProject_war/register"> -->
    <templateRegularLoginAndRegister>
        <template v-slot:content_name>用户名<input type="text" placeholder="you's register username"
                name="registerUsername" v-model="user.username"></template>
        <template v-slot:password>&nbsp;&nbsp;&nbsp;密码<input type="password" name="password"
                v-model="user.password"></template>
        <template v-slot:submit><input type="submit" v-on:click="whenClick"></template>
        </templateRegularLoginAndRegister>
</template>

<style scoped></style>
