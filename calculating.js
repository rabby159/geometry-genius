// get input value 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const givenInputField = parseFloat(inputFieldString);
    return givenInputField;
}

// set name in area calculation dynamic
function addToCalculationEntry(areaType, area){
    
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4', 'mx-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn-info lowercase rounded p-1">Convert to m <sup>2</sup> </button>`;
    calculationEntry.appendChild(p)
}


//triangle calculation 
function triangleArea(target){
    const base = getInputValue('triangle-b');
    const height = getInputValue('triangle-h');

    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;
    }
    
    const calculation = 0.5 * base * height;
    
    addToCalculationEntry('Triangle', calculation);
}
//rectangle calculation 
function rectangleArea(){
    const width = getInputValue('rectangle-w');
    const length = getInputValue('rectangle-i');

    if(isNaN(width) || isNaN(length)){
        alert('Please provide a number');
        return;
    }
    
    const calculation =  width * length;

    addToCalculationEntry('Rectangle', calculation);
}
//parallelogram calculation 
function parallelogramArea(){
    const base = getInputValue('parallelogram-b');
    const height = getInputValue('parallelogram-h');

    if(isNaN(base) || isNaN(height)){
        alert('Please provide a number');
        return;
    }
    
    const calculation = base * height;
    
    addToCalculationEntry('Parallelogram', calculation);
}
//rhombus calculation 
function rhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    if(isNaN(d1) || isNaN(d2)){
        alert('Please provide a number');
        return;
    }
    
    const calculation = 0.5 * d1 * d2;
    
    addToCalculationEntry('Rhombus', calculation);
}
//pentagon calculation 
function pentagonArea(){
    const point = getInputValue('pentagon-p');
    const base = getInputValue('pentagon-b');

    if(isNaN(point) || isNaN(base)){
        alert('Please provide a number');
        return;
    }
    
    const calculation = 0.5 * point * base;
    
    addToCalculationEntry('pentagon', calculation);
}
//ellipse calculation 
function ellipseArea(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    if(isNaN(a) || isNaN(b)){
        alert('Please provide a number');
        return;
    }
    
    const calculation = (3.14 * a * b).toFixed(2);

    
    addToCalculationEntry('Ellipse', calculation);
}