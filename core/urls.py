from django.contrib import admin
from core import views
from django.urls import path,include

urlpatterns = [
    path('',views.index,name='home'),
   

]