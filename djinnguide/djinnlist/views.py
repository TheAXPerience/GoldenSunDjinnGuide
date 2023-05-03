from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from .models import Collectable

# Create your views here.
@api_view(["GET"])
@renderer_classes([JSONRenderer])
def index(request):
    game = int(request.GET.get('game', 0))
    coltype = int(request.GET.get('type', 0))
    chapter = int(request.GET.get('chapter', 0))

    # begin query on Collectable model

    # filter by game
    if game > 0:
        pass

    # filter by coltype (type)
    if coltype > 0:
        pass

    # filter by chapter
    if chapter > 0:
        pass

    ans = []

    # go through query and serialize to ans

    ret = Response(ans)

    # may need CORS header?

    return Response(f"Index - {game if game>0 else ''} - {coltype if coltype>0 else ''} - {chapter if chapter>0 else ''}")

"""
def by_game(request, game):
    return Response("List by game")

def by_type(request, game, coltype):
    return Response("List by game, of certain type")

def by_chapter(request, game, chapter):
    return Response("List by game, at certain part of game")
"""