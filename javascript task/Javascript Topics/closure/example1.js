// closure definition : 

// we can create funtion inside function and we can access the variable of outer function inside the inner function but we cannot access the inner function variable in outer function . 


function outerFunc(){
    let firstname = "Jhon" ; 
    function innerFunc(){
        let lastname = "Doe" ; 
        console.log(firstname+" "+lastname);
    }
    innerFunc()
}


outerFunc();