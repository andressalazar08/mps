from rest_framework import serializers
#from .models import Product, CustomerOrder, MasterProductionSchedule
from .models import Product, CustomerOrder,MasterProductionSchedule

class ProductSerializer(serializers.ModelSerializer):
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

