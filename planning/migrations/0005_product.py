# Generated by Django 5.1.3 on 2024-12-09 17:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planning', '0004_distribution'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('sku', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('policy', models.PositiveIntegerField()),
                ('rute', models.CharField(default='', max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_plannable', models.BooleanField(default=True)),
                ('channel', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='planning.channel')),
                ('distribution', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='planning.distribution')),
                ('organization', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='planning.organization')),
                ('technology', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='planning.technology')),
            ],
        ),
    ]
