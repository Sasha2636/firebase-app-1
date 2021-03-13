<template>

  
<div>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">expand</el-radio-button>
  <el-radio-button :label="true">collapse</el-radio-button>
</el-radio-group>
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <router-link
      v-for="link in employeesData "
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
      <i class="el-icon-location"></i>
      <span href="#" >{{link.title}}</span>

      </router-link>
     






    </template>
    <el-menu-item-group>
      
      <router-link
      v-for="link in employeesData "
      :key="link.url"
      tag="el-menu-item"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
       
      <span href="#" >{{link.title}}</span>

      </router-link>
    </el-menu-item-group>
    
  </el-submenu>
  
</el-menu>


<router-view/>
</div>


</template>


<script>
import { app } from "@/firebaseConfig.js"
import firebase from "firebase/app";
import 'firebase/firestore';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
const db = firebase.firestore(app);
export default {
data(){
    return{
        title:"",
        isCollapse: true,
        employeesData: [],
    }
},
methods:{
   handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      readEmployees() {
      this.employeesData = [];
      db.collection('categorii').doc("dannie").collection("menu")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
                this.employeesData.push({
                id: doc.id,
                title:doc.data().title,
                id_category:doc.data().id_category,
                url:doc.data().url,
                sort:doc.data().sort,
                status:doc.data().status
            });
            
        console.log(doc.id, " => ", doc.data());
        
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    },
     beforeMount(){
    this.readEmployees();
 },

}

</script>

<style >
p{
 margin:30px;
 opacity: 0.8;
 text-align: justify;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>