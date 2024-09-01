from django.shortcuts import render
from .serializers import UserSerializer, RegisterUserSerializer, MyTokenObtainPairSerializer, KategorySerializer, DishSerializer, RecipeSerializer
from rest_framework.response import Response
from rest_framework import viewsets

from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from userauths.models import User
from core.models import Kategory, Dish

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)
    
    
class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterUserSerializer
    
    
class KategoryView(viewsets.ModelViewSet):
    queryset = Kategory.objects.all()
    serializer_class = KategorySerializer
    
    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = KategorySerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        kategory = Kategory.objects.get(id=pk)
        serializer = KategorySerializer(kategory)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        kategory = Kategory.objects.get(id=pk)
        if kategory:
            kategory.delete()
            return Response(status=status.HTTP_200_OK)
    
    
class DishView(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    
    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = DishSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        dish = Dish.objects.get(id=pk)
        serializer = RecipeSerializer(dish)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        dish = Dish.objects.get(id=pk)
        if dish:
            dish.delete()
            return Response(status=status.HTTP_200_OK)