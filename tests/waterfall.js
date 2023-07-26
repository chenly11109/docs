const boxes = document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.style.height = 50 + Math.random()*300 + "px";
})

const gap = 10;

window.onload=function(){
    waterFall();
}

window.onresize = function(){
    waterFall();
}

function waterFall(){
    const boxWidth = boxes[0].offsetWidth;
    const pageWidth=getClient().width;
    const colums = parseInt(pageWidth/(boxWidth+gap));
    const newWidth = pageWidth/colums;

    const boxHeights = [];
    let boxHeightIndex = 0;
    let boxMinHeight = boxes[0].offsetHeight + gap;

    for(let i=0; i<boxes.length; i++){
        if(i<colums){
            boxes[i].style.top = 0;
            boxes[i].style.left = newWidth * i + "px";
    
            const boxHeight = boxes[i].offsetHeight + gap
            boxHeights.push(boxHeight);
            if(boxHeight < boxMinHeight){boxMinHeight = boxHeight;boxHeightIndex = i;};
            
            console.log(boxHeight, boxMinHeight, boxHeightIndex);
        }else{
            boxes[i].style.top = boxMinHeight + 'px';
            boxes[i].style.left = newWidth * boxHeightIndex + 'px';
            

            boxHeights[boxHeightIndex] = boxMinHeight + boxes[i].offsetHeight + gap;

            boxMinHeight = boxHeights[boxHeightIndex];

            for(let j = 0; j< boxHeights.length; j++){
                if(boxHeights[j] < boxMinHeight){
                    boxMinHeight = boxHeights[j];
                    boxHeightIndex = j;
                }
            }
        }
    } 

}


    // clientWidth 处理兼容性
    function getClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
    // scrollTop兼容性处理
    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }