const sub = document.querySelector('#submit-button');

sub.addEventListener('click', () =>{
    // all const/let have to be here to be able to be called in the For loop!!!
    const radios = document.querySelectorAll('[type = "radio"]');
    const result = document.querySelector('#results');
    const textInput = document.querySelector('[type = "text"]');
    let input = textInput.value;
    // for loops through radio selector
    for(const radio of radios)
    // if radio button is selected
        if(radio.checked === true ){
            if(radio.value ==="encode"){
// then grab the selected input and push it through that function and sent it to be rendeder on the selected for end HTML
                result.innerText = encode(input)
                // console.log("if Radio",radio.value)
            } if(radio.value === "translate"){
                result.innerText = translate(input)
                // console.log('inside elseif',input)
                // console.log("hey im:", radio.value)
            } if(radio.value === "madlib"){
                result.innerText = madlib(input)
                // console.log("hey im a", radio.value)
            } if(radio.value === "search"){
                result.innerText = "";
                let objects = search(input);
                for(const obj of objects){
                    // obj.symbol
                    const pTag = document.createElement('p');
                    pTag.innerText = obj.symbol;
                    result.appendChild(pTag)
                    // console.log('Symbol:',obj.symbol);
                }
                // console.log('result:',search(input),)
            }else if(radio.value === "random"){
                let randNum = [0,1,2,3];
                let randoEle = randomElement(randNum)
                if(randoEle === 0){
                    document.getElementById("encode").click()
                    document.getElementById("submit").click()
                }
                if(randoEle === 1){
                    document.getElementById("translate").click()
                    document.getElementById("submit").click()
                }
                if(randoEle === 2){
                    document.getElementById("madlib").click()
                    document.getElementById("submit").click()
                }
                if(randoEle === 3){
                    document.getElementById("search").click()
                    document.getElementById("submit").click()
                }
                console.log("randoize me:",radio.value)
            }
            // console.log('radio:',radio.value)
        }
    // console.log('input:',input)
});

