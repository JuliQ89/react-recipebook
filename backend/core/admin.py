from django.contrib import admin
from .models import Kategory, Dish, RecipeSection, RecipeSectionEntry

# Register your models here.
class DishAdmin(admin.ModelAdmin):
    list_display = ["name", "duration"]

admin.site.register(Kategory)
admin.site.register(Dish)
admin.site.register(RecipeSection)
admin.site.register(RecipeSectionEntry)