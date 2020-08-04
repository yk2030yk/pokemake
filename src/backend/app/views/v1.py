from django.db import transaction
from django.http import HttpResponse
from django.http import QueryDict

from app.lib.views.view import ApiView
from app.models import PokemonBase, Pokemon


class PokemonBaseView(ApiView):
    def get(self, request):
        pokemon_base_list = PokemonBase.objects.all()
        self.set("pokemonBaseList", [p.serialize() for p in pokemon_base_list])
        return self.response()


class PokemonView(ApiView):
    def get(self, request):
        pokemon_list = Pokemon.objects.all()
        self.set("pokemonList", [p.serialize() for p in pokemon_list])
        return self.response()
