// closure definition :

// we can create function inside function and we can access the variable of outer function in inner function but we cannot access the variable of innerfunction in outerfunction , it will throw error.



const calculation = ()=>{
    var a = 10 ; 
    const multiply = () => {
        var b = 20 ; 
        return a * b ; 
    }
    function result(){
        console.log(multiply());
    }

    result() ; 
}

calculation()