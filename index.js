function script(students) {
    let currentGroup = 0;
    let container = [[]];
    while(students.length > 0) {
        let random = Math.floor(Math.random() * students.length);
        if(container[currentGroup].length < 4) {
            container[currentGroup].push(students[random]);
        }else {
            ++currentGroup;
            container[currentGroup] = [];
            container[currentGroup].push(students[random]);
        }
        students.splice(random, 1);
        // console.log('existing students array===========>', students);
        // console.log('randomly assigned groups==========>', container);
    }
    return container;
}