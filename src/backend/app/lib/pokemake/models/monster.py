from typing import Optional, List
from app.lib.pokemake.models.monster_type import MonsterTypes
from app.lib.pokemake.models.monster_ability import MonsterAbilities
from app.lib.pokemake.models.monster_status import MonsterStatus
from app.models import Pokemon
from app.lib.interface import SerializeObject


class Monster(SerializeObject):
    def __init__(
        self,
        no: int,
        name: str,
        types: MonsterTypes,
        abilities: MonsterAbilities,
        status: MonsterStatus,
        is_mega_evolution: bool = False,
        form: str = "",
    ):
        self.no = no
        self.name = name
        self.types = types
        self.abilities = abilities
        self.status = status
        self.is_mega_evolution = is_mega_evolution
        self.form = form

    @property
    def full_name(self):
        form = self.form if self.form != "" else ""
        return f"{self.name}{form}"

    def __str__(self):
        form = self.form if self.form != "" else ""
        return f"{self.no}: {self.name}{form}"

    def build_model(self):
        return Pokemon(
            no=self.no,
            name=self.name,
            form=self.form,
            is_mega_evolution=self.is_mega_evolution,
            types=self.types.serialize(),
            abilities=self.abilities.serialize(),
            status=self.status.serialize(),
        )
