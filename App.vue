<template>
  <div id="app">
    <header>
      <div class="menu-toggle">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      <div class="info">
       
        <ul>
          <p>Silahkan Log In</p>
          <input type="text" name="Username" placeholder="Masukan Username">
          <input type="password" name="Password" placeholder="Masukan Password">
          <li><router-link to="/">Log In</router-link></li> 
          <li><router-link to="/Daftar">Daftar</router-link></li> 

      </ul>
     
    </div> 
    </header>
    <nav>
      <ul>
       <li><router-link to="/">Home</router-link></li> 
       <li><router-link to="/about">About</router-link></li> 
       <li><router-link to="/menentukanjenisbilangan">menentukan jenis bilangan</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
html,body {
  padding: 0%;
  margin: 0%;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: "header header header"
                       "nav nav nav"
                       "main main main";
  grid-template-columns: 7% auto 10%;
  grid-template-rows: 50px 120px auto;
  grid-auto-rows: 100vh;  
}

header {
  grid-area: header;
  background-image: linear-gradient(70deg, turquoise, blue);
  color: whitesmoke;
}

/* aside {
  grid-area: aside;
  background-size: cover;
  background-image: linear-gradient(83deg, rgb(27, 141, 194), turquoise);
} */

nav {
  grid-area: nav;
  background-image: linear-gradient(85deg, blue, turquoise);
}
nav li {
  text-align: center;
  padding-top: 10px;
  margin-right:18px;
  padding-right:18px;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #42b983;  
}

main {
  grid-area: main;
  background-color: white;
  color:black;
}

@media screen and (min-width: 576px){
#app {
  grid-template-areas: "nav header header"
                       "nav main main"
                       "nav main main";
  grid-template-columns: 12% auto 10%;
  grid-template-rows: 50px auto;
  grid-auto-rows: 100vh;
  overflow-x: hidden;
}

header {
  display: flex;
  justify-content: right; 
  align-items: center;
  overflow: hidden;
}

.info ul{
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 15%;
  height: 330px;
  flex-direction: column;
  align-items: center;
  background-color: rgb(23, 23, 247);
  list-style: none;
  margin-top: 43px;
  transform: translateX(100%);
  transition: all 1s;
  opacity: 0;
  color: white;
  border-radius: 10px;
}

.info li {
  top: -5px;
  margin-right: 30px;
  margin-top: 20px;
  height: 40px;
  width: 100%;
  background-color: turquoise;
  border-radius: 20px;
  border: none;
  outline: none;
}

.info li:hover{
  top: -5px;
  background-color: rgb(71, 231, 125);
}

.info a {  
  color: whitesmoke;
  text-decoration: none;
}

.info p {
  margin-right: 40px;
  font-size: 20px;
}

.info ul.slide {
  opacity: 1;
  transform: translateX(0);
}

.info input{
  margin-top: 10px;
  margin-right: 30px;
  border: none;
	border-bottom: 1px solid #fff;
	background: transparent;
	outline: none;
	height: 40px;
	color: #fff;
	font-size: 16px;
}


nav ul {
  margin-top: 150px;
  list-style: none;
  text-decoration: none;
}

nav li {
  padding: 20px;
  margin-top: 30px;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
}

.menu-toggle {
display: flex;
flex-direction: column;
height: 20px;
justify-content: space-between;
position: relative;
margin-right: 20px;
}

.menu-toggle input {
  position: absolute;
  width: 40px;
  height: 28px;
  left: -10px;
  top: -7px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.menu-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.5s;
}

.menu-toggle span:nth-child(2) {
transform-origin: 0 0;
}

.menu-toggle span:nth-child(4) {
transform-origin: 0 100%;
}

.menu-toggle input:checked ~ span:nth-child(2){
  background-color: white;
  transform: rotate(45deg) translate(-1px, 1px);
}

.menu-toggle input:checked ~ span:nth-child(3){
  opacity: 0;
  transform: scale(0);
}

.menu-toggle input:checked ~ span:nth-child(4){
  background-color: white;
  transform: rotate(-45deg) translate(-1px, 0px);
}


}
</style>

<script>
 export default { 
   mounted(){
      var menuToggle = document.querySelector('.menu-toggle input')
      var header = document.querySelector('.info ul');

      menuToggle.addEventListener('click',function(){
      header.classList.toggle('slide');  
        })
    }
  }
 </script>
