export const subsequence = (x = "",y = "") => {
    if(x == "" || y == ""){
        return undefined
    }

    let i = 0
    let j = 0

    while(i < x.length && j < y.length){
        if(x[i] == y[i]){
            i++
        }
        j++
        
    }

    if(x.length == i){
        return `OK`
    }


    let NOKn = 0
    let prefI = 0
    let prefJ = 0

    for(let k = 0; k < x.length; k++){
        while(prefI <= k && prefJ <= y.length){
            if(x[prefI] == y[prefJ]){
                prefI++
                
            }
            prefJ++
        }
        if(prefI > k ){
            NOKn = k + 1
        }
        else{break}
    }
    return `NOK ${NOKn}`

    
}