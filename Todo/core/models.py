from django.db import models
from django.contrib.auth.models import User

class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    email = models.EmailField()

    def __str__(self):
        return self.name    


class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    #image = models.ImageField(upload_to='todo_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)

    #users = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='owner')
    
    def __str__(self):
        return f"{self.title} - {self.description} - {self.created_at} - {self.updated_at} - {self.completed}"