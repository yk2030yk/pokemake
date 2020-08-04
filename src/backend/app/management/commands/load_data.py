from django.core.management.base import BaseCommand
from app.lib.pokemake.loader.json_loader import load
from app.models import Pokemon


class Command(BaseCommand):
    def handle(self, *args, **options):
        load_dataset = load()

        Pokemon.objects.all().delete()
        Pokemon.objects.bulk_create([data.build_model() for data in load_dataset])

        pokemons = Pokemon.objects.all()
        for pokemon in pokemons:
            print(pokemon.name)
