from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse('<em>My Second App</em>')

def help_index(request):
    return render(request, 'AppTwo/help.html')

def help_hello_index(request):
    return HttpResponse("<h1>Hello Help</h1>")