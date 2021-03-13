<template>
    <div class="container">
        <div class="wrapper">
            <label for="email"> E-mail </label>
            <input type="text" name="email">
        </div>
        <div class="wrapper">
            <label for="problem"> Problem </label>
            <input type="text" name="problem">
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Support',
    props: {
        name: String
    },
}
</script>

<style lang="css" scoped>
  input {
      height: 1rem;
      background: transparent;
      outline: none;
      margin-right: .5rem;
      padding: .5rem;
      font-size: 1rem;
      border-radius: 6px;
      border: 2px solid grey;
  }
  .container {
      display: flex;
  }
  .wrapper {
      display: flex;
      flex-direction: column;
  }
</style>