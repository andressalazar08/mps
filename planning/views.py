from django.shortcuts import render
from rest_framework import generics
from .models import Technology, Organization, Channel, Distribution, Product, Forecast
from .serializers import TechnologySerializer, OrganizationSerializer, ChannelSerializer, DistributionSerializer, ProductSerializer, ForecastSerializer
from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.response import Response


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
    

class ForecastViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


    @action(detail=True, methods=['get'])
    def forecasts(self, request, pk=None):
        product = self.get_object() 
        #Obtiene la instancia del modelo Product correspondiente a la clave primaria (pk) proporcionada en la URL.
        forecasts = Forecast.objects.filter(product=product)
        #Filtra los objetos del modelo Forecast para obtener solo aquellos que están relacionados con el producto específico.
        serializer = ForecastSerializer(forecasts, many=True)
        # Serializa los objetos Forecast obtenidos en el paso anterior. El parámetro many=True indica que se está serializando una lista de objetos.
        return Response(serializer.data)



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