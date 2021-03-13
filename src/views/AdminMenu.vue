<template>
  <div>
<h2>Добавление главного уровня</h2>
<el-input placeholder="Название" v-model="title" clearable v-on:click="createMenu(title,id_category,sort,url,status)" >Название </el-input>
<el-input placeholder="ID Категории" v-model="id_category" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >Сортировка </el-input>    
<el-input placeholder="URL" v-model="url" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >URL </el-input>    
<el-input placeholder="Sort" v-model="sort" clearable v-on:click="createMenu(title,id_category,url,sort,status)" >Сортировка </el-input>     
<el-checkbox v-model="status" clearable v-on:click="createMenu(title,id_category,url,sort,status)">Статус</el-checkbox>
<br>
<el-button placeholder="Отправить " type="primary" v-on:click="createMenu(title,id_category,url,sort,status)">Отправить</el-button>     
<hr>
<h2 >Добавление дочернего элемента</h2>

<el-input placeholder="Название" v-model="title" clearable v-on:click="addChildMenu(title,value)" >Название </el-input>
 <el-select v-on:click="addChildMenu(title,value)" v-model="value" placeholder="Select" >
<el-option 
      v-for="item in employeesData"
      :key="item.title"
      :label="item.title"
      :value="item.id">
</el-option>   
</el-select>
<br>
<el-input placeholder="URL" v-model="url" clearable v-on:click="addChildMenu(title,value,url,sort,status)" >URL </el-input>    
<el-input placeholder="Sort" v-model="sort" clearable v-on:click="addChildMenu(title,value,url,sort,status)" >Сортировка </el-input>     
<el-checkbox v-model="status" clearable v-on:click="addChildMenu(title,value,url,sort,status)">Статус</el-checkbox>
<br>
<el-button placeholder="Отправить " type="primary" v-on:click="addChildMenu(title,value,url,sort,status)">Отправить</el-button>     

<!-- <button v-on:click="prosto()">Тупо кнопка</button> -->








<el-table
      :data="
        employeesData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 65vw;"
    >
      
      <el-table-column label="Название" prop="title"> </el-table-column>
      <el-table-column label="URL" prop="url"> </el-table-column>
      <el-table-column label="ID категории" prop="id_category"> </el-table-column>
      <el-table-column label="Сортировка" prop="sort"> </el-table-column>
       <el-table-column label="Статус" prop="status"> <el-checkbox  size="mini"></el-checkbox></el-table-column>
      <el-table-column align="right">
        
       
        <template slot-scope="scope">         
                                                                         

          <el-popover placement="bottom" title="Редактор разделов" width="200" trigger="click">
             <el-input placeholder="Название" v-model="scope.row.title" @blur="updateEmployee(scope.row.id, scope.row.title, scope.row.id_category, scope.row.url,scope.row.sort,scope.row.status)"></el-input>
            <el-input placeholder="ID категории" v-model="scope.row.id_category" @blur="updateEmployee(scope.row.id, scope.row.title, scope.row.id_category, scope.row.url,scope.row.sort,scope.row.status)"></el-input>
            <el-input placeholder="URL" v-model="scope.row.url" @blur="updateEmployee(scope.row.id, scope.row.title, scope.row.id_category, scope.row.url,scope.row.sort,scope.row.status)"></el-input>
            <el-input placeholder="Сортировка" v-model="scope.row.sort" @blur="updateEmployee(scope.row.id, scope.row.title, scope.row.id_category, scope.row.url,scope.row.sort,scope.row.status)"></el-input>
            <el-input placeholder="Статус" v-model="scope.row.status" @blur="updateEmployee(scope.row.id, scope.row.title, scope.row.id_category, scope.row.url,scope.row.sort,scope.row.status)"></el-input>
           
            <el-button size="mini" slot="reference" icon="el-icon-edit" circle></el-button>

          </el-popover>

          <el-button size="mini" type="danger" @click="deleteEmployee(scope.row.id)" icon="el-icon-delete" circle></el-button>
        </template>
          
          

         
          <el-button
            size="mini"
            type="danger" 
            icon="el-icon-delete" circle
            @click="deleteEmployee(scope.row.id)"
            ></el-button>

   
      </el-table-column>
    </el-table>
















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
        id_category:"",
        sort:"",
        url:"",
        status:"",
        dialogVisible: false,
        employeesData: [],
        checked: true,
        value:""
    }
},

methods:{
    createMenu(title,id_category,url,sort,status){
        if(this.title!="" && this.id_category!="" &&  this.sort!="" && this.status!=""){
      db.collection('categorii').doc("dannie").collection("menu")
      .add({title:title,id_category:id_category,url:url,sort:sort,status:status})
      .then(function () {
            console.log('Document Added ');
            this.readEmployees();
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
        this.title=""
        this.id_category="" 
        this.url=""
        this.sort="" 
        this.status="" 
      }
    },
    updateEmployee(id,title,id_category,url,sort,status) {
      db.collection('categorii').doc("dannie").collection("menu")
        .doc(id)
        .update({
          title: title,
          id_category:id_category,
          url:url,
          sort:sort,
          status:status
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.readEmployees();
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    readEmployees() {
      this.employeesData = [];
      db.collection('categorii').doc("dannie").collection("menu").orderBy("sort", "asc")
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
    addChildMenu(title,value,url,sort,status){
      if(this.title!="" && this.value!="" && this.url!="" &&  this.sort!="" && this.status!=""){
      db.collection('categorii').doc("dannie").collection("menu")
      .add({title:title,value:value,url:url,sort:sort,status:status})
      .then(function () {
            console.log('Document Added -2 lvl ');
            this.readEmployees();
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
        this.title=""
        this.value="" 
        this.url=""
        this.sort="" 
        this.status="" 
      }
     
    },
    prosto(){
   db.collection('categorii').doc("dannie").collection("menu").where('title','==','Логин')
   .get()
   .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          });
   });   
    },
    deleteEmployee(id) {
      db.collection('categorii').doc("dannie").collection("menu")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readEmployees();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
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