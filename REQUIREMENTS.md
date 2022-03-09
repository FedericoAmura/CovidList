# React Native Challenge

Bienvenido a nuestro Lemon Cash React Native Challenge.

Para dar por completo este challenge tiene que completar todos los puntos a continuación.

- Crear un proyecto react native.
- Utilizar clases, FC, hooks, redux o context según lo crea necesario.
- Utilizar estilos, espaciados y tipografía según lo crea necesario.
- Alcanzar una UI armónica y consistente, pero no perder excesivo tiempo sobre la misma.
- Utilizar [https://reactnavigation.org/](https://reactnavigation.org/) v5 para la navegación.
- Crear un login simple que pueda mantener una sesión, inclusive si el usuario cierra la app y vuelve a abrir la app, para ello integre y haga uso de la librería [https://github.com/react-native-google-signin/google-signin](https://github.com/react-native-google-signin/google-signin).
- Crear un pantalla para el "**login**" antes mencionado
    - Una vez realizado el login redirigir al usuario a la pantalla de **países**. Imitar el flujo normal de una app con login.
- Crear una pantalla "**países**"
    - Consultar a esta API [https://api.covid19api.com/countries](https://api.covid19api.com/countries).

        ```jsx
        [
        	{
        		"Country": string,
        		"Slug": string,
        		"ISO2": string,
        	}
        ]
        ```

    - Mostrar la lista de países, siendo cada país un item el cual muestre nombre y código de país.
    - Hacer cada item presionable, si es presionado redirigir al usuario a la pantalla de "**casos confirmados**".
    - Debe haber un botón que permita hacer logout al usuario.
- Cree una pantalla "**casos confirmados"**
    - Mostrar un header title con el nombre del país seleccionado en la pantalla anterior.
    - Obtener el Slug del país seleccionado en la pantalla anterior
    - Consultar a esta API [https://api.covid19api.com/total/dayone/country/{Slug}/status/confirmed](https://api.covid19api.com/total/dayone/country/dominican-republic/status/confirmed)

    ```jsx
    [
    	{
    		"Country": string,
    		"CountryCode": string,
    		"Province": string,
    		"City": string,
    		"CityCode": string,
    		"Lat": string,
    		"Lon": string,
    		"Cases": number,
    		"Status": string,
    		"Date": string,
    	}
    ]
    ```

    - Mostrar un lista con la respuesta anterior, donde cada item muestre la fecha y la cantidad de casos.
    - Esta lista debe poder ordenarse según la cantidad de casos o la fecha. Cada sort debe permitir un orden ascendente y descendente. (no perder mucho tiempo con la UI del sort, se evaluará el aspecto técnico, para este paso)
- Crear un repositorio (público o dar acceso a @guido peirano y @Fede Erbes ) en su Github personal donde contenga el challenge.
