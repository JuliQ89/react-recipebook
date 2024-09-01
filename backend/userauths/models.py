from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    name = models.CharField(max_length=128, null=True)
    email = models.EmailField(unique=True)
    profile = models.FileField(null=True, blank=True, default="profile-example.jpg", upload_to="user_profiles")
    refresh_token = models.CharField(max_length=128, null=True, blank=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    
    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        if self.name == "" or self.name == None:
            self.name = self.username
        super(User, self).save(*args, **kwargs)