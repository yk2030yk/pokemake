from typing import Optional, List
from app.lib.pokemake.const.monster_type_compatibilities import (
    get_compatibility_with_monster_type,
)
from app.lib.pokemake.const.monster_types import monster_types, MONSTER_TYPE
from app.lib.interface import SerializeObject


class MonsterCompatibility(SerializeObject):
    def __init__(self, type_1, type_2):
        compatibility1 = get_compatibility_with_monster_type(type_1)
        compatibility2 = get_compatibility_with_monster_type(type_2)
        self.compatibility = {
            monster_type: compatibility1.get_damage_rate(monster_type)
            * compatibility2.get_damage_rate(monster_type)
            for monster_type in monster_types
        }

    def serialize(self):
        return {
            key.serialize(): value.serialize()
            for key, value in self.compatibility.items()
        }


class MonsterTypes(SerializeObject):
    attr = ["type_1", "type_2", "compatibility"]

    def __init__(self, monster_types: List[MONSTER_TYPE]):
        if len(monster_types) == 0:
            raise Exception()

        type_1 = monster_types[0]
        type_2 = monster_types[1] if len(monster_types) > 1 else None

        self.type_1 = type_1
        self.type_2 = type_2
        self.compatibility = MonsterCompatibility(type_1, type_2)

    def get_compatibility(self):
        compatibility1 = get_compatibility_with_monster_type(self.type_1)
        compatibility2 = get_compatibility_with_monster_type(self.type_2)

        return {
            monster_type: compatibility1.get_damage_rate(monster_type)
            * compatibility2.get_damage_rate(monster_type)
            for monster_type in monster_types
        }
