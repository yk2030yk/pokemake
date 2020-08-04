from enum import Enum

"""

hp 130

受けられない
max damage 140%
min damage 120%

ぎり乱数で受けられない
max damage 120%
min damage 100%

乱数で受けられる
max damage 110%
min damage 90%

完全に受けられる
max damage 90%
min damage 80%

"""


class DefenceType(Enum):
    STRONG = 1
    WEAK = 2
    VERY_WEAK = 3


def djudge_defence_type(min_damage_per, max_damage_per):
    if max_damage_per <= 100 and min_damage_per <= 100:
        return DefenceType.STRONG
    elif max_damage_per > 100 and min_damage_per <= 100:
        return DefenceType.WEAK
    else:
        return DefenceType.VERY_WEAK
