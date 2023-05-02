from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

# Create your views here.
@api_view(["GET"])
@renderer_classes([JSONRenderer])
def index(request):
    game = request.GET.get('game', 0)
    coltype = request.GET.get('type', 0)
    chapter = request.GET.get('chapter', 0)
    return Response(f"Index - {game if game>0 else ''} - {coltype if coltype>0 else ''} - {chapter if chapter>0 else ''}")

"""
def by_game(request, game):
    return Response("List by game")

def by_type(request, game, coltype):
    return Response("List by game, of certain type")

def by_chapter(request, game, chapter):
    return Response("List by game, at certain part of game")
"""