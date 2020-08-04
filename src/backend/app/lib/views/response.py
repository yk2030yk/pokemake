from django.http.response import JsonResponse


class ResponseJson:
    def __init__(self):
        self.result = {}

    def set(self, key: str, value):
        self.result[key] = value

    def set_dict(self, dictionary: dict):
        self.result.update(dictionary)

    def create(self):
        return JsonResponse({"status": 1, "result": self.result}, safe=False)


class ResponseErrorJson(ResponseJson):
    def __init__(self):
        self.errors = []

    def set_error(self, message, detail=None, field=None):
        error = {"message": message}

        if detail:
            error["detail"] = str(detail)

        if field:
            error["field"] = field

        self.errors.append(error)

    def set_form_error(self, form):
        errors = form.errors.get_json_data()
        for field in errors.keys():
            for error in errors[field]:
                self.set_error(error["message"], field=field)

    def create(self, status_code):
        return JsonResponse(
            {"status": 0, "result": {"errors": self.errors}},
            safe=False,
            status=status_code,
        )
