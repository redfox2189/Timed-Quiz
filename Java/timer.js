const Fn = document.getElementById("FName")
const Ln = document.getElementById("Lname")

let quiz = new Promise ((res,rej) => {
    setTimeout(() => {
        if(Fn.value !== ""){
            res()
        }else {
        rej()
        }
    },8000);
});

quiz.then(()=>{
    window.alert('You pass')
}, ()=>{
    window.alert('You fail')
});

const Submit = document.getElementById("Submit")
Submit.addEventListener("click", ()=>{
    quiz
})
