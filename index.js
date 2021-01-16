let xhttp =new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
         if (this.readyState==4 &&this.status==200) {
         
            //document.getElementById ("demo").innerHTML=xhttp.request



            let response=JSON.parse(xhttp.responseText);

            let people=response.people

            let output='';
            for (let i=0;i< people.length;i++) {


                output+= '<li>'+people[i].name+'</li>';
            


            }
            document.getElementById ('people').innerHTML=output;



         }
     };
     xhttp.open("GET","learn.json" , true);
     xhttp.send();

     //arrow function
     let add =  (b,c) => b + c;
     console.log (add(5,10));

     // Es6 Classes
     class User {
         constructor(name,age,town){
             this.name = name;
             this.age = age;
             this.town =town;

         }

         // i'll add a method to increase the age by 1;
         increaseAge(){
            this.age += 1;

         }

         // i'll also add a static method
         // this is a method that is called on the class
         //itself and not an instance of the class;


         static staticMethod(){
             console.log('Am a static method');
         }


     }
     
     const user1 = new User('Frank',21,'Kabete');
     user1.increaseAge();
     console.log(user1.age);
     
      User.staticMethod();// returns 'Am a static method'
      /*
      user1.staticMethod();// returns TypeError since user1 is an instance of User;
      */
     




