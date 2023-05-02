from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:game>', views.by_game, name='by_game'),
    path('<int:game>/chapter/<int:chapter>', views.by_chapter, name='by_chapter'),
    path('<int:game>/type/<int:coltype>', views.by_type, name='by_type'),
]