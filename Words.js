function words(str) {
    //This code splits a string to array of strings
    var words = str.split('');
    var dict = {};
    //This code loops through the arrays and returns a dictionary
    for(let i = 0; i < words.length; i += 1){
        if(!dict.hasOwnProperty([words[i]])){
            dict[words[i]] = 1;
        }else{
            dict[words[i]] += 1;
        }
    }
    return dict;
}