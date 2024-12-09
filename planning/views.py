from django.shortcuts import render
from rest_framework import generics
from .models import Technology, Organization, Channel, Distribution, Product, Forecast
from .serializers import TechnologySerializer, OrganizationSerializer, ChannelSerializer, DistributionSerializer, ProductSerializer, ForecastSerializer

class TechnologyListCreateView(generics.ListCreateAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    
    
class OrganizationListCreateView(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
 
 
 
class ChannelListCreateView(generics.ListCreateAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer
    

class DistributionSerializer(generics.ListCreateAPIView):
    queryset = Distribution.objects.all()
    serializer_class = DistributionSerializer 


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ForecastListCreateView(generics.ListCreateAPIView):
    queryset = Forecast.objects.all()
    serializer_class = ForecastSerializer
    
# from .models import Product, CustomerOrder, MasterProductionSchedule
# # from .models import Product, CustomerOrder
# from .serializers import ProductSerializer, CustomerOrderSerializer, MPSSerializer
# # from .serializers import ProductSerializer, CustomerOrderSerializer


# class ProductListCreateView(generics.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class CustomerOrderListCreateView(generics.ListCreateAPIView):
#     queryset = CustomerOrder.objects.all()
#     serializer_class = CustomerOrderSerializer

# class MPSListCreateView(generics.ListCreateAPIView):
#     queryset = MasterProductionSchedule.objects.all()
#     serializer_class = MPSSerializer

# class ProductPartialUpdateView(generics.UpdateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     http_method_names = ['patch']