from rest_framework.serializers import ModelSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from userauths.models import User
from core.models import Kategory, Dish, RecipeSection, RecipeSectionEntry


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['name'] = user.name
        token['email'] = user.email
        token['username'] = user.username
        
        return token

    
class RegisterUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["name", "email", "password"]
    
    def validate(self, attr):
        return attr
    
    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data["name"],
            email=validated_data["email"],
        )
        
        user.username = user.name
        user.set_password(validated_data["password"])
        user.save()
        
        return user


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
      
        
class KategorySerializer(ModelSerializer):
    class Meta:
        model = Kategory
        fields = ["user", "name", "icon", "is_public", "erstellt", "id"]
        

        
class DishSerializer(ModelSerializer):
    kategory = KategorySerializer()
    
    class Meta:
        model = Dish
        fields = ["name", "img", "description", "calories", "duration", "persons", "is_public", "erstellt", "id", "kategory"]
        
        
    
class RecipeSectionEntrySerializer(ModelSerializer):
    class Meta:
        model = RecipeSectionEntry
        fields = ["key", "value", "id"]
        
        
class RecipeSectionSerializer(ModelSerializer):
    recipesectionentry_set = RecipeSectionEntrySerializer(many=True)
    
    class Meta:
        model = RecipeSection
        fields = ["heading", "id", "recipesectionentry_set"]
    
        
class RecipeSerializer(ModelSerializer):
    kategory = KategorySerializer()
    recipesection_set = RecipeSectionSerializer(many=True)
    
    class Meta:
        model = Dish
        fields = ["name", "img", "description", "calories", "duration", "persons", "is_public", "erstellt", "id", "kategory", "recipesection_set"]