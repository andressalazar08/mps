from django.contrib import admin
from .models import Technology, Organization, Channel, Distribution, Product, Forecast  

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Distribution)
class DistributionAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('sku', 'description', 'policy', 'is_active', 'is_plannable')
    search_fields = ('sku', 'description')

@admin.register(Forecast)
class ForecastAdmin(admin.ModelAdmin):
    list_display = ('product', 'period', 'version', 'forecast_value')
    list_filter = ('product', 'period')
    search_fields = ('product_sku',)

# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('sku', 'description', 'lead_time', 'stock', 'is_active', 'is_plannable')
#     search_fields = ('sku', 'description')

# @admin.register(Forecast)
# class ForecastAdmin(admin.ModelAdmin):
#     list_display = ('product', 'month', 'forecast_value')
#     list_filter = ('product', 'month')
#     search_fields = ('product_sku',)
    
# @admin.register(Jobs)
# class JobsAdmin(admin.ModelAdmin):
#     list_display = ('product', 'month', 'jobs_value')
#     list_filter = ('product', 'month')
#     search_fields = ('product_sku',)
