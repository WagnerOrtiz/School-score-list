 let inName = document.querySelector('input#name')
let score1 = document.querySelector('input#score1')
let score2 = document.querySelector('input#score2')
let final = document.querySelector('input#final')
let btn = document.querySelector('input#button')
let result = document.querySelector('input#result')
var list = []

score2.addEventListener ('keypress', (e) => { 
    if(e.key==="Enter"){
        score1.value < 0 || score1.value =="" || score2.value < 0 || score2.value =="" || inName.value == "" ? alert("Insert a valid name, score 1 or score 2") : creatingStudent(inName.value, Number(score1.value), Number(score2.value)) 
    }
})

btn.addEventListener('click', () => { 
    score1.value < 0 || score1.value =="" || score2.value < 0 || score2.value =="" || inName.value == "" ? alert("Insert a valid name, score 1 or score 2") : creatingStudent(inName.value, Number(score1.value), Number(score2.value))
})


function creatingStudent(n,s1,s2){
    final.value = (s1+s2) / 2

    if(final.value >= 7){
        result.value = `Approved!`
    }
    else if (final.value > 5){
        result.value = `Retry!`
    }
    else{
        result.value = `Reproved!`
    }

    n = new Student(n,s1,s2,Number(final.value),result.value)
    list.push(n)
    console.log (list)
    inName.value = null
    score1.value = null
    score2.value = null
}


function Student(n,s1,s2,f,r){
    this.Name = n.padEnd(35, " ")
    this.Score1 = s1
    this.Score2 = s2
    this.Final = f
    this.Result = r
}
