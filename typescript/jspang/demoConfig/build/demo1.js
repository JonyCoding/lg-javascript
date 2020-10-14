function judgeWho(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
function judgeWhoTwo(animal) {
    if ('skill' in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
//# sourceMappingURL=demo1.js.map