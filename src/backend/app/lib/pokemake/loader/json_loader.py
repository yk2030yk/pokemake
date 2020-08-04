import json
from typing import Optional
from app.lib.pokemake.models.monster import Monster
from app.lib.pokemake.models.monster_type import MonsterTypes
from app.lib.pokemake.models.monster_ability import MonsterAbility, MonsterAbilities
from app.lib.pokemake.models.monster_status import MonsterStatus, StatusValue
from app.lib.pokemake.const.monster_types import get_monster_type_with_name


class BuildError(Exception):
    pass


def build_monster_types(type_names: list) -> MonsterTypes:
    if not isinstance(type_names, list):
        raise BuildError("types_names json should be list object.")

    if len(type_names) == 0:
        raise BuildError("types_names json should have one object at least.")

    types = []
    for name in type_names:
        monster_type = get_monster_type_with_name(name)
        types.append(monster_type)

    return MonsterTypes(types)


def build_monster_abilities(
    abilities_list: list, hidden_abilities_list: Optional[list] = []
):
    if not isinstance(abilities_list, list):
        raise BuildError("abilities_list json should be list object.")

    if len(abilities_list) == 0:
        raise BuildError("abilities_list json should have one object at least.")

    abilities = []
    for a in abilities_list:
        abilities.append(MonsterAbility(a))

    for a in hidden_abilities_list:
        abilities.append(MonsterAbility(a, is_hidden=True))

    return MonsterAbilities(abilities)


def build_monster(data):
    if not isinstance(data, dict):
        raise BuildError("monster data should be dict object")

    no = data.get("no")
    name = data.get("name")
    types = build_monster_types(data.get("types"))
    abilities = build_monster_abilities(
        data.get("abilities"), data.get("hiddenAbilities")
    )

    stats = data.get("stats")
    status = MonsterStatus(
        stats.get("hp"),
        stats.get("attack"),
        stats.get("defence"),
        stats.get("spAttack"),
        stats.get("spDefence"),
        stats.get("speed"),
    )

    is_mega_evolution = data.get("isMegaEvolution", False)
    form = data.get("form", "")

    return Monster(
        no,
        name,
        types,
        abilities,
        status,
        is_mega_evolution=is_mega_evolution,
        form=form,
    )


def build_monsters(dataset):
    if not isinstance(dataset, list):
        raise Exception("monster dataset should be list object")

    monsters = []

    for data in dataset:
        try:
            monster = build_monster(data)
            monsters.append(monster)
        except BuildError:
            continue

    return monsters


json_path = "/code/app/data/pokemon_data.json"


def load_dataset(json_path: str = json_path):
    with open(json_path, "r") as f:
        return json.loads(f.read())


def load():
    dataset = load_dataset()
    return build_monsters(dataset)
