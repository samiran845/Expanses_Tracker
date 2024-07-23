const addBtn = document.querySelector(".add_btn")
const crossBtn = document.querySelector(".cross")


addBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "block"
    addBtn.style.display = "none"
})

crossBtn.addEventListener("click", (e)=>{
    document.querySelector(".add_transation").style.display = "none"
    addBtn.style.display = "flex"

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