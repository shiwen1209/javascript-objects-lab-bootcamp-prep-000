var recipes={salad:"Arugula", dinner:"duck", breakfast:"beans"}
function updateObjectWithKeyAndValue(object,key,value){return Object.assign({},object,{[`${key}`]:`${value}`})}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){object[key]=value;return (object)}