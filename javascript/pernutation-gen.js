let counter = 0;
function permuteString(string, pre = '', result = []) {
  if (string.length === 0) {
    result.push(pre);
    return result;
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const text = string.slice(0, i) + string.slice(i + 1);
    result = permuteString(text, pre + char, result);
  }
  return result;
}

console.log(permuteString('far'));
