from django.urls import path
from .views import product_list, product_detail, get_category_detail, get_category_list

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/',get_category_list),
    path('categories/<int:category_id>/', get_category_detail),
]
