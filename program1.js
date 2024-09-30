/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    const b={
     ')':'(',
     '}':'{',
     ']':'[',
    };
    for(let i=0;i<s.length;i++){
        let c =s[i];
        if(b[c]){
            let top=stack.length>0?stack.pop():'#';
            if(top!== b[char]) return false;
            else{
                stack.push(char);
            }    
        }
        return stack.length==0;
    }
};

if (isValid(input)) {
    alert("The input is valid.");
} else {
    alert("The input is invalid.");
}
module.exports = { isValid };


