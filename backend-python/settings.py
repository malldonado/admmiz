DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'admmiz',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'db',  # Nome do serviço do banco de dados no Docker Compose
        'PORT': '5432',
    }
}
