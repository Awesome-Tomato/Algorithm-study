class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        str_list = []
        digit_list = []

        for log in logs:
            if log.split()[1].isdigit():
                digit_list.append(log)
            else:
                str_list.append(log)

        str_list.sort(key=lambda x: (x.split()[1:], x.split()[0]))  # 첫 번째 인자(x.split()[1:])로 오름차순 정렬을 먼저 하고, 두 번째 인자(x.split()[0])로 오름차순 정렬을 함
        return str_list + digit_list
