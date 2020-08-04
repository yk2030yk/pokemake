from django.http import HttpResponse
from app.lib.views.response import ResponseErrorJson


class ApiMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_exception(self, request, exception):
        response_error_json = ResponseErrorJson()
        response_error_json.set_error("予期せぬエラーが発生しました。")
        return response_error_json.create(500)
