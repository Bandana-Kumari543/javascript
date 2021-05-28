// 111111111111111......... 
let obj1 = {name: "bandana" , age: 21 , job: "jsd"};
let obj2={name: "bandana" , age:21 , job: "jsd"};
let hasSameDataObj = function(obj1 , obj2)
 {
    let obj1Keys = Object.keys(obj1);

    if (obj1Keys.length === Object.keys(obj2).length) {
        return obj1Keys.every(key => obj2.hasOwnProperty(key
            )  && obj2[key] === obj1[key]);
    };
    return false
};
console.log(hasSameDataObj(obj1, obj2));
// 22222222222222222............


