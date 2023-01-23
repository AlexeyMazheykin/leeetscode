// var isIsomorphic = function(s, t) {
//
//     if (s.length !== t.length) return false
//     let arT = s.split('')
//     let arS = t.split('')
//
//     while (arT.length > 0) {
//         let lastT = arT[arT.length-1]
//         let lastS = arS[arT.length-1]
//         let lastIndexS = arS.indexOf(lastS)
//         let lastIndexT = arT.indexOf(lastT)
//         if (lastIndexS !== lastIndexT) return false
//         arT.pop()
//         arS.pop()
//     }
//     return true
// };
//
// let s = "paper"
// let t = "title"
// let res = isIsomorphic(s,t)

const createStringCode = (s) => {
    let map = new Map();
    let id = 0;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], id);
            str = str + id + '.';
            id += 1;
        } else {
            const key = map.get(s[i]);
            str = str + key + '.';
        }
    }
    return str;
}

const isIsomorphic = (s, t) => {
    return createStringCode(s) === createStringCode(t);
};
let s = "paper"
let t = "title"
let res = isIsomorphic(s,t)


res