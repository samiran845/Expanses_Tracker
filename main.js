const addBtn = document.querySelector(".add_btn")
const crossBtn = document.querySelector(".cross")
const cards = document.querySelectorAll(".card")
const type = document.querySelector(".expenses_type")
const submit = document.querySelector(".submit")
// console.log(cards)

const craditAccount = document.querySelector(".cradit_account")
const debitAccount = document.querySelector(".debit_account")
const category = document.querySelector(".category")
const description = document.querySelector(".description")
const date = document.querySelector(".date")
const amount = document.querySelector(".amount")



addBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "block"
    addBtn.style.display = "none"
})

crossBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "none"
    addBtn.style.display = "flex"

})


function emptyCards(){
    craditAccount.querySelector(".type").value = ""
    debitAccount.querySelector(".type").value = ""
    category.querySelector(".type").value = ""
    description.querySelector(".type").value = ""
    date.querySelector(".type").value = ""
    amount.querySelector(".type").value = ""
}

type.addEventListener("change", (e)=>{
    transationType = e.target.value

    emptyCards()
    
    if(transationType == "Expenses"){
        craditAccount.style.display = "none"
        debitAccount.style.display = "flex"
        category.style.display = "flex"
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

function dataCreation(){
    let data = {}

    data.type = type.value
    data.craditAccount = craditAccount.querySelector(".type").value
    data.debitAccount = debitAccount.querySelector(".type").value
    data.category = category.querySelector(".type").value
    data.description = description.querySelector(".type").value
    data.date = date.querySelector(".type").value
    data.amount = amount.querySelector(".type").value

    return data
}

submit.addEventListener("click",()=>{
    let data = dataCreation()


    // if(type.value == "Expenses"){
    //     data.type = "expanses"
    //     data.debitAccount = debitAccount.querySelector(".type").value
    //     data.category = category.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "Income"){
    //     data.type = "income"
    //     data.craditAccount = craditAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "Transfer"){
    //     data.type = "transfer"
    //     data.craditAccount = craditAccount.querySelector(".type").value
    //     data.debitAccount = debitAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "ATM_withdrawal"){
    //     data.type = "atm_withdrawal"
    //     data.debitAccount = debitAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "Cash_received"){
    //     data.type = "cash_received"
    //     data.craditAccount = craditAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "Cashback"){
    //     data.type = "cashback"
    //     data.craditAccount = craditAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value

    //     console.log(data)
    // }
    // if(type.value == "Refund"){
    //     data.type = "refund"
    //     data.craditAccount = craditAccount.querySelector(".type").value
    //     data.description = description.querySelector(".type").value
    //     data.date = date.querySelector(".type").value
    //     data.amount = amount.querySelector(".type").value
    
    //     console.log(data)
    // }
    

    let action = "add_transation"
    
    let url = `https://script.google.com/macros/s/AKfycbxaSITIxLe2qItIx-6bdDCyu_6Q3UDVE-S9jYEJju6oaoh7xsWL6OIbhZ4mEagIzJ3M/exec?action=${action}`


    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res=>res.text()).then(resFinal=>console.log(resFinal))
})





// document.getElementById('testForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     fetch(url).then(res=>res.json()).then(resFinal=>console.log(resFinal))
// });