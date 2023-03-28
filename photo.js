'use strict'

var gQuest = [{ id: 1, opt: ['woman', 'ball'], corretOption: 0 },
{ id: 2, opt: ['elephant', 'love', 'tree'], corretOption: 0 },
{ id: 3, opt: ['dog', 'four'], corretOption: 0 },
{ id: 4, opt: ['bird', 'yellow', 'swan'], corretOption: 2 },
{ id: 5, opt: ['people', 'People jump'], corretOption: 1 }]

var gcurrentQuestion = 0

function onInit() {
    gcurrentQuestion = 0
    render()
}
function render() {
    var strHtml = ''
    var photoHtml = `<img class='myPhoto' src="photos/${gQuest[gcurrentQuestion].id}.jpg" alt="My Photo">`
    var len = gQuest[gcurrentQuestion].opt.length
    for (var i = 0; i < len; i++) {
        strHtml += `<button class='firstBut' onclick="checkQuestion(${i})">${gQuest[gcurrentQuestion].opt[i]}</button>`
    }
    var elphoto=document.querySelector('.bigPhoto')
    elphoto.innerHTML=photoHtml
    var elText=document.querySelector('.buttonsDiv')
    elText.innerHTML=strHtml

}

function checkQuestion(optIdx) {
    if(optIdx===gQuest[gcurrentQuestion].corretOption){
        if(gcurrentQuestion<gQuest.length-1){  ////todo maybe minus 1
          gcurrentQuestion++
          render()
        }else{
          alert('you winner!!!')
          if(confirm('you want to play again?')){
            onInit()
            alert('startttttttt!!!')
          }else{
            alert('ok goodaby, i here wait for you if you will miss')
            onInit()
          }
        }

    }else{
        alert('OOPSSSS!!!! Try agian')
    }


}