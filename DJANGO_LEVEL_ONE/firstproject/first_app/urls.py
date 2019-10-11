from django.conf.urls import url
from first_app import views

urlpatterns = [
    url('', views.first_app_index, name="index"),
    url('/hehe/', views.hehe, name="hehe")
]