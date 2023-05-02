from django.db import models

# Create your models here.
class Collectable(models.Model):
    name = CharField(
        max_length=12
    )

    game = SmallIntegerField()

    coltype = SmallIntegerField()

    chapter = SmallIntegerField()

    location = CharField(
        max_length=100
    )

    description = TextField()

    picture = FilePathField()
