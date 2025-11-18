let myDate = new  Date("01-22-2023")
console.log(myDate)

//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toLocaleString())


//  console.log(myDate.toLocaleTimeString())

//  console.log(myDate.toTimeString())


//  let myTimeStamp = Date.now()
//  console.log(myTimeStamp) 

//  console.log(myDate.getTime())


 console.log(myDate.toLocaleString('default',{
    hour:"numeric"
}))
 