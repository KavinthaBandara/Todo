#Django
from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponse

#DRF
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import DestroyAPIView

#custom serializers
from .serializers import TodoSerializer as serTodo

#custom models
from .models import TodoItem


# Create your views here.
def home(request):
    nav = {
        'home',
        'about',
        'contact',
    }
    return render(request, 'core/home.html', {'nav': nav})



    #def AddTodo(request):
class AddTodo(APIView):
        def get(self, request):
            items = TodoItem.objects.all()
            serializer = serTodo(items, many=True)
            return Response({'status': 'Bon', 'data': serializer.data}, status=status.HTTP_200_OK)

        def post(self, request):
            serializer = serTodo(data=request.data)
            if serializer.is_valid():
                try:
                    serializer.save()
                    return Response({'status': 'Bon', 'data': serializer.data}, status=status.HTTP_201_CREATED)
                except Exception as e:
                    print(e)
                    return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({'status': 'error', 'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            



class ViewTodo(APIView):
    def get(self, request):
        todo = TodoItem.objects.all()
        serializer = serTodo(todo, many=True)
        return Response({'status': 'bon', 'data': serializer.data}, status=status.HTTP_200_OK)





class TodoDestroyAPIView(DestroyAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = serTodo