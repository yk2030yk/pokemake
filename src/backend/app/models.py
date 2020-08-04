from django.db import models
from django.contrib.postgres.fields import JSONField
import stringcase


class BaseModel(models.Model):
    def serialize(self, deep=False):
        return {
            stringcase.camelcase(field.name): getattr(self, field.name)
            for field in self._meta.fields
            if not isinstance(field, models.ForeignKey)
        }

    class Meta:
        abstract = True


class Pokemon(BaseModel):
    no = models.TextField()
    name = models.TextField()
    form = models.TextField()
    is_mega_evolution = models.BooleanField(default=False)
    types = JSONField()
    abilities = JSONField()
    status = JSONField()

    class Meta:
        db_table = "app_pokemon"
        ordering = ["id"]


class PokemonBase(BaseModel):
    no = models.TextField()
    name = models.TextField()
    form = models.TextField()
    is_mega_evolution = models.BooleanField(default=False)
    evolutions = JSONField()
    types = JSONField()
    abilities = JSONField()
    hidden_abilities = JSONField()
    stats = JSONField()

    class Meta:
        db_table = "app_pokemon_base"
        ordering = ["id"]
