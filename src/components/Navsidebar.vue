<template>
  <nav class="navegation" id="navegation">

    <div class="content" v-for="item in menu" :key="item.title">    
      <router-link :to="item.href">{{ item.title }}</router-link>
    </div>
    
  </nav>
</template>

<script>
export default {
  name: 'Navsidebar',
  data: () =>({
    menu: [
      {
        href: '/',
        title: 'Home',
        icon: ""
      },
      {
        href: '/categorias',
        title: 'Categoria',
        icon: ""
      },
      {
        href: '/produtos',
        title: 'Produtos',
        icon: ""
      }
      
    ],
  })  
}
</script>

<style scoped>
  .navegation {
    bottom: 0;
    position: fixed;
    width: 230px;
    height: calc(100% - 80px);
    background-color: var(--color-background-nav);
  }

  h2 {
    color: var(--color-text-light);
    display: flex;
    justify-content: center;
    text-align: center;    
    flex-direction: column;
    padding: 15px;
  }

  .content a{
    color: var(--color-text-light);
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 10px;
    flex-direction: column;
  }
  

</style>