from django.conf.urls import url, include

urlpatterns = [url(r"^v1", include("app.urls.v1"))]
