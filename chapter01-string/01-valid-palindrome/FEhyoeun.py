class Solution:
    def isPalindrome(self, s: str) -> bool:
        lower_word = s.lower()  # 소문자로 전부 변경

        # ,랑 : 다 없애고 띄어쓰기 없이 줄글로 붙임
        palindrome_word = ''.join(filter(str.isalnum, lower_word))  # amanaplanacanalpanama

        center_index = floor(len(palindrome_word) / 2)  # 정중앙 값을 내림으로 구함
        first_word = palindrome_word[:center_index]  # 비교를 위한 첫 번째 단어 구함 ex) amanaplana

        if len(palindrome_word) % 2 != 0:
            temp = palindrome_word[
                   center_index + 1:]  # palindrome_word가 홀수면 임시 변수에 center_index+1을 더해서 넣음(시작부터 center_index까지)
        else:
            temp = palindrome_word[
                   center_index:]  # palindrome_word가 짝수면 임시 변수에 center_index까지 넣음(시작부터 center_index-1 까지)

        second_word = temp[::-1]  # 비교를 위한 두 번째 단어 뒤집기
        return True if first_word == second_word else False