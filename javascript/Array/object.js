//singleton
var object = {
    name: 'nagendra',
    age: 30
    };

    //object literal

    const mySymbol=Symbol('key1');
     const jsUser={
        name:"nagendra",
        "full-name":"nagendra sharma",
        [mySymbol]:"value",
        age:20,
        location:"bangalore",
        email:"su",
        isLoggedIn:false,
        lastLogindays:["mon","tue","wed"]

     }

   //   console.log(jsUser.email);
   //   console.log(jsUser["email"]);
   //      console.log(jsUser["full-name"]);
   //      console.log(jsUser[mySymbol]);

        jsUser.email="su@123"
      //   object.freeze(jsUser);
        jsUser.email="nagendra@123"
         // console.log(jsUser);

         jsUser.greeting=function(){
               console.log("hello");
            }
            jsUser.greetingTwo=function(){
               console.log('hello,${this.name}');
            }

            console.log(jsUser.greeting());
            console.log(jsUser.greetingTwo());

