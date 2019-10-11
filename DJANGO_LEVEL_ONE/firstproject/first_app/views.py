from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world!")

def first_app_index(request):
    return HttpResponse("<em>First_app</em>")

def hehe(request):
    return HttpResponse("HEHE")