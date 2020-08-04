class MONSTER_TYPE(object):
    type_id = 0
    name = ""
    name_en = ""
    name_kanji = ""

    def __str__(self):
        return self.name

    @classmethod
    def serialize(cls):
        return cls.name_en


class MONSTER_TYPE_NOMAL(MONSTER_TYPE):
    type_id = 1
    name = "ノーマル"
    name_en = "normal"
    name_kanji = "無"


class MONSTER_TYPE_FIRE(MONSTER_TYPE):
    type_id = 2
    name = "ほのお"
    name_en = "fire"
    name_kanji = "炎"


class MONSTER_TYPE_WATER(MONSTER_TYPE):
    type_id = 3
    name = "みず"
    name_en = "water"
    name_kanji = "水"


class MONSTER_TYPE_GRASS(MONSTER_TYPE):
    type_id = 4
    name = "くさ"
    name_en = "grass"
    name_kanji = "草"


class MONSTER_TYPE_ELECTRIC(MONSTER_TYPE):
    type_id = 5
    name = "でんき"
    name_en = "electric"


class MONSTER_TYPE_ICE(MONSTER_TYPE):
    type_id = 6
    name = "こおり"
    name_en = "ice"
    name_kanji = "氷"


class MONSTER_TYPE_FIGHTING(MONSTER_TYPE):
    type_id = 7
    name = "かくとう"
    name_en = "fighting"
    name_kanji = "闘"


class MONSTER_TYPE_POISON(MONSTER_TYPE):
    type_id = 8
    name = "どく"
    name_en = "poison"
    name_kanji = "毒"


class MONSTER_TYPE_GROUND(MONSTER_TYPE):
    type_id = 9
    name = "じめん"
    name_en = "ground"
    name_kanji = "地"


class MONSTER_TYPE_FLYING(MONSTER_TYPE):
    type_id = 10
    name = "ひこう"
    name_en = "flying"
    name_kanji = "飛"


class MONSTER_TYPE_PSYCHIC(MONSTER_TYPE):
    type_id = 11
    name = "エスパー"
    name_en = "psychic"
    name_kanji = "超"


class MONSTER_TYPE_BUG(MONSTER_TYPE):
    type_id = 12
    name = "むし"
    name_en = "bug"
    name_kanji = "虫"


class MONSTER_TYPE_ROCK(MONSTER_TYPE):
    type_id = 13
    name = "いわ"
    name_en = "rock"
    name_kanji = "岩"


class MONSTER_TYPE_GHOST(MONSTER_TYPE):
    type_id = 14
    name = "ゴースト"
    name_en = "ghost"
    name_kanji = "霊"


class MONSTER_TYPE_DRAGON(MONSTER_TYPE):
    type_id = 15
    name = "ドラゴン"
    name_en = "dragon"
    name_kanji = "龍"


class MONSTER_TYPE_DARK(MONSTER_TYPE):
    type_id = 16
    name = "あく"
    name_en = "dark"
    name_kanji = "悪"


class MONSTER_TYPE_STEEL(MONSTER_TYPE):
    type_id = 17
    name = "はがね"
    name_en = "steel"
    name_kanji = "鋼"


class MONSTER_TYPE_FAIRY(MONSTER_TYPE):
    type_id = 18
    name = "フェアリー"
    name_en = "fairy"
    name_kanji = "妖"


monster_types = [
    MONSTER_TYPE,
    MONSTER_TYPE_NOMAL,
    MONSTER_TYPE_FIRE,
    MONSTER_TYPE_WATER,
    MONSTER_TYPE_GRASS,
    MONSTER_TYPE_ELECTRIC,
    MONSTER_TYPE_ICE,
    MONSTER_TYPE_FIGHTING,
    MONSTER_TYPE_POISON,
    MONSTER_TYPE_GROUND,
    MONSTER_TYPE_FLYING,
    MONSTER_TYPE_PSYCHIC,
    MONSTER_TYPE_BUG,
    MONSTER_TYPE_ROCK,
    MONSTER_TYPE_GHOST,
    MONSTER_TYPE_DRAGON,
    MONSTER_TYPE_DARK,
    MONSTER_TYPE_STEEL,
    MONSTER_TYPE_FAIRY,
]

name_to_monster_type = {
    monster_type.name: monster_type for monster_type in monster_types
}


def get_monster_type_with_name(name):
    monster_type = name_to_monster_type.get(name)
    if monster_type is None:
        return MONSTER_TYPE
    return monster_type
