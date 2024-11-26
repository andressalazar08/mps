from django.urls import path
from .views import ProductListCreateView, CustomerOrderListCreateView, MPSListCreateView, ProductPartialUpdateView
# from .views import ProductListCreateView, CustomerOrderListCreateView

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('orders/', CustomerOrderListCreateView.as_view(), name='order-list'),
    path('mps/', MPSListCreateView.as_view(), name='mps-list'),
    path('products/<int:pk>/', ProductPartialUpdateView.as_view(), name='product-partial-update'),
    
]
