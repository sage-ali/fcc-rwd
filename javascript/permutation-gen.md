# Build a Permutation Generator

In this lab, you will build a permutation generator that will take a string and return all possible permutations of the characters in the string. For example, the possible permutations of the string `cat` are `cat`, `cta`, `act`, `atc`, `tac`, and `tca`.

The recursive way of creating permutations of a string works by storing the fixed starting part of the string (prefix), and creating permutations of the rest.

For example, let's consider the word `machine`. The first round of creating permutations would be made fixing the `m` as the prefix of the string, and then creating permutations of the rest of the string, `achine`.

For the rest of the string, permutations continue in the same way. One letter is added to the prefix, maybe the `c`, so the prefix becomes `mc`. Then, each of the permutations of `ahine` is concatenated to the prefix.

This continues until the prefix has all the letters, and the rest of the string is empty, that means one permutation has been created.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `permuteString`.
2. The `permuteString` function should take three parameters: a string, a prefix value and an empty array for storing and returning the results. The prefix value should be a string used to accumulate characters to form a permutation.
3. Inside the function, you should check if the length of the passed string is `0`. If it is, push the current prefix to the results and return the results.
4. Iterate over each character in the input string and for each iteration, remove the current character from the string and call the `permuteString` function recursively with updated arguments to build the remaining permutations.
5. You should return the final results array.
6. You should ensure that the permutations are unique by removing duplicates.

Run the Tests (Ctrl + Enter)

Reset this lesson

Get Help

## Tests

1. You should have a function `permuteString`.

2. You should use recursion in your `permuteString` function.

3. `permuteString("far")` should return `[ "far", "fra", "afr", "arf", "rfa", "raf" ]`.

4. `permuteString("fcc")` should return `[ "fcc", "cfc", "ccf" ]`.

5. `permuteString("p")` should return `[ "p" ]`.

6. `permuteString("")` should return `[""]`.

7. `permuteString("walk")` should return `["walk", "wakl", "wlak", "wlka", "wkla", "wkal", "awlk", "awkl", "alwk", "alkw", "aklw", "akwl", "lawk", "lakw", "lwak", "lwka", "lkaw", "lkwa", "kawl", "kalw", "kwal", "kwla", "klaw", "klwa"]`. \`.

8. `permuteString` should return the correct results.
