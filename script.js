//KREIRANJE NAME HTML ELEMENTS OF CLASSES

function createColumnsName(){
    var segmentsName = [];
    var secondSegmentsName = [];

    for(let i=1; i<=20; i++){
        segmentsName.push("first-col-"+i);
        secondSegmentsName.push("second-col-"+i);
    }

    return {segmentsName, secondSegmentsName};
}

//console.log(createColumnsName().segmentsName[2]);

//CREATE ATTRIBUTS IN HTML CLASS
    //number of columns as first of all declared in CSS file as Classes of HTML element which need to split as value of attribute grid-template-columns

function createColumnsInHTML(numOfColumns){
    for(let i=1; i<=numOfColumns; i++) {
        document.getElementById("firstHalf").insertAdjacentHTML("beforeend", `<div class="first-col-${i}"></div>`);
        document.getElementById("secondHalf").insertAdjacentHTML("beforeend", `<div class="second-col-${i}"></div>`);
    }
}

createColumnsInHTML(20);


//SELECT ALL ATTRIBUTES OF THE CLASS AND MAKING PROPRIET GRID-COLUMN STYLE VALUES

function selectSegments(numOfColumns){
    const segments = [];
    const secondSegments = [];

    for(let i=0; i<numOfColumns; i++){
        segments.push(document.querySelector(`.${createColumnsName().segmentsName[i]}`));
        secondSegments.push(document.querySelector(`.${createColumnsName().secondSegmentsName[i]}`));
    }

    return {segments, secondSegments}
}


function makingGridColumnAttr(numOfColumns) {
    for(let i=0; i<numOfColumns; i++){
        selectSegments(20).segments[i].style.gridColumn = `${i+1}/${i+2}`;
        selectSegments(20).secondSegments[i].style.gridColumn = `${i+1}/${i+2}`;
    }
}


makingGridColumnAttr(20);

//MAKING ANIMATION FOR FIRST_HALF ANF SECOND_HALF

function animationLoop() {
    for(let i=0; i<10; i++){
        selectSegments(10).segments[i].style.animation = `moveToUp 5s ease .0${i}s infinite`;
        selectSegments(10).secondSegments[i].style.animation = `moveToDown 5s ease .0${i}s infinite`;
        
        
    }
    for(let i=10; i<20; i++){
        selectSegments(20).segments[i].style.animation = `moveToUp 5s ease .${i}s infinite`;
        selectSegments(20).secondSegments[i].style.animation = `moveToDown 5s ease .${i}s infinite`;
        
    }
}


animationLoop();


