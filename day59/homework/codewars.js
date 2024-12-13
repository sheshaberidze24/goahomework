//? codewars

function findIt(seq) {
    for (let i of new Set(seq)) {
        if (seq.filter(x => x === i).length % 2 !== 0) {
            return i;
        }
    }
}

console.log(findIt([1, 1, 2, 2, 2])); // 2

//! python version

//  def find_it(seq):
//      for i in set(seq):
//          if seq.count(i) % 2:
//              return i

