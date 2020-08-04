from typing import Optional, List
from app.lib.interface import SerializeObject


class MonsterAbility(SerializeObject):
    attr = ["name", "is_hidden"]

    def __init__(self, name: str, is_hidden: bool = False):
        self.name = name
        self.is_hidden = is_hidden


class MonsterAbilities(object):
    def __init__(self, abilities: List[MonsterAbility]):
        self.abilities = abilities

    def serialize(self):
        return [a.serialize() for a in self.abilities]
