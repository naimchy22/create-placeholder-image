let imageSize = document.getElementById("selectImageSize");
let allInputs = document.querySelectorAll("input");
let textArea = document.getElementById("urlPath");
let myImg = document.getElementById("placeholder-image");

const removeHastag = (str) => {
    return str.replace("#", "")
}

const removeSpace = (str) => {
    return str.split(" ").join("+");
}



const creatImage = () => {
    let urlObj = {
        imgSize : imageSize.value,
        imgTxt : removeSpace(allInputs[0].value),
        bgColor : removeHastag(allInputs[1].value),
        txtColor : removeHastag(allInputs[2].value)
    }

    const {imgSize, imgTxt, bgColor, txtColor} = urlObj;

    let urlPath = `https://via.placeholder.com/${imgSize}/${bgColor}/${txtColor}?text=${imgTxt}`;
   
    myImg.src = urlPath;

    textArea.value = urlPath;

    textArea.focus();
    
    textArea.select();

    // copy placeholder image url 
    navigator.clipboard.writeText(textArea.value)
    .then(() => {
        console.log("text copied to clipboard")
    })
    .catch((err) => {
        console.log(`Error copying text :  ${err}`)
    })
} 


imageSize.addEventListener("change", creatImage)

allInputs.forEach(input => input.addEventListener("change", creatImage));
