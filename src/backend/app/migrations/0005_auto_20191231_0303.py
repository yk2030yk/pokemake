# Generated by Django 2.2.1 on 2019-12-30 18:03

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0004_auto_20191217_1730")]

    operations = [
        migrations.AddField(
            model_name="pokemon",
            name="abilities",
            field=django.contrib.postgres.fields.jsonb.JSONField(default=1999),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="pokemon",
            name="form",
            field=models.TextField(default=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="pokemon",
            name="is_mega_evolution",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="pokemon",
            name="no",
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="pokemon",
            name="status",
            field=django.contrib.postgres.fields.jsonb.JSONField(default=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="pokemon",
            name="types",
            field=django.contrib.postgres.fields.jsonb.JSONField(default=""),
            preserve_default=False,
        ),
    ]
