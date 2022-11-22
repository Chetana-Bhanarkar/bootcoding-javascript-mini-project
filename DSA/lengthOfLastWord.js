// const string = "luffy is still joyboy";

const lengthOfLastWord = function(s) {
    
    let str = s.trim().split(' ');

   let str1 = str[str.length-1];
   console.log(str1);
   let split = str1.split('');
   console.log(split);
   console.log(split.length);

};

lengthOfLastWord("   fly me   to   the moon  ");