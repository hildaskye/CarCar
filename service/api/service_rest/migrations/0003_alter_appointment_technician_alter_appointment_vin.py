# Generated by Django 4.0.3 on 2023-04-28 02:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_appointment_options_alter_automobilevo_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='technician',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technician', to='service_rest.technician'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointment', to='service_rest.automobilevo'),
        ),
    ]