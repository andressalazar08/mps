from django.contrib import admin
from .models import Product, Forecast

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('sku', 'description', 'lead_time', 'stock', 'is_active', 'is_plannable')
    search_fields = ('sku', 'description')

@admin.register(Forecast)
class ForecastAdmin(admin.ModelAdmin):
    list_display = ('product', 'month', 'forecast_value')
    list_filter = ('product', 'month')
    search_fields = ('product__sku',)
