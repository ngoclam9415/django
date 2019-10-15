from django.urls import path
from django.conf.urls import url
from AppTwo import views

urlpatterns = [
    path('', views.help_index, name="index"),
    path('hello', views.help_hello_index, name='hello'),
    # When getin 127.0.0.1/first_app we get inside this. Then Django search for each url in urlpatterns in orders. 
    # If we put '' at first place, for any url with /first_app/... , it will match with '' first then the others /first_app/hehe , ... will have no effect
    # URL format is : /first_app/ + 'hehe' or 'aloha' or ''
]