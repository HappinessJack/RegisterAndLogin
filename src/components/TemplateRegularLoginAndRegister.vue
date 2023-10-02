<script setup>
import { defineProps } from 'vue';
let props = defineProps({
    //serverHost:String,
});

</script>
<template>
    <!-- target的作用是设定展示响应内容的页面... 
    the function of target is to config the site of page to show the response content.
    -->
    <!-- <form v-bind:target=serverHost method="post"> -->
    <form onsubmit="return false">
        <!-- <table id="table"> -->
        <table>
            <tr>
                <td>
                    <slot name="content_name"></slot>
                </td>
            </tr>
            <tr>
                <td>
                    <slot name="password"></slot>
                </td>
            </tr>
            <tr>
                <td>
                    <slot name="submit"></slot>
                </td>
            </tr>
    </table>
</form></template>

<style scoped></style>