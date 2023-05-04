from djinnlist.models import Collectible
import csv

def run():
    try:
        with open('djinnlist/djinnlist.csv') as file:
            reader = csv.reader(file)
            reader.__next__() # header row

            Collectible.objects.all().delete()

            for row in reader:
                djinn = Collectible(
                    name=row[0],
                    game=row[1],
                    coltype=row[2],
                    chapter=row[3],
                    location=row[4],
                    description=row[5],
                    picture_url=row[6]
                )

                djinn.save()
                print(djinn)
    except(FileNotFoundException):
        print('Could not open the djinnlist.csv file in the djinnlist folder.')