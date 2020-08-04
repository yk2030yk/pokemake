from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .response import ResponseJson, ResponseErrorJson

HTTP_METHOD_GET = "get"
HTTP_METHOD_POST = "post"
HTTP_METHOD_PUT = "put"
HTTP_METHOD_DELETE = "delete"


class ApiView(View):
    http_method_names = [
        HTTP_METHOD_GET,
        HTTP_METHOD_POST,
        HTTP_METHOD_PUT,
        HTTP_METHOD_DELETE,
    ]

    def __init__(self):
        self.response_json = ResponseJson()
        self.response_error_json = ResponseErrorJson()

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(ApiView, self).dispatch(*args, **kwargs)

    def set(self, key, value):
        self.response_json.set(key, value)

    def set_dict(self, dictionary):
        self.response_json.set_dict(dictionary)

    def set_error(self, message, field=None, detail=None):
        self.response_error_json.set_error(message, field=field, detail=detail)

    def set_form_error(self, form):
        self.response_error_json.set_form_error(form)

    def response(self):
        return self.response_json.create()

    def error_response(self, code=500):
        return self.response_error_json.create(code)

    def get_form_data(self, form):
        return {key: value for key, value in form.cleaned_data.items() if value}
