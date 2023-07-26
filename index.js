// Code your solution in this file!

function distanceFromHqInBlocks (location) {
    let distanceInBlocks;
    if (location > 42) {
        distanceInBlocks = location - 42;
    }
    else {
        distanceInBlocks = 42 - location;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet (location) {
    let distanceInFeet;
    if (location > 42) {
        distanceInFeet = (location - 42) * 264;
    }
    else {
        distanceInFeet = (42 - location) * 264;
    }
    return distanceInFeet;
}

function distanceTravelledInFeet(start, finish) {
    let distanceCoveredInFeet;
    if (start < finish) {
        distanceCoveredInFeet = (finish - start) * 264;
    }
    else {
        distanceCoveredInFeet = (start - finish) * 264;
    }
    return distanceCoveredInFeet;
}

function calculatesFarePrice (start, finish) {
    let distanceInFeet = distanceTravelledInFeet (start, finish);
    if (distanceInFeet <= 400) {
        return 0;
    }
    if (400 < distanceInFeet && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }
    if (2000 < distanceInFeet && distanceInFeet < 2500) {
        return 25;
    }
    if (distanceInFeet > 2500) {
        return "cannot travel that far";
    }
}