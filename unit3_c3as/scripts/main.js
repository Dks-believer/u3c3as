// // console.log("deel")

// // function submit(){
    
//     // e.preventDefault();
//     // let form_data={
//     // name:document.getElementById("name").value,

//     // email:document.getElementById("email").value,

    
//     // address:document.getElementById("address").value,
//     // amount:document.getElementById("amount").value
   
//     // }
//     //  console.log(form_data)

//     // let arr = JSON.parse(localStorage.getItem("user")) ||[]

//     // function Product(n,c,i,p){
//     //     this.name = n,
//     //     this.email = c,
//     //     this.address = i,
//     //     this.amount= p
 
//     // }
   


//     // function submit(event){
//     //     e.preventDefault()

//     //     let form = document.getElementById("form")

//     //     let name = form.name.value

//     //     let email = form.email.value

//     //     let address = form.address.value

//     //     let amount = form.amount.value

        

    
//     //     let product = new Product(name,email,address,amount);

//     //     arr.push(product)

//     //     console.log(arr)

//     //     localStorage.setItem("user", JSON.stringify(arr))
//     // }
    

//     let arr = JSON.parse(localStorage.getItem("Products")) ||[]

//     function Product(n,c,i,p,g,b){
//         this.name = n,
//         this.category = c,
//         this.image = i,
//         this.price = p,
//         this.gender = g,
//         this.sold = b
//     }

//     let sold = document.querySelector("#sold");
//     sold.addEventListener("click",soldButton)


//     function storeProduct(e){
//         e.preventDefault()

//         let form = document.getElementById("form")

//         let name = form.name.value

//         let category = form.category.value

//         let image = form.image.value

//         let price = form.price.value

//         let gender = form.gender.value

//     // console.log(form)
//         let product = new Product(name,category,image,price,gender);

//         arr.push(product)

//         //console.log(arr)

//         localStorage.setItem("Products", JSON.stringify(arr))
//     }

//     function soldButton(){
//             //console.log("okay",sold.innerText)
//             if (sold.innerText==="Sold : False"){
//                 sold.innerText="Sold : True"
//                 sold.style.color = "red"
//             }else{
//                 sold.innerText="Sold : False"
//                 sold.style.color = "green"
//             }
//         }
