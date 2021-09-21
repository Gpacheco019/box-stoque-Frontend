<template>
  <main>
    <container class="first-content">
      <div class="content-list-title">
        <h1>Lista de Categorias</h1>
      </div>
      <div class="content-list">
        <ul>
          <li>Categoria</li><hr>
          <li>Telefonia</li><hr>
          <li>Informatica</li><hr>
          <li>Impressora</li><hr>
          <li>Rede</li><hr>
        </ul>
      </div>      
    </container>
  </main>
</template>

<script>
export default {
  name: "Category",
  data:() => ({

  })
}
</script>

<style scoped>
  main {
    margin: auto;
    margin-right: 0;    
  }

  .first-content {
    margin: auto;
    width: 800px;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
      
  }

  .content-list-title{
    max-width: 700px;
    max-height: 60px;
    margin: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: initial;   
    
  }

  .content-list-title h1{
    display: flex;
    justify-content: center;
    
    color: var(--color-text-light);
  }

  .content-list{
    width: 700px;
    display: flex; 
  
  }

  .content-list ul {
    width: 100%;
    list-style: none;
    border: solid white;   
    border-radius: 15px;
    padding-bottom: 25px;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction:column;
    margin: 25px; 

  }

  .content-list li {
    line-height: 30px;
    padding: 0;
    margin: 0;
    color: var(--color-text-light);
    display: flex;
    justify-content: center;

  }

   
  

</style>