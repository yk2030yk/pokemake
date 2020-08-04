from django.urls import path
from app.views import v1 as views

urlpatterns = [
    path(r"/pokemonBase", views.PokemonBaseView.as_view()),
    path(r"/pokemon", views.PokemonView.as_view()),
]
