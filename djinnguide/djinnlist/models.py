from django.db import models

# Create your models here.
class Collectible(models.Model):
    name = models.CharField(
        max_length=20
    )

    game = models.SmallIntegerField()

    coltype = models.SmallIntegerField()

    chapter = models.SmallIntegerField()

    location = models.CharField(
        max_length=100
    )

    description = models.TextField()

    picture_url = models.CharField(
        max_length=100
    )

    def get_picture_url(self):
        return '/assets/' + self.picture_url

    def __str__(self):
        return f"{self.name} ({self.coltype}, {self.chapter}, {self.get_picture_url()}) - {self.game} @ {self.location}: {self.description}"

    def serialize(self):
        return {
            "name": self.name,
            "game": self.game,
            "coltype": self.coltype,
            "chapter": self.chapter,
            "location": self.location,
            "description": self.description,
            "pic_url": self.get_picture_url()
        }
