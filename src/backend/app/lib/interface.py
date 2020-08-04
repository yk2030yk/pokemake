import stringcase


class SerializeObject(object):
    attr = []

    def serialize(self):
        result_dict = {}

        for attr in self.attr:
            value = getattr(self, attr)

            if hasattr(value, "serialize"):
                value = value.serialize()

            key = stringcase.camelcase(attr)
            result_dict[key] = value

        return result_dict
