// 🧠 Challenge #2: Group Anagrams

// Scenario:
// You’ve been asked to help organize search queries. Your task is to group words that are anagrams of each other—i.e., made from the same letters in any order.

// 🧩 Problem:
// Write a function:
// function groupAnagrams(words) {
//   // your code here
// }

// Input:
// An array of strings like:
// ["listen", "silent", "enlist", "hello", "ohlle", "world"]

// Output:
// A nested array where each subarray contains anagrams:
// [
//   ["listen", "silent", "enlist"],
//   ["hello", "ohlle"],
//   ["world"]
// ]

// 🛠 Constraints:
// - Don’t use any external libraries.
// - Optimize for readability and clarity.
// - Bonus: handle edge cases like ["", "", "a", "a"].

// 💡 Tips:
// - Use a hash map (object) to group.
// - Sorting strings might help you identify anagrams.

function groupAnagrams(words){
    let output = {}
    for(let i=0; i<words.length; i++){
        let temp = Array.from(words[i]).sort().join("");
        if(temp.length === 0 || temp.length === 1){
            continue
            }else if(!(temp in output)){
                output[[temp]]= [words[i]]
            }else{
                output[temp].push(words[i])
            }
    }
    return Object.values(output)
}

console.log(groupAnagrams(["listen", 'cat', "enlist", "hello", 'act', "ohlle", "world", 'a', "", 'tac',"silent"]))