from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, name, password=None):
        if not email:
            raise ValueError('User does not have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, name=name)

        user.set_password(password)
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)

    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'name']