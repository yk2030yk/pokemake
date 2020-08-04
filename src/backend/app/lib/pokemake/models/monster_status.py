from typing import Optional, List
from app.lib.pokemake.calcurator.status import (
    calculate_actual_value_hp,
    calculate_actual_value,
)
from app.lib.pokemake.const.status import (
    INDIVIDUAL_VALUE_MAX,
    EFFORT_VALUE_MIN,
    RATE_BATTLE_LEVEL,
)
from app.lib.interface import SerializeObject


class StatusValue(SerializeObject):
    attr = ["base_value", "level", "individual_value", "effort_value", "actual_value"]

    def __init__(
        self,
        base_value: int,
        level: int = RATE_BATTLE_LEVEL,
        individual_value: int = INDIVIDUAL_VALUE_MAX,
        effort_value: int = EFFORT_VALUE_MIN,
    ):
        self.base_value = base_value
        self.level = level
        self.individual_value = individual_value
        self.effort_value = effort_value
        self.actual_value = calculate_actual_value(
            base_value, level, individual_value, effort_value
        )


class Hp(StatusValue):
    def __init__(
        self,
        base_value: int,
        level: int = RATE_BATTLE_LEVEL,
        individual_value: int = INDIVIDUAL_VALUE_MAX,
        effort_value: int = EFFORT_VALUE_MIN,
    ):
        super().__init__(base_value, level, individual_value, effort_value)
        self.actual_value = calculate_actual_value_hp(
            base_value, 50, individual_value, effort_value
        )


class Attack(StatusValue):
    pass


class Defence(StatusValue):
    pass


class SpAttack(StatusValue):
    pass


class SpDefence(StatusValue):
    pass


class Speed(StatusValue):
    pass


class MonsterStatus(SerializeObject):
    attr = ["hp", "attack", "defence", "sp_attack", "sp_defence", "speed"]

    def __init__(
        self,
        hp: int,
        attack: int,
        defence: int,
        sp_attack: int,
        sp_defence: int,
        speed: int,
    ):
        self.hp = Hp(hp)
        self.attack = Attack(attack)
        self.defence = Defence(defence)
        self.sp_attack = SpAttack(sp_attack)
        self.sp_defence = SpDefence(sp_defence)
        self.speed = Speed(speed)
