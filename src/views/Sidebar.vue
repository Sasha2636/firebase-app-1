<template>
  <div>
<!-- <ul>
      <router-link
      v-for="link in employeesData "
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
      <a href="#" >{{link.title}}</a>

      </router-link>
  </ul> -->
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <router-link
      v-for="link in employeesData "
      :key="link.url"
      tag="el-menu-item"
     
      :to="link.url"
      :exact="link.exact">
      <div href="#" >{{link.title}}</div>
  </router-link>

   <!-- <el-submenu index="2">
    <template slot="title">Workspace</template>
     <router-link
      v-for="link in employeesData "
      :key="link.value"
      tag="el-menu-item"
      
      :to="link.title"
      :exact="link.exact">
      <div href="#" >{{link.title}}</div>
  </router-link>

   
  </el-submenu> -->
  <!-- <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item> --> 
</el-menu>

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
        employeesData: [],
        }
    },
    

    methods:{
    handleSelect(key, keyPath) {
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

<style>

</style>