from django.db import models

# Create your models here.
class Collectable(models.Model):
    name = models.CharField(
        max_length=12
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
        return '/static/' + self.picture_url
