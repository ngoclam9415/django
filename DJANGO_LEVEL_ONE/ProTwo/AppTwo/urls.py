from django.conf.urls import url
from AppTwo import views

urlpatterns = [
    url('', views.help_index, name="index")
    # When getin 127.0.0.1/first_app we get inside this. Then Django search for each url in urlpatterns in orders. 
    # If we put '' at first place, for any url with /first_app/... , it will match with '' first then the others /first_app/hehe , ... will have no effect
    # URL format is : /first_app/ + 'hehe' or 'aloha' or ''
]