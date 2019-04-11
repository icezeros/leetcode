var longestCommonPrefix = function(s) {
    var fn = fnTmp => {
        var fnRe = 0;
        switch (fnTmp) {
            case '{':
                fnRe = 1;
                break;
            case '(':
                fnRe = 2;
                break;
            case '[':
                fnRe = 3;
                break;
            case '}':
                fnRe = 11;
                break;
            case ')':
                fnRe = 12;
                break;
            case ']':
                fnRe = 13;
                break;
            default:
                fnRe = 0;
                break;
        }
        return fnRe;
    };
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        // s.forEach((v, k) => {
        let v = s[i];
        console.log('============ v =============');
        console.log(v);
        const tmp = fn(v);
        console.log('============ tmp =============');
        console.log(tmp);
        if (tmp !== 0) {
            console.log('============ stack =============');
            console.log(stack);
            if (tmp < 10) {
                stack.push(tmp);
            } else {
                const out = stack.pop();
                console.log('============ out =============');
                console.log(out);
                console.log('============ v =============');
                console.log(v);
                if (out + 10 !== v) {
                    return false;
                }
            }
        }
    }

    return true;
};

const arr = "[";
const result = longestCommonPrefix(arr);
console.log('============ result =============');
console.log(result);
