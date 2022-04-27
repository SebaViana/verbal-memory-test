from accounts.models import UserAccount
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'email', 'created', 'updated']
        read_only_field = ['created', 'updated']