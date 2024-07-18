from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, default="")
    middle_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")
    contact_number = models.CharField(max_length=15, default="")
    email = models.CharField(max_length=100, default="")
    address = models.CharField(max_length=100, default="")
    sex = models.CharField(max_length=100, default="")
    birthday = models.CharField(max_length=100, default="")
    place_of_birth = models.CharField(max_length=100, default="")   
    citizenship = models.CharField(max_length=100, default="")
    blood_type = models.CharField(max_length=100, default="")
    religion = models.CharField(max_length=100, default="")
    civil_status = models.CharField(max_length=100, default="")
    occupation = models.CharField(max_length=100, default="")
    height = models.CharField(max_length=100, default="")
    weight = models.CharField(max_length=100, default="")
    father_surname = models.CharField(max_length=100, default="")
    father_middle = models.CharField(max_length=100, default="")
    mother_surname = models.CharField(max_length=100, default="")
    mother_first = models.CharField(max_length=100, default="")
    mother_middle = models.CharField(max_length=100, default="")
    elementary = models.CharField(max_length=100, default="")
    secondary = models.CharField(max_length=100, default="")
    college = models.CharField(max_length=100, default="")
    vocational_course = models.CharField(max_length=100, default="")
    graduate_studies = models.CharField(max_length=100, default="")
    company_name = models.CharField(max_length=100, default="")
    sss_number = models.CharField(max_length=100, default="")
    name_of_children = models.CharField(max_length=100, default="")

    def __str__(self):
        return (
            f"{self.first_name} {self.middle_name} {self.last_name} {self.email} "
            f"{self.address} {self.sex} {self.birthday} {self.place_of_birth} "
            f"{self.citizenship} {self.blood_type} {self.religion} {self.civil_status} "
            f"{self.occupation} {self.father_surname} {self.father_middle} "
            f"{self.mother_surname} {self.mother_first} {self.mother_middle} "
            f"{self.elementary} {self.secondary} {self.college} "
            f"{self.vocational_course} {self.graduate_studies} {self.company_name} "
            f"{self.name_of_children}"
        )
