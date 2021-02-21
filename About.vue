<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p><input type="text" placeholder="nama" v-on:keyup.enter="submit"> </p>
{{nama}}
  </div>
</template>

<script>
export default {
 data: function(){
        return {
    //string, number,boolean,array,object
      nama:[]
        }
    },
 methods: {
      submit: function(event){
      let text = event.target.value
      this.nama.push(text)
      event.target.value = " "
    }

  },
}  
</script>