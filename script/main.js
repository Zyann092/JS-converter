let weightFirstOptions = document.querySelector("#weightFirstOptions")
let weightSecondOptions = document.querySelector("#weightSecondOptions")
let weightInput = document.querySelector("#weightInput")
let weightDisplay = document.querySelector("#weightDisplay")


function weightConverter() {
    let firstOptionsValue = weightFirstOptions.value
    let secondOptionsValue = weightSecondOptions.value

    if (firstOptionsValue == "kilo" && secondOptionsValue == "pound") {
        let ans = Number(weightInput.value) * 2.2 
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "kilo" && secondOptionsValue == "ton") {
        let ans = Number(weightInput.value) * 0.001
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "kilo" && secondOptionsValue == "kilo") {
        alert ("Cannot be converted.")
    }


    if (firstOptionsValue == "pound" && secondOptionsValue == "kilo") {
        let ans = Number(weightInput.value) * 0.5
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "pound" && secondOptionsValue == "ton") {
        let ans = Number(weightInput.value) * 0.0005
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "pound" && secondOptionsValue == "pound") {
        alert ("Cannot be converted.")
    }


    if (firstOptionsValue == "ton" && secondOptionsValue == "kilo") {
        let ans = Number(weightInput.value) * 1000
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "ton" && secondOptionsValue == "pound") {
        let ans = Number(weightInput.value) * 2204.62
        weightDisplay.innerHTML = ans
    } else if (firstOptionsValue == "ton" && secondOptionsValue == "ton") {
        alert ("Cannot be converted.")
    }
}