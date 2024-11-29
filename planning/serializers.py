from rest_framework import serializers
#from .models import Product, CustomerOrder, MasterProductionSchedule
from .models import Product, CustomerOrder,MasterProductionSchedule, Technology, Organization, Distribution, Channel



class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'
        
class DistributionSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Distribution
        fields = '__all__'

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    technology = serializers.PrimaryKeyRelatedField(queryset=Technology.objects.all())
    organization = serializers.PrimaryKeyRelatedField(queryset=Organization.objects.all())
    distribution = serializers.PrimaryKeyRelatedField(queryset=Distribution.objects.all())
    channel = serializers.PrimaryKeyRelatedField(queryset=Channel.objects.all())

    class Meta:
        model = Product
        fields = '__all__'

class CustomerOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerOrder
        fields = '__all__'

class MPSSerializer(serializers.ModelSerializer):
    class Meta:
        model = MasterProductionSchedule
        fields = '__all__'

