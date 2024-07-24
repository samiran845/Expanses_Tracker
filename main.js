const addBtn = document.querySelector(".add_btn")
const crossBtn = document.querySelector(".cross")
const cards = document.querySelectorAll(".card")
const type = document.querySelector(".expenses_type")
// console.log(cards)



addBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "block"
    addBtn.style.display = "none"
})

crossBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "none"
    addBtn.style.display = "flex"

})


const craditAccount = document.querySelector(".cradit_account")
const debitAccount = document.querySelector(".debit_account")
const category = document.querySelector(".category")
const description = document.querySelector(".description")
const date = document.querySelector(".date")
const amount = document.querySelector(".amount")

type.addEventListener("change", (e)=>{
    transationType = e.target.value
    
    if(transationType == "Expenses"){
        craditAccount.style.display = "none"
    }
    if(transationType == "Income"){
        craditAccount.style.display = "flex"
        debitAccount.style.display = "none"
        category.style.display = "none"
    }
    if(transationType == "Transfer"){
        craditAccount.style.display = "flex"
        debitAccount.style.display = "flex"
        category.style.display = "none"
    }
    if(transationType == "ATM_withdrawal"){
        craditAccount.style.display = "none"
        debitAccount.style.display = "flex"
        category.style.display = "none"
    }
    if(transationType == "Cash_received"){
        craditAccount.style.display = "flex"
        debitAccount.style.display = "none"
        category.style.display = "none"
    }
    if(transationType == "Cashback"){
        craditAccount.style.display = "flex"
        debitAccount.style.display = "none"
        category.style.display = "none"
    }
    if(transationType == "Refund"){
        craditAccount.style.display = "flex"
        debitAccount.style.display = "none"
        category.style.display = "none"
    }
})




// document.getElementById('testForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const formData = new FormData(e.target);

//     const url = 'https://script.google.com/macros/s/AKfycbxPZTGVjkFwXemiIsF9p4DddtBya4dOPp-WI3QVHmpoGfnLdpJGtAeHl-To9RJFtiVI/exec'

//     // console.log(JSON.stringify(formData))

//     // let data = JSON.stringify([{"name":"Chitra","age":"23","gender":"Female"}])

//     // console.log(data)

//     let data = {"name":"Krishna","age":"16","gender":"Male"}

//     // console.log(a[0].name, a[0].age, a[0].gender)

//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data)
//     }).then(res=>res.text()).then(resFinal=>console.log(resFinal))

//     // fetch(url, {
//     //     method: 'POST',
//     //     // body: formData
//     //     body: data,
//     //     headers: { 'Content-Type': 'application/json' }
//     // }).then(res=>{
//     //     if(res.ok){
//     //         console.log("sucessfully")
//     //     }else(
//     //         console.log("Error")
//     //     )

//     //     return res.text();
//     // })
//     // .then(finalRes=>console.log(finalRes))



//     fetch(url).then(res=>res.json()).then(resFinal=>console.log(resFinal))
// });