from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    my_dict = {'insert_me' : "Hello I am from first_app/views.py"}
    return render(request, 'first_app/index.html', context=my_dict)

def first_app_index(request):
    return HttpResponse("<em>First_app</em>")

def hehe(request):
    return HttpResponse("HEHE")