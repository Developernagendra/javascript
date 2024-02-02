const myObject = {
    js:'javascript',
    php:'laravel',
    python:'django',
    csharp:'asp',
    java:'spring'

}

for(const key in myObject){
    // console.log(key);
    // console.log(myObject[key]);

}


const proggLang = ['javascript','laravel','django','asp','spring'];

for (const key in proggLang) {
    // console.log(key);
        
    }

    // for each loop

    const coding= ['javascript','laravel','django','asp','spring'];

     coding.forEach(function(item,index,array){
            console.log(item);
            console.log(index);
            console.log(array);
        }
        );
