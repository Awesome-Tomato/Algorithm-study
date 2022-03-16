from collections import Counter

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        reg = r'[^\w]' # 영문자 대소문자, 숫자만
        processed_banned = [re.sub(reg, ' ', ban).lower() for ban in banned] # re.sub(pattern, repl, string, count, flags)
        processed_word = re.sub(reg, ' ', paragraph).lower()
        processed_dict = Counter(processed_word.split())

        if len(processed_banned) > 0:
            for banned_word in processed_banned:
                for key in processed_dict.keys():
                    if key == banned_word: processed_dict[key] = 0
            return processed_dict.most_common()[0][0]
        else: return processed_dict.most_common()[0][0]
