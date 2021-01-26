
const getNames = 
    new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Kevin')
        },5000)
    })
  

getNames.then( names =>{
    console.log(names)
})

