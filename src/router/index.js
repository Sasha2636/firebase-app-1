import Vue from 'vue'
import VueRouter from 'vue-router'
import guestMiddleware from "./middleware/guestMiddleware";
import authMiddleware from "./middleware/authMiddleware";
// import subscribersMiddleware from "./middleware/subscribersMiddleware";
import MiddlewarePlugin from "vue-router-middleware-plugin";
import Secret from "@/views/Secret.vue";
import Login from "@/views/Login.vue";
import FinansUpravl from "@/views/FinansUpravl.vue"
import AdminMenu from "@/views/AdminMenu.vue"
import Category from "@/views/Category.vue"
import Register from "@/views/Register.vue"
Vue.use(VueRouter)

const Home = () =>
  import(/* webpackChunkName: "MainBoard" */ "@/views/Home.vue");
// const BoardComponent = () =>
//   import(
//     /* webpackChunkName: "BoardComponent" */ "@/components/board/BoardComponent"
//   );




const routes = [
   
    {
      path: "/",
      name: 'Home',
      component: Home,
      children: [
                  {
                    path: "/novosti",
                    name: "novosti",
                    component: {
                      render: (h) => h("div", ["Страница с новостями", h("router-view")]),
                     
                    },
                    meta: {
                      middleware: {
                        ignore: [authMiddleware],
                        attach: [guestMiddleware], 
                      },
                      title:"Новости",
                      content:"Контентыч",
                      
                    },
                },
                {
                  path: "/fin",
                  component:FinansUpravl,
                  meta: {
                    middleware: {
                      ignore: [authMiddleware],
                      attach: [guestMiddleware], 
                    },
                  }
                },
                

                  {
                    path: "/finansupravl",
                    name: "finansupravl",
                    components: {
                      default: { render: (h) => h("div", ["I'm Default"]) },
                      user: { render: (h) => h("div", ["I'm User"]) },
                      guest: { render: (h) => h("div", ["I'm Guest"]) },
                    },
                    meta: {
                      middleware: {
                        ignore: [authMiddleware],
                        attach: [guestMiddleware], 
                      },
                    },
                  },    
                ],
    
    },
    {
      path:"/secret",
      name:"secret",
      component:Secret,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Секрет",
        content:"Контентыч",
        
      },
    },
    {
      path:"/login",
      name:"login1",
      component:Login,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Логин",
        content:"Контентыч",
        
      },
    },
    {
      path:"/register",
      name:"register",
      component:Register,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Регистрация пользователя",
       
        
      },
    },
    {
      path:"/category",
      name:"category",
      component:Category,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Категории",
        content:"Контентыч",
        
      },
    },
    {
      path:"/adminmenu",
      name:"adminmenu",
      component:AdminMenu,
      meta: {
        middleware: {
          ignore: [authMiddleware],
          attach: [guestMiddleware], 
        },
        title:"Админ меню",
        
        
      },
    },
    
    

    {
      path: "/auth-required",
      name: "auth-required",
      component: { render: (h) => h("div", ["Auth required!"]) },
      meta: {
        middleware: {
          ignore: [authMiddleware],
        },
      },
    },
    
    {
      path: "/*",
      component: { render: (h) => h("div", ["404! Page Not Found!"]) },
      meta: {
        middleware: {
          ignore: [authMiddleware],
        },
      },
    },

   
    

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  
  document.content=to.meta.content;
  document.title = `${title ? title + "  " : ""}`;
  next();
});
Vue.use(MiddlewarePlugin, {
    router,
    middleware: [authMiddleware],
  });
export default router
