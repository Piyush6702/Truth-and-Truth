//get textarea and tags div
let textarea=document.getElementById('choices');
let tagsEl=document.getElementById('tags')

textarea.focus()

// console.log(tagsel)


//add evenlistner of keyup in textarea
textarea.addEventListener('keyup',(e)=>{
    //add choice to tag
    addchoicetag(e.target.value)

    //when user hit enter generate random choice for him
    if(e.key==='Enter'){
        setTimeout(()=>{
            //delete all the value of textarea
            e.target.value=''
        },10)

        //generating random choice
        randomchoice()
    }

    
})


// adding all choices as tag
function addchoicetag(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    //creating a empty tags div everytime 
    tagsEl.innerHTML = ''

    //looping through each tag seperated by comma
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
   
    
}


//Main Function to get the last choice as output
function randomchoice() {
    //just to limit the number of iteration
    let times=30
   
    //in specfice interval it will iterate through random tag
    let interval=setInterval(() => {
        //get a rnadom tag
       let rtag=randomtag()

       //highlight that random tag
       Highlighttag(rtag)

       //After 200ms Unhighlight tht random tag
       setTimeout(() => {
           Unhighlighttag(rtag)
       }, 100);

    },100);

    //Set timeout to end the interval after specified time
    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            //generate last Random tag as choice
            const lasttag=randomtag()
            Highlighttag(lasttag)

            //put that tag as output
            let schoicebox=document.getElementById('schoice')
            let choiceintro=document.getElementById('choice-intro')
            choiceintro.innerText='Not so Lucky Player :'
            schoicebox.classList.add('schoice1')
            schoicebox.innerText=lasttag.innerText

        }, 100);
    }, times*100);
}


//generating Random tag here
function randomtag() {
    let choices=document.querySelectorAll('.tag')
    return choices[Math.floor(Math.random()*choices.length)];
}

function Highlighttag(rtag) {
    rtag.classList.add('highlight')
}

function Unhighlighttag(rtag) {
    rtag.classList.remove('highlight')
}