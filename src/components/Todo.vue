<template>
    <div class="container">
        <h2>Todo List</h2>
        <input type="text">
        <div v-for="item in items" :key="item" class="todo-item">
            <p>{{ item }}</p>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Todo',
    props: {
        items: Array
    }
}
</script>

<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    p {
        margin: 0;
    }
    input {
        min-height: 2rem;
        text-decoration: none;
        padding: .2rem .6rem;
        outline: none;
        border-radius: 3px;
        border: 0;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    .todo-item {
        padding: .7rem;
        margin: .4rem 0rem;
        border-radius: 3px;
        background: rgb(211, 211, 211);
    }
</style>