from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

class Organization(models.Model):
    name=models.CharField(max_length=255,null=True, blank=True)
    
    def __str__(self):
        return self.name

class Distribution(models.Model):
    name=models.CharField(max_length=255, null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class Channel(models.Model):
    name=models.CharField(max_length=255,null=True, blank=True)
    
    def __str__(self):
        return self.name

class Product(models.Model):
    sku = models.CharField(max_length=50, unique=True)  # Código único
    description = models.TextField(blank=True, null=True)
    lead_time = models.PositiveIntegerField()  # Tiempo de fabricación (en días)
    stock = models.PositiveIntegerField(default=0)  # Inventario inicial
    rute=models.CharField(max_length=255, default="") # Ruta principal del producto
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE)  # Relación con Technology
    organization=models.ForeignKey(Organization, on_delete=models.CASCADE, default=1) # Relación con Organization
    channel=models.ForeignKey(Channel, on_delete=models.CASCADE, default=1) # Canal principal del producto
    distribution=models.ForeignKey(Distribution, on_delete=models.CASCADE, default=1) # Distribución principal del producto
    is_active=models.BooleanField(default=True) # Para saber si el producto está activo o no
    is_plannable=models.BooleanField(default=True) # Para saber si el producto es planificable o no 
    

    def __str__(self):
        return self.description
    
class Forecast(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='forecasts')
    month = models.PositiveIntegerField()  # Mes del pronóstico (1-12)
    forecast_value = models.DecimalField(max_digits=10, decimal_places=2)  # Valor del pronóstico

    def __str__(self):
        return f"{self.product.sku} - Month {self.month}: {self.forecast_value}"    


class CustomerOrder(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    due_date = models.DateField()  # Fecha prometida
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} for {self.product.name}"

    

class MasterProductionSchedule(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    week = models.PositiveIntegerField()  # Número de semana o fecha
    quantity = models.PositiveIntegerField()  # Cantidad programada

    def __str__(self):
        return f"MPS for {self.product.name} - Week {self.week}"
