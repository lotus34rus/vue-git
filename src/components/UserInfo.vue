<template>
    <div>
        <h2>Информация о пользователе {{info.login}}</h2>
        <img :src="info.avatar_url">
        <div class="bio">
            <p>
                {{info.bio}}
            </p>

            <p><a :href="info.html_url"> Перейти к профилю</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: ['info']
}
</script>


<style lang="css" scoped>
    img{
        width: 250px;
    }
</style>