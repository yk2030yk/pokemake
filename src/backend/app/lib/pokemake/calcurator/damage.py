def calculate_damage(
    attack_monster_lv: int,
    attack_monster_attack_value: int,
    attack_monster_skill_power: int,
    defence_monster_defence_value: int,
    type_match: bool = False,
    type_damage_rate: int = 1,
    random_number: int = 1,
) -> int:
    p1 = int(attack_monster_lv * 2 / 5 + 2)
    p2 = (
        attack_monster_skill_power
        * attack_monster_attack_value
        / defence_monster_defence_value
    )
    r = ((p1 * p2) / 50 + 2) * type_damage_rate * random_number

    if type_match:
        r *= 1.5

    return int(r)
