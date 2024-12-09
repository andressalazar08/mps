from datetime import date
from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

class Organization(models.Model):
    name=models.CharField(max_length=255,null=True, blank=True)
    
    def __str__(self):
        return self.name

class Channel(models.Model):
    name=models.CharField(max_length=255,null=True, blank=True)
    
    def __str__(self):
        return self.name

class Distribution(models.Model):
    name=models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    sku = models.CharField(max_length=50, unique=True, primary_key=True)  # Código único y PK
    description = models.TextField(blank=True, null=True)
    policy = models.PositiveIntegerField() 
    rute = models.CharField(max_length=255, default="")  # Ruta principal del producto
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE)  # Relación con Technology
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, default=1)  # Relación con Organization
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, default=1)  # Canal principal del producto
    distribution = models.ForeignKey(Distribution, on_delete=models.CASCADE, default=1)  # Distribución principal del producto
    is_active = models.BooleanField(default=True)  # Para saber si el producto está activo o no
    is_plannable = models.BooleanField(default=True)  # Para saber si el producto es planificable o no 

    def __str__(self):
        return self.sku


class Forecast(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, to_field='sku', db_column='product_sku', related_name='forecasts')
    period = models.DateField()  # Campo para almacenar el año y el mes del forecast
    version = models.DateField(default=date.today)  # Campo para almacenar el año y el mes de la versión del forecast
    forecast_value = models.DecimalField(max_digits=10, decimal_places=2)  # Valor del pronóstico

    def __str__(self):
        return f"{self.product.sku} - {self.period.strftime('%Y-%m')} (Version: {self.version.strftime('%Y-%m')}): {self.forecast_value}"
# class Product(models.Model):
#     sku = models.CharField( unique=True, primary_key=True)  # Código único y PK
#     description = models.TextField(blank=True, null=True)
#     lead_time = models.PositiveIntegerField()  # Tiempo de fabricación (en días)
#     stock = models.PositiveIntegerField(default=0)  # Inventario inicial
#     rute = models.CharField(max_length=255, default="") # Ruta principal del producto
#     technology = models.ForeignKey('Technology', on_delete=models.CASCADE)  # Relación con Technology
#     organization = models.ForeignKey('Organization', on_delete=models.CASCADE, default=1) # Relación con Organization
#     channel = models.ForeignKey('Channel', on_delete=models.CASCADE, default=1) # Canal principal del producto
#     distribution = models.ForeignKey('Distribution', on_delete=models.CASCADE, default=1) # Distribución principal del producto
#     is_active = models.BooleanField(default=True) # Para saber si el producto está activo o no
#     is_plannable = models.BooleanField(default=True) # Para saber si el producto es planificable o no 

#     def __str__(self):
#         return self.sku
    
# class Jobs(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, to_field='sku', db_column='product_sku', related_name='jobs')
#     month = models.PositiveIntegerField()  # Mes del pronóstico (1-12)
#     jobs_value = models.DecimalField(max_digits=10, decimal_places=2)  # Valor del pronóstico
#     def __str__(self):
#         return f"{self.product.sku} Jobs"
    
# class Forecast(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, to_field='sku', db_column='product_sku', related_name='forecasts')
#     month = models.PositiveIntegerField()  # Mes del pronóstico (1-12)
#     forecast_value = models.DecimalField(max_digits=10, decimal_places=2)  # Valor del pronóstico

#     def __str__(self):
#         return f"{self.product.sku} - Month {self.month}: {self.forecast_value}"

# class CustomerOrder(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, to_field='sku', db_column='product_sku')
#     quantity = models.PositiveIntegerField()
#     due_date = models.DateField()  # Fecha prometida
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Order #{self.id} for {self.product.name}"

    

# class MasterProductionSchedule(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     week = models.PositiveIntegerField()  # Número de semana o fecha
#     quantity = models.PositiveIntegerField()  # Cantidad programada

#     def __str__(self):
#         return f"MPS for {self.product.name} - Week {self.week}"
