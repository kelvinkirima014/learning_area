let xhttp =new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
         if (this.readyState==4 &&this.status==200) {
         
            //document.getElementById ("demo").innerHTML=xhttp.request



            let response=JSON.parse(xhttp.responseText)

            let people=response.people

            let output='';
            for (let i=0;i< people.length;i++) {


                output+= '<li>'+people[i].name+'</li>'
            


            }
            document.getElementById ('people').innerHTML=output



         }
     };
     xhttp.open("GET","learn.json" , true)
     xhttp.send()

     //arrow function
     let add =  (b,c) => b + c
     console.log (add(5,10))

     // Es6 Classes
     class User {
         constructor(name,age,town){
             this.name = name;
             this.age = age;
             this.town =town;

         }

         // i'll add a method to increase the age by 1
         increaseAge(){
            this.age += 1

         }
        

         // i'll also add a static method
         // this is a method that is called on the class
         //itself and not an instance of the class;


         static staticMethod(){
             console.log('Am a static method')
         }


     }
     
     const user1 = new User('Frank',21,'Kabete')
     user1.increaseAge();
     console.log(user1.age);
     
      User.staticMethod();// returns 'Am a static method'
      /*
      user1.staticMethod();// returns TypeError since user1 is an instance of User
      */

     // Asynchronous javascript

     const second = ()=>{
         setTimeout(()=>{
             console.log('Async waits 3seconds')
         },3000)
     };
     const first = ()=>{
         console.log('how are you')
         second();
         console.log('the end')


     };
     first();


     //Promise
     //In this example we store a promise in a variable 
     //the promise has executer function
     //in this function, 
     //we have Asynchronous code,the setTimeOut,
     //which then returns an array
     
     const getIds = new Promise((resolve, reject) => {
         setTimeout(() =>{
             resolve([500,300,100])
         },1500)
     })
     const getRecipe = recId =>{
        return new Promise((resolve, reject) => {
            setTimeout(Id =>{
                const recipe ={title:'fresh tomato pasta',
                publisher:'Kevin'}
                resolve(`${Id}:${recipe.title}`)
            },4000,recId)
           
      })
    
    }
    
     // the 'then' method is available on all promise objects
     //we use it to handle the fulfilled promise
     //we pass a callback function 
     //which has results of the fulfilled(resolved)promise
     //  (in this case Ids)as it argument
     getIds
    .then(Ids =>{
         console.log(Ids)
         return getRecipe(Ids[2])

     })
     //here we chain another then method to 
     //return the recipe from the getRecipe function
    .then(recipe =>{
        console.log(recipe)
    })
    
     //we can also pass 'catch' method
     //the catch method is used with reject() to handle
     //failed (rejected) promise
     const getData = new Promise((resolve, reject) =>{
         setTimeout(() =>{
             reject('failed')
         },2000)
     })
     getData.catch(err =>{
         console.log('error!')
     })
   

     
     
     



