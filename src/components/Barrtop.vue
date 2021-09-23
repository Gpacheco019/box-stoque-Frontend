<template>
  <div class="content-top">
    <div class="logo-name">
       <h2>Box Stoque</h2>
      <!-- <div > -->
        <img class="content-img" src="../assets/logo-box-white.png" alt="logo-box">
      <!-- </div> -->
    </div>
    <div class="barr-search">
      <input type="text" placeholder="Search...">
      <button class="submit-search"><i class="fas fa-search"></i></button>
    </div>
    <!-- <div class="logo-perfil"> -->
    <!-- </div> -->
    <div class="content-user">
      <img  class="logo-perfil" src="../assets/sylvester-malone.jpg" alt="syvester-malone">
      <div class="text-user">
        <h4>Silvester-Malone</h4>
        <h5>Rapper</h5>
      </div>
    </div> 
    
  </div>
</template>

<script>
export default {
  name: "Barratop",
  data: ()=> ({

  })
}
</script>

<style scoped>
  .logo-name{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

  }
  .logo-name h2 {
    color: var(--color-text-light);
    margin-left: 20px;    
  }

  .content-top {
    width: 100vw;
    height: 80px;
    background-color: var(--color-background-home); 
    padding: 5px 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    align-items: center;
    position: fixed;
    box-shadow: 1px 1px 5px; 
  }

  .content-img {
    max-width: 100%;
    height: 60px;        
    grid-column: 1 / 4;
    margin: 0 10px 0 10px;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }  
  
  .logo-perfil {    
    width: 60px;
    height: 60px;
    background-color: lightcoral;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 10px;    
    grid-column: 7 / 7; 
      
  }

  .barr-search{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 40px;
      
  }

  .barr-search input{
    width: 500px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 5px;

    padding: 5px;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

   .barr-search button{
     width: 50px;
     height: 40px;
     margin: 5px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 5px;
     border: none;

   }

  .submit-search:hover {
    background-color: rgba(100, 201, 231, 0.933);
  }

  .content-user {
     grid-column: 8/ 8;
     display: flex;
     justify-content: center;
     align-items: center;
     
     
  }

  .text-user{
    margin: 0 25px 0 15px;
    color: var(--color-text-light);   
    text-align: center;

  }

  .text-user h4 {
    margin-bottom: 5px;
  }

  

  
  

  

  
  

  



</style>