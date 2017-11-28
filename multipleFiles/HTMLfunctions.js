//this function runs when the HTML slider is moved
function sliderMoved(value){

    newData = updateData(value);
    currentYear = value;
    drawPoints(newData);

};

function radioChange(value){
    sortOrder = value;
    newData = updateData(currentYear);
    drawPoints(newData);
};
