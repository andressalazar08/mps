from django.shortcuts import render

from rest_framework import generics
from .models import Product, CustomerOrder, MasterProductionSchedule
# from .models import Product, CustomerOrder
from .serializers import ProductSerializer, CustomerOrderSerializer, MPSSerializer
# from .serializers import ProductSerializer, CustomerOrderSerializer


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CustomerOrderListCreateView(generics.ListCreateAPIView):
    queryset = CustomerOrder.objects.all()
    serializer_class = CustomerOrderSerializer

class MPSListCreateView(generics.ListCreateAPIView):
    queryset = MasterProductionSchedule.objects.all()
    serializer_class = MPSSerializer

class ProductPartialUpdateView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['patch']