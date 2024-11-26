from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    sku = models.CharField(max_length=50, unique=True)  # Código único
    description = models.TextField(blank=True, null=True)
    lead_time = models.PositiveIntegerField()  # Tiempo de fabricación (en días)
    stock = models.PositiveIntegerField(default=0)  # Inventario inicial

    def __str__(self):
        return self.name


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
