from django.db import models
from userauths.models import User
import uuid

# Create your models here.

class Kategory(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=128)
    icon = models.ImageField(upload_to="kategory_icons", null=True, blank=True)
    is_public = models.BooleanField(null=True, blank=True, default=False)
    erstellt = models.DateTimeField(auto_now_add=True, editable=False)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.is_public:
            self.user = None
        else:
            if self.user is None:
                self.user = kwargs.pop('user', None)
                raise ValueError("Der Benutzer ist nicht definiert")
        super(Kategory, self).save(*args, **kwargs)


class Dish(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=256)
    img = models.ImageField(upload_to='dish_images', null=True, blank=True)
    description = models.TextField()
    calories = models.FloatField(null=True, blank=True, default=0)
    kategory = models.ForeignKey(Kategory, on_delete=models.CASCADE)
    duration = models.FloatField(null=True, blank=True, default=0)
    persons = models.IntegerField(null=True, blank=True, default=1)
    is_public = models.BooleanField(null=True, blank=True, default=False)
    erstellt = models.DateTimeField(auto_now_add=True, editable=False)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.is_public:
            self.user = None
        else:
            if self.user is None:
                self.user = kwargs.pop('user', None)
                raise ValueError("Der Benutzer ist nicht definiert")
        super(Dish, self).save(*args, **kwargs)
    
    
class RecipeSection(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    heading = models.CharField(max_length=502)
    
    def __str__(self):
        return self.heading


class RecipeSectionEntry(models.Model):
    recipe = models.ForeignKey(RecipeSection, on_delete=models.CASCADE)
    key = models.CharField(max_length=128)
    value = models.TextField()
    
    def __str__(self):
        return self.key