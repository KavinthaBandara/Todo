
from django.urls import path

from .views import AddTodo, TodoDestroyAPIView, ViewTodo


urlpatterns = [
    path('addtodo/', AddTodo.as_view(), name='add_todo'),
    path('viewtodo/', ViewTodo.as_view(), name='View_todo'),
    path('<int: pk>/delete/', TodoDestroyAPIView.as_view(), name='todo-delete'),


]

