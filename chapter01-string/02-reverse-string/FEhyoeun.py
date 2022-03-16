class Solution:
    def reverseString(self, s: List[str]) -> None:
        reversed_word = ''.join(s[::-1])

        for i in reversed_word:
            s.append(i)
            s.pop(0)