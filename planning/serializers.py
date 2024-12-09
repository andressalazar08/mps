from rest_framework import serializers
from .models import Technology, Organization, Channel, Distribution, Product, Forecast


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'
        

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = '__all__'

class DistributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distribution
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    technology = serializers.PrimaryKeyRelatedField(queryset=Technology.objects.all())
    organization = serializers.PrimaryKeyRelatedField(queryset=Organization.objects.all())
    distribution = serializers.PrimaryKeyRelatedField(queryset=Distribution.objects.all())
    channel = serializers.PrimaryKeyRelatedField(queryset=Channel.objects.all())
    
    technology_name = serializers.SerializerMethodField()
    organization_name = serializers.SerializerMethodField()
    distribution_name = serializers.SerializerMethodField()
    channel_name = serializers.SerializerMethodField()


    class Meta:
        model = Product
        fields = '__all__'
        
    def get_technology_name(self, obj):
        return obj.technology.name

    def get_organization_name(self, obj):
        return obj.organization.name

    def get_distribution_name(self, obj):
        return obj.distribution.name

    def get_channel_name(self, obj):
        return obj.channel.name


class ForecastSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

    class Meta:
        model = Forecast
        fields = '__all__'

# #from .models import Product, CustomerOrder, MasterProductionSchedule
# from .models import Product, CustomerOrder,MasterProductionSchedule, Technology, Organization, Distribution, Channel, Forecast, Jobs





# class TechnologySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Technology
#         fields = '__all__'

# class OrganizationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Organization
#         fields = '__all__'
        
# class DistributionSerializer(serializers.ModelSerializer): 
#     class Meta:
#         model = Distribution
#         fields = '__all__'

# class ChannelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Channel
#         fields = '__all__'

# class ProductSerializer(serializers.ModelSerializer):
#     technology = serializers.PrimaryKeyRelatedField(queryset=Technology.objects.all())
#     organization = serializers.PrimaryKeyRelatedField(queryset=Organization.objects.all())
#     distribution = serializers.PrimaryKeyRelatedField(queryset=Distribution.objects.all())
#     channel = serializers.PrimaryKeyRelatedField(queryset=Channel.objects.all())
    
#     technology_name = serializers.SerializerMethodField()
#     organization_name = serializers.SerializerMethodField()
#     distribution_name = serializers.SerializerMethodField()
#     channel_name = serializers.SerializerMethodField()


#     class Meta:
#         model = Product
#         fields = '__all__'
        
#     def get_technology_name(self, obj):
#         return obj.technology.name

#     def get_organization_name(self, obj):
#         return obj.organization.name

#     def get_distribution_name(self, obj):
#         return obj.distribution.name

#     def get_channel_name(self, obj):
#         return obj.channel.name

# class CustomerOrderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomerOrder
#         fields = '__all__'

# class MPSSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MasterProductionSchedule
#         fields = '__all__'

# class ForecastSerializer(serializers.ModelSerializer):
#     product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

#     class Meta:
#         model = Forecast
#         fields = '__all__'

# class JobsSerializer(serializers.ModelSerializer):
#     product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

#     class Meta:
#         model = Jobs
#         fields = '__all__'