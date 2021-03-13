<template>
  <div id="app">
    <div class="sidebar">
      <Sidebar/>    
      <label for="logged-in"
        >Logged In
        <input type="checkbox" id="logged-in" v-model="loggedIn" />
      </label>
    </div>
    <div class="main-content"> 
      
      
       
       
 <!-- <div class="links"> -->
      <!-- <router-link :to="{ name: 'register' }">Register</router-link>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'forgot' }">Forgot</router-link>
     
      <router-link :to="{ name: 'license' }">License</router-link>
        <router-link :to="{ name: 'board' }">Board</router-link>
        <router-link :to="{ name: 'board-child', params: { id: 1 } }"
          >Board:33</router-link
        >
        <router-link :to="{ path: '/board/33/child' }"
          >Board:33/child</router-link
        > -->
      <!-- <template v-if="loggedIn">
       
        
        <router-link :to="{ path: '/404' }">404</router-link>
      </template> -->

      
     
 
     <!-- <router-link 
        v-for="tab in tabs"
        :key="tab.link"
        :to="tab.link"
        tag="button"
        class="button"
    ><p v-html="tab.name"></p></router-link>  -->

    
<transition name="fade">
    <router-view />
    </transition>


   
       <h3>{{id}}</h3>
  </div>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-analytics.js"></script>
<script>

