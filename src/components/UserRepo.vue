<template>
    <div>
        <h2>Репозиториии пользователя</h2>
        <div class="repo" v-for="repo of repos" :key="repo.id">
            <a :href="repo.html_url"> {{repo.name}}
                <span class="stars"> -  {{repo.stargazers_count}} "stars"</span>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: "UserRepo",
    props: ['repos']
}
</script>

<style scoped>
    .repo {
        margin: 8px 0px;
    }

    .repo a:hover{
        color: black;
    }

    .repo a {
        font-size: 20px;
        text-decoration: none;
        color: grey;

    }
</style>