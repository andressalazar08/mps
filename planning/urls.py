from django.urls import path, include
from .views import TechnologyListCreateView, OrganizationListCreateView, ChannelListCreateView, DistributionSerializer, ProductListCreateView, ForecastListCreateView, ForecastViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'forecastplanning', ForecastViewSet)

#Recordar que el path es el que se va a usar en el navegador 
#http://127.0.0.1:8000/products/technologies/
urlpatterns = [
    path('technologies/', TechnologyListCreateView.as_view(), name='technology-list'),
    path('organizations/', OrganizationListCreateView.as_view(), name='organization-list'),
    path('channels/', ChannelListCreateView.as_view(), name='channel-list'),
    path('distributions/', DistributionSerializer.as_view(), name='distribution-list'),
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('forecasts/', ForecastListCreateView.as_view(), name='forecast-list'),
    path('', include(router.urls)), #Se incluyen la ruta forecastplanning :http://127.0.0.1:8000/products/forecastplanning/2400026101/forecasts
    # path('orders/', CustomerOrderListCreateView.as_view(), name='order-list'),
    # path('mps/', MPSListCreateView.as_view(), name='mps-list'),
    # path('products/<int:pk>/', ProductPartialUpdateView.as_view(), name='product-partial-update'),
    
]