import Sidebar from '@/views/Sidebar.vue'
export default {
  tabs: [{
        link: '/',
        title: 'Товары',
        body:"<h1>Товары</h1>",
        name:"proba"
    }, {
        link: '/categories',
        title: 'Категории' ,
        body:"<h1>Категория</h1>",
        name:"proba1"

    }, {
        link: '/brands',
        title: 'Бренды',
         body:"<h1>Бренды</h1>",
         name:"proba2"
    }],
  data() {
    return {
      loggedIn: !!window.localStorage.getItem("logged-in"),
      hasLicense: !!window.localStorage.getItem("has-license"),
       menu: [
                    {
                        header: true,
                        title: 'Меню управления',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/#',
                        title: 'Главное',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/novosti',
                                title: 'Новости'
                            },
                             {
                                 href: '/history',
                                title: 'О районе'
                            },
                            {
                                 href: '/finansupravl',
                                title: 'Финансовое управление'
                            }
                          ]
                       },
                    {
                          href: '/aboutupravl',
                         title: 'Об управлении',
                          icon: 'fa fa-chart-area',
                         child: [
                            {
                                href: '/aboutupravl/polozhenie',
                                title: 'Положение'
                            },
                            {
                                href: '/aboutupravl/perechennpa',
                                title: 'Перечень НПА'
                            },
                            {
                                href: '/aboutupravl/rukovodstvo',
                                title: 'Руководство'
                            },
                            {
                                href: '/aboutupravl/organizationstructure',
                                title: 'Организационная структура'
                            },
                            {
                                href: '/aboutupravl/contactinformation',
                                title: 'Контактная информация'
                            },
                            {
                                href: '/aboutupravl/municipalnayasluzhba',
                                title: 'Муниципальная служба',
                                child:[
                                    {
                                      href: '/aboutupravl/municipalnayasluzhba/postuplenie',
                                      title: 'Поступление на муниципальную службу'
                                    },
                                    {
                                      href: '/aboutupravl/municipalnayasluzhba/trebovaniedolzhnost',
                                      title: 'Квалификационные требования к должностям гражданской службы'
                                    },
                                    {
                                      href: '/aboutupravl/municipalnayasluzhba/vakantniedolzhnosti',
                                      title: 'Сведения о вакантных должностях'
                                    },
                                    {
                                      href: '/aboutupravl/municipalnayasluzhba/uslovieandresultatkonkurs',
                                      title: 'Условия и результаты конкурсов'
                                    }
                                ]
                            },
                            {
                                href: '/aboutupravl/informationsystem',
                                title: 'Информационные системы'
                            },
                            {
                                href: '/aboutupravl/informationzakupki',
                                title: 'Информация о закупках'
                            },
                            {
                                href: '/aboutupravl/financecontrol',
                                title: 'Финансовый контроль'
                            },
                            {
                                href: '/aboutupravl/otchet',
                                title: 'Отчет'
                            },
                            {
                                href: '/aboutupravl/minicipalnieprogrammi',
                                title: 'Муниципальные программы'
                            },
                            {
                                href: '/aboutupravl/municipalniifinansovicontrol',
                                title: 'Муниципальные программы и финансовый контроль'
                            },
                        ]
                    },




                    {
                        href: '/deyatelnost',
                        title: 'Деятельность',
                        icon: 'fa fa-chart-area',
                       child: [
                            {
                                href: '/deyatelnost/budzhetprocess',
                                title: 'Бюджетный процесс'
                            },
                            {
                                href: '/deyatelnost/budzhet-uchet-and-otchet',
                                title: 'Бюджетный учет и отчеты'                                
                            },
                            {
                                href: '/deyatelnost/municipalni-dolg',
                                title: 'Муниципальный долг'                                
                            },
                            {
                                href: '/deyatelnost/predostavl-lgoti',
                                title: 'Предоставляемые льготы'                                
                            },
                            {
                                href: '/deyatelnost/electroni-budzhet',
                                title: 'Электронный бюджет'                                
                            },
                            {
                                href: '/deyatelnost/otkritie-dannie',
                                title: 'Открытые данные'                                
                            },
                            {
                                href: '/deyatelnost/budzhet-for-grazhdan',
                                title: 'Бюджет для граждан'                           
                            },
                            
                            ]     
                    },
                    {
                        href: '/dokumenti',
                        title: 'Документы',
                        icon: 'fa fa-chart-area',
                        child:[
                            {
                                href:'/dokumenti/poryadok-obsluzh-normativ-act',
                                title:'Порядок обжалования нормативных правовых актов'
                            },
                            {
                                href:'/dokumenti/proekti-dokumentov',
                                title:'Проекты документов'
                            },
                            {
                                href:'/dokumenti/prikazi-pisma-upravleniya',
                                title:'Приказы и письма управления'
                            },
                            {
                                href:'/dokumenti/prikazi-pisma-min-finansovrf',
                                title:'Приказы и письма Министерства финансов РФ'
                            },
                            {
                                href:'/dokumenti/municipalnie-normativ-pravovie-documenti',
                                title:'Муниципальные нормативные правовые акты'
                            },

                           

                            
                           
                        ]
                    },
                    {
                        href: '/budzhet',
                        title: 'Бюджет',
                        icon: 'fa fa-chart-area',
                       
                    },
                     {
                        href: '/otcheti',
                        title: 'Отчеты',
                        icon: 'fa fa-chart-area',
                       
                    },
                ]
    
      
    };
  },
  components:{
    Sidebar
  },
  created() {
    // загружаем данные, когда представление создано
    // и данные реактивно отслеживаются
    this.fetchData()
  },
  // computed:{
  //   id(){
  //     return this.$route.meta.content
  //   }
  // },
  watch: {
    loggedIn(e) {
      window.localStorage.setItem("logged-in", e ? true : "");
    },
    hasLicense(e) {
      window.localStorage.setItem("has-license", e ? true : "");
    },
    
  },
  
}

</script>

<style scoped>
.links > * {
  margin: 1em;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat',sans-serif;
  background-color:rgb(216, 213, 213);
}
header{
  width:100vw;
  background-color:#222;
  padding:3vh;
  
}
.main-content{
  width:70%;
  height: 100%;
  border-right:1px solid black;
  margin-top:30px;
  border:1px solid black;
  background-color: rgb(255, 255, 255);
  display: flex;
 
  align-items: flex-start;
  justify-content: center;
  
  padding:30px;
}

</style>