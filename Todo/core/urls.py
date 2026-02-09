
from django.urls import path

from .views import AddTodo


urlpatterns = [
    path('addtodo/', AddTodo.as_view(), name='add_todo'),
    
]

