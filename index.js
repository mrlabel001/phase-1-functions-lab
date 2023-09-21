function distanceFromHqInBlocks(pickupDistance){
    return Math.abs(pickupDistance-42);
}
function distanceFromHqInFeet(pickupDistance){
    const distanceFromHqInFeet=264;  
return (Math.abs(pickupDistance-42) * 264);
}

function distanceTravelledInFeet(start, end){ 
    return Math.abs(start-end)*264;
   }


function calculatesFarePrice(start, end){
    const oneFoot=264;
    const totalDistance=Math.abs ((end-start)*oneFoot);
    if (totalDistance<=400){
        return 0;
}
else if (totalDistance>400 && totalDistance<=2000){
    return 2.56 }
else if (totalDistance > 2000 && totalDistance<= 2500){
    return 25
}

else return ("cannot travel that far")
}