from django.conf.urls import url
from first_app import views

urlpatterns = [
    url('aloha', views.first_app_index, name="first_app_index"),
    url('hehe', views.hehe, name="hehe"),
    url('', views.index, name="index")
    # When getin 127.0.0.1/first_app we get inside this. Then Django search for each url in urlpatterns in orders. 
    # If we put '' at first place, for any url with /first_app/... , it will match with '' first then the others /first_app/hehe , ... will have no effect
    # URL format is : /first_app/ + 'hehe' or 'aloha' or ''
]