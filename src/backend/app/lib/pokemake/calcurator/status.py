def calculate_actual_value_hp(
    status_value: int, lv: int, individual_value: int, effort_value: int
) -> int:
    p1 = status_value * 2 + individual_value + effort_value / 4
    p2 = lv / 100
    p3 = lv + 10
    r = p1 * p2 + p3
    return int(r)


def calculate_actual_value(
    status_value: int,
    lv: int,
    individual_value: int,
    effort_value: int,
    personality_correction: float = 1.0,
) -> int:
    p1 = status_value * 2 + individual_value + effort_value / 4
    p2 = lv / 100
    r = (p1 * p2 + 5) * personality_correction
    return int(r)
