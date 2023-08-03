function palindrome(str) {
    const deleteNum = (num)=>{
        return num.replace(/"[^"]*"|\d+/g, '');
    }
    const cleanedStr = deleteNum(str).toLowerCase().replace(/[\s.,!?"/-]/g, "");
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(palindrome('Он дивен, палиндром! И ни морд, ни лап не видно...'));
//это просто ад какой-то