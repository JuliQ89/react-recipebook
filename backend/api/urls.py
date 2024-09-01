from django.urls import path, include

from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import TokenVerifyView

from .views import UserViewSet, MyTokenObtainPairView, RegisterUserView, KategoryView, DishView

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'kategory', KategoryView, basename='kategory')
router.register(r'rezepte', DishView, basename='rezepte')
urlpatterns = router.urls

urlpatterns = [
    path('router/', include(router.urls)),
    
    path('user/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('user/register/', RegisterUserView.as_view(), name='register_user'),
]
