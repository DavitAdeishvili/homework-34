function getNames(objectsArray) {
    let namesArray = [];
    for (let i = 0; i < objectsArray.length; i++) {
        namesArray.push(objectsArray[i].name);
    }
    return namesArray;
}