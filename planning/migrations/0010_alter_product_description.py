# Generated by Django 5.1.3 on 2024-12-10 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planning', '0009_alter_product_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
