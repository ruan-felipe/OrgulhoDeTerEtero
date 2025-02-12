function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")
    
    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link"
    ]
    
    const isEmpty = valuesToCheck.find(function(value){
        
        const checkIfString = typeof event.target[value].value === "string"
        const checkIfIsEmpety = !event.target[value].value.trim()

        if (checkIfString && checkIfIsEmpety){
            return true
        }
    })

    /*for ( let value of valuesToCheck ){
        console.log(event.target[value].value)

    }*/

    if (isEmpty){
        event.preventDefault()
        alert("Preencha todos os campos")
    }
}